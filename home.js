const blogBtn = document.getElementById('blog').addEventListener('click', function () {
    window.location.href = './blog.html'
})

let mainBalance = parseFloat(document.getElementById('main-balance').innerText)
let noakhaliTotal = parseFloat(document.getElementById('noakhali-total').innerText)

const date = new Date();

let modalMessage = document.getElementById('modal-message');
let modalPassage = document.getElementById('modal-passage');




//Donation for NOWAKAHLI
document.getElementById('noakhali-btn').addEventListener('click', function () {

    let inputAmount = getInputValue('noakhali-input')

    if (inputAmount === "" || isNaN(inputAmount) || inputAmount <= 0 ||inputAmount > mainBalance) {
        showModal("wrong input", "please check your input again")
        return
    } else {
        
        if (inputAmount.includes(".")) {
            const parts = inputAmount.split(".")
            inputAmount = parts[0] + "." + parts[1].slice(0, 2)
        }
        
        const inputNum = parseFloat(inputAmount)
        

        noakhaliTotal += inputNum;

        document.getElementById('noakhali-total').innerText = noakhaliTotal;

        mainBalance -= inputNum;

        document.getElementById('main-balance').innerText = mainBalance;


        //History
        const title1 = document.getElementById('title1').innerText
        const div = document.createElement('div')
        div.innerHTML = `
            <h3 style="font-size: 1.25rem; font-weight: 700;">${inputNum} tk has been donated for${title1}</h3>
            <p style="">${date}</p>
        `
        div.style.padding = '1rem';
        div.style.border = '1px solid var(--border)'
        div.style.borderRadius = '12px'
        document.getElementById('history-container').prepend(div)

        showModal("Thank you", "You have donated for humankind")
    }
})



//Toggle section
document.getElementById('donationBtn').addEventListener('click', function(){
    showActiveSection('card1')
    showActiveSection('card2')
    showActiveSection('card3')
})
document.getElementById('historyBtn').addEventListener('click', function(){
    // document.getElementById('history-container').classList.remove('hidden')
    showActiveSection('history-container')
})


//COMMON FUNCTION FOR GETTING INPUT VALUE
function getInputValue(id) {
    const inputValue = document.getElementById(id).value
    return inputValue;
}

//SHOW ACTIVE ROUTES
function showActiveSection(id){
    document.getElementById('history-container').classList.add('hidden')
    document.getElementById('card1').classList.add('hidden')
    document.getElementById('card2').classList.add('hidden')
    document.getElementById('card3').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}





//MODAL
const modal = document.getElementById('modal')

function showModal(message, passage){
    modalMessage.innerText = message;
    modalPassage.innerText = passage;

    modal.classList.remove('hidden')
}


document.getElementById('close-modal').addEventListener('click', closeModal)
modal.addEventListener('click', function(e){
    if(e.target === modal){
        closeModal()
    }
})

function closeModal(){
    modal.classList.add('hidden')
}
const data = [{ name: "ali", balance: 20000 },
{ name: "sara", balance: 15000 }
]

let user = ''
let view2 = document.getElementById("inputWithdraw").value
let view = document.querySelector("h1")
let error = document.getElementById("error")


function enterName() {
    user = document.getElementById("inputName").value
    user = user.toLowerCase()
    console.log(user)


    let account = data.find(u => u.name == user)

    if (account) {
        view.innerHTML = user
        error.innerHTML = ""
    } else {
        view.innerHTML =""
        error.innerHTML = "🚫 Invalid user name"

    }
    
    
}



function Deposit() {

    
    let depositAmount = Number(document.getElementById("inputDeposit").value)
    
    data.forEach((item) => {
        if (item.name == user) {
            if(depositAmount == ""){
                document.getElementById('statement').innerHTML = "Please enter the amount first"
            } else if (depositAmount > 500) {
                document.getElementById('statement').innerHTML = `You have successfully Deposited ${depositAmount}`
                item.balance += depositAmount
            } else {
                document.getElementById('statement').innerHTML = `Sorry! Your Amount can not be deposited`
            }
        }
    })
    document.getElementById("inputDeposit").value = ""
}

function withdraw() {
    let withdrawAmount = document.getElementById('inputWithdraw').value
    data.forEach((amount) => {
        if(withdrawAmount == ""){
            document.getElementById('statement').innerHTML = "Please enter the amount first"
        }
        if (amount.name == user) {
            if (withdrawAmount % 500 == 0 && withdrawAmount <= amount.balance && withdrawAmount > 0) {
                document.getElementById('statement').innerHTML = `You have successfully Withdrawn ${withdrawAmount}`
                amount.balance -= withdrawAmount
            } else {
                document.getElementById('statement').innerHTML = `Sorry! Your transaction could not be completed`
            }
        }
    })
    document.getElementById('inputWithdraw').value = ""
}

function checkBalance() {
    data.forEach((balanceShow) => {
        if (balanceShow.name == user) {
            document.getElementById('statement').innerHTML = `Your balance is ${balanceShow.balance}`
        } 
    })

}
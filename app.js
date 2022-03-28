const calculateBtn = document.querySelector('#calculateBtn')
const quantity = document.querySelector('#quantityInput')
const price = document.querySelector('#priceInput')
const state = document.querySelector('#state')
const totalRaw = document.getElementById('totalRawValue')
const total = document.getElementById('totalValue')
const discountTotal = document.getElementById('discountValue')

calculateBtn.addEventListener("click", calculate)


function discount(sum){
    if(sum >= 50000){
        discountSum = sum * 0.85
        return discountSum
    }

    else if(sum >= 10000){
        discountSum = sum * 0.9
        return discountSum
    }

    else if(sum >= 7000){
        discountSum = sum * 0.93
        return discountSum
    }

    else if(sum >= 5000){
        discountSum = sum * 0.95
        return discountSum
    }

    else if(sum >= 1000){
        discountSum = sum * 0.97
        return discountSum
    }
}

function calculate(){

    totalRaw.textContent = ""
    total.textContent = ""
    discountTotal.textContent = ""
    
    let sum = price.value * quantity.value

    totalRaw.textContent += Math.round((sum + Number.EPSILON) * 100) / 100

    tax = state.value / 100

    discountSum = discount(sum)

    totalGottenDiscount = sum - discountSum

    discountTotal.textContent += Math.round((totalGottenDiscount + Number.EPSILON) * 100) / 100

    endTotal = discountSum + (discountSum * tax)

    total.textContent += Math.round((endTotal + Number.EPSILON) * 100) / 100

    sum = 0
}

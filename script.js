let number = 0;
const maxNumber = 10;

const numberDisplay = document.getElementById('number');
const plus = document.getElementById('plus');
const message = document.getElementById('message');
const reset = document.getElementById('reset');

function updateDisplay(){
    numberDisplay.textContent = number;
    if(number >= 7){
        numberDisplay.style.color = 'red'
    } else {
        numberDisplay.style.color = 'rgb(53, 118, 246)';
    }
    if (number >= maxNumber){
        message.textContent = 'You reached the max number!';
        plus.disabled = true;
    } else {
        message.textContent = '';
        plus.disabled = false;
    }
}

plus.addEventListener('click',function(){
    number++;
    console.log('number',number);
    updateDisplay();
})

reset.addEventListener('click',function(){
    number = 0;
    console.log('number',number);
    updateDisplay();
})

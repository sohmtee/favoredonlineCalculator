// calculatorobject to hold the display screen
// the operators and thr operands

const calculator = {
  displayValue: '0',
  firstOperand: null,
  yetAnotherOperand: false,
  operator: null,
};

//
function updateDisplay(){
  const display = document.querySelector('.display-screen');
  display.value = calculator.displayValue;
}

//invoking the updateDisplay function
updateDisplay()

//for the buttons
const keys = document.querySelect('.calculator-buttons');
keys.addEventListener('click', (event) =>{
  const {target} = event;     //callback function

  //if a button is not clicked
  if (!target.matches('button')){
    //exit the function
    return;
  }

  if(target.classList.contains('operators')){
    console.log('operators', target.value);
    return;
  }

  if(target.classList.contains('decimal')){
    console.log('decimal',target.value);
    return;
  }

  if(target.classList.contains('clear')){
    console.log('clear',target.value);
    return;
  }

  if(target.classList.contains('clear-all')){
    console.log('clear-all',target.value);
    return;
  }
});

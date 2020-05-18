function getHistory(){
  return document.querySelector('.history-value').innerText;
}

function printHistory(num){
  return document.querySelector('.history-value').innerText = num;
}


function getOutput(){
  return document.querySelector('.output-value').innerText;
}


function printOutput(num){
  if(num ==''){
    document.querySelector('.output-value').innerText = num;
  }else{
    document.querySelector('.output-value').innerText = getFormattedNumber(num);
  }

}

function getFormattedNumber(num){
  if(num == '-'){
    return '';
  }
  //converting number to string datatype
  var n = Number(num);
  var value = n.toLocaleString('en');
  return value;
}

//reverting to number
function reverseNumberFormat(num){
  return Number(num.replace(/,/g, ''));
}




//Operators
var allOperatorButtons = document.querySelectorAll('.operators').length;

for (var i = 0; i < allOperatorButtons; i++){
  document.querySelectorAll('.operators')[i].addEventListener('click', function() {
    if(this.value =='AC'){
      printHistory('');
      printOutput('0');
    }else if (this.value =='C') {
      var output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0,output.length-1);
        printOutput(output);
      }
    }else{
      var history = getHistory();
      var output = getOutput();
      if (output == '' && history != ''){
        if(isNaN(history[history.length-1])){
          history = history.substr(0,history.length-1);
        }
      }
      if(output !='' || history !=''){
        output = output==''?                  //condition ? value-if-true: value-if-false ?(then) :(else)
        output:reverseNumberFormat(output);   //if output is empty, return output //else return reverseNumberFormat(output)
        history = history + output;
        if(this.value == '='){
          var result = eval(history);
          printOutput(result);
          printHistory('');
        }else{
          history = history + this.value;
          printHistory(history);
          printOutput('');
        }
      }

    }
  });
}

//Operands
var allOperandButtons = document.querySelectorAll('.operands').length;

for (var i = 0; i < allOperandButtons; i++){
  document.querySelectorAll('.operands')[i].addEventListener('click', function() {
    var output = reverseNumberFormat(getOutput());
    if( output != NaN){
      output = output + this.value;     //concatenating operand values
      printOutput(output);              //calling the printOutput fxn to display on screen
    }
  });
}

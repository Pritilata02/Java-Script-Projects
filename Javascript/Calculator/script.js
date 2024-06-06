
const display = document.getElementById("display");

let op = null;

function displayValue(input) {
  if(( display.value.slice(-1) == '+' || display.value.slice(-1) == '-' || display.value.slice(-1) == '*' || display.value.slice(-1) == '/' ) && ( input == '+' || input == '-' || input == '*' || input == '/' ) )
    display.value=display.value.slice(0,-1) + input;
  else
    display.value += input;
}

function clearDisplay() {
  display.value = " ";
  op = null;
}
function deleteDisplay(){
  display.value=display.value.slice(0,-1);
}

function calculate() {

  let temp = display.value.split(op);
  let a = temp[0];
  let b = temp[1];

  switch (op) {
    case '+':
      display.value = Number(a) + Number(b);
      break;
    case '-':
      display.value = Number(a) - Number(b);
      break;
    case '*':
      display.value = Number(a) * Number(b);
      break;
    case '/':
      display.value = Number(a) / Number(b);
      break;
    case '%':
      display.value = (Number(a)/Number(b))*100;

  }
}


function getOperator(el) {
  op = el.innerText;
  
}

const op_btns = document.getElementsByClassName('operator-btn');
[...op_btns].forEach(element => {
  element.addEventListener('click', (event) => {
    getOperator(element);
  });
});

const minNum=1;
const MaxNum=100;
const answer= Math.floor(Math.random() * (MaxNum-minNum+1))+minNum;

let attempts=0;
let guess;
let running=true;

while(running){
  guess=window.prompt(`guess a number between ${minNum} -${MaxNum}`);
  guess=Number(guess);

  if(isNaN(guess)){
    window.alert("please enter a valid number");
  }
  else if(guess < minNum || guess > maxNum){
    window.alert("please enter a valid number");

  }
  else{
    attempts ++ ;
    if(guess<answer){
      window.alert("TOO LOW!! TRY AGAIN!");
    }
    else if(guess>answer){
      window.alert("TOO HIGH!! TRY AGAIN!");
    }
    else{
      window.alert(`CORRECT!The answer was ${answer}.It took you${attempts} attempts`);
      running=false;
    }
  }
}
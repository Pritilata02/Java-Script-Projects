while (!user_name) {
    var user_name = prompt('Please enter your name');
}

if (user_name.length != 0) {
    user_name = user_name[0].toUpperCase() + user_name.slice(1,)
    document.getElementById('greeting_text').innerHTML = `Welcome, ${user_name}`;
}
let your_score = 0;
let computer_score = 0;


const rock_button = document.getElementById('rock_button');
const paper_button = document.getElementById('paper_button');
const scissor_button = document.getElementById('scissor_button');
const reset_button = document.getElementById('reset_button');

rock_button.addEventListener('click',()=>play('rock'));

paper_button.addEventListener('click',()=>play('paper'));

scissor_button.addEventListener('click',()=>play('scissor'));

reset_button.addEventListener('click',reset);

document.body.addEventListener('keydown',(event)=>handle_keyboard_inputs(event.key));

function handle_keyboard_inputs(key){
    if(key === 'r')
    {
        play('rock');
    }
    else if(key === 's')
    {
        play('scissor');
    }
    else if(key === 'p')
    {
        play('paper');
    }
}

function generate_computers_choice() {
    let c = Math.floor(Math.random() * 10);
    if (c <= 3) {
        return 'rock';
    }
    else if (c <= 7) {
        return 'paper';
    }
    else {
        return 'scissor';
    }
}

function play(users_choice) {
    let computers_choice = generate_computers_choice();
    let winner;
    let result,result_text;

    const score = JSON.parse(localStorage.getItem('score')) || {
        user_score : 0,
        computer_score : 0,
        tie: 0
    };

    if (users_choice === computers_choice) {
        result_text = `It's a tie.`;
        result = `&nbsp &nbsp &nbsp &nbsp &nbspYou<img class="result_move_img" src="assets/images/${users_choice}-emoji.png"> : <img class="result_move_img" src="assets/images/${computers_choice}-emoji.png"> Computer`;
        score.tie++;
    }
    else if (users_choice === 'rock') {
        if (computers_choice === 'paper') {
            winner = 'computer';
        }
        else if (computers_choice === 'scissor') {
            winner = 'you';
        }
    }
    else if (users_choice === 'paper') {
        if (computers_choice === 'rock') {
            winner = 'you';
        }
        else if (computers_choice === 'scissor') {
            winner = 'computer';
        }
    }
    else if (users_choice === 'scissor') {
        if (computers_choice === 'rock') {
            winner = 'computer';
        }
        else if (computers_choice === 'paper') {
            winner = 'you';
        }
    }

    if (winner === 'you') {
        score.user_score++;
        result_text = `Horray!! you win.`;
        result = `&nbsp &nbsp &nbsp &nbsp &nbspYou<img class="result_move_img" src="assets/images/${users_choice}-emoji.png"> : <img class="result_move_img" src="assets/images/${computers_choice}-emoji.png">Computer`;
        
    }
    else if(winner === 'computer') {
        score.computer_score++;
        result_text = `Better luck next time! Computer wins.`;
        result = `&nbsp &nbsp &nbsp &nbsp &nbspYou<img class="result_move_img" src="assets/images/${users_choice}-emoji.png"> : <img class="result_move_img" src="assets/images/${computers_choice}-emoji.png">Computer`;
        
    }

    localStorage.setItem('score',JSON.stringify(score));
    update_score();
    update_result(result,result_text);
}

function reset() {

    const score = {
        user_score : 0,
        computer_score : 0,
        tie : 0
    };
    localStorage.removeItem('score');
    update_score();
    document.querySelector('#js-result').style.visibility ='hidden';
    document.querySelector('#js-result_text').style.visibility ='hidden';
}

function update_score(){
    const score = JSON.parse(localStorage.getItem('score')) || {
        user_score : 0,
        computer_score : 0,
        tie : 0
    };

    let score_string = `You : ${score.user_score} &nbsp &nbsp Computer : ${score.computer_score} &nbsp &nbsp Tie: ${score.tie}`;
    document.querySelector('#js-score').innerHTML = score_string;
}

function update_result(result_string,result_text_string){
    document.querySelector('#js-result_text').innerHTML = result_text_string;
    document.querySelector('#js-result').innerHTML = result_string;
    document.querySelector('#js-result').style.visibility ='visible';
    document.querySelector('#js-result_text').style.visibility ='visible';
    document.querySelector('#begin_text').hidden = true;
}
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let i = getRandomInt(3); //will get 0, 1 or 2
    if (i == 0){
        return "rock";
    } else if (i == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

const nameBut = document.querySelector("#name");
function askNameFunction(){
    let name = prompt("What's your name?");
    let answerElement = document.getElementById("answer");
    answerElement.innerText = "Hello, " + name;
}
nameBut.addEventListener("click", askNameFunction);

function playRound(humanChoice){
    let score = 0;
    let computerChoice = getComputerChoice();

    if (humanChoice == "rock" && computerChoice == "scissors"){
        score++; //human won
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        score--; //human lost
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        score++; //human won
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        score--; //human lost
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        score++; //human won
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        score--; //human lost
    } 

    return {human: humanChoice, comp: computerChoice, score: score};
} //this function now returns an array

const centerDiv = document.querySelector('#rps-center');
const resultPara = document.querySelector('#result');

centerDiv.addEventListener('click', (event) => {
    let target = event.target;
    //let result;

    //play the game
    switch(target.id){
        case "rock":
            result = playRound("rock");
            break;
        case "paper":
            result = playRound("paper");
            break;
        case "scissors":
            result = playRound("scissors");
            break;
    }
    
    //print results
    if (result.score == -1) {
        console.log("You Lost!");
        resultPara.textContent = `You lost! ${result.human} is beaten by ${result.comp}!`;
    } else if (result.score == 1) {
        console.log("You Won!");
        resultPara.textContent = `You won! ${result.human} beats ${result.comp}!`;
    } else if (result.score == 0){
        console.log("A tie!");
        resultPara.textContent = `A tie! ${result.human} ties ${result.comp}!`;
    }
});

//from previous exercise
// function playGame(){
//     let rounds = prompt("How many rounds?");
//     let humanScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < rounds; i++) {
//         let roundResult = playRound();
//         if (roundResult == 1){
//             humanScore++;
//         } else if (roundResult == -1){
//             computerScore++;
//         }
//     }
//     let resultElement = document.getElementById("result");
//     resultElement.innerText = "You have gotten " + humanScore + " points!";
// }


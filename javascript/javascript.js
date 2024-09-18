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

function askNameFunction(){
    let name = prompt("What's your name?");
    let answerElement = document.getElementById("answer");
    answerElement.innerText = "Hello, " + name;
}

function playRound(){
    let score = 0;
    let humanChoice = prompt("What's your choice?");
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

    return score;
}

function playGame(){
    let rounds = prompt("How many rounds?");
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < rounds; i++) {
        let roundResult = playRound();
        if (roundResult == 1){
            humanScore++;
        } else if (roundResult == -1){
            computerScore++;
        }
    }
    let resultElement = document.getElementById("result");
    resultElement.innerText = "You have gotten " + humanScore + " points!";
}
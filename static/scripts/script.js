document.body.style.backgroundColor = "grey";

// VARIABLES
let compChoice = "";
let userChoice = "";
let score = [0, 0];
let result = "";
const moves = ["rock", "paper", "scissors"];
const resultLabel = document.getElementById("result"); 
const scoreboard = document.getElementById("score");

function genComputerMove(){
    compChoice = moves[Math.floor(Math.random() * moves.length)];
}

function rock(){
    userChoice = "rock";
}
function paper(){
    userChoice = "paper";
}
function scissors(){
    userChoice = "scissors";
}

function decideWinner(){
    genComputerMove();

    switch(userChoice){
        case "rock":
            if (compChoice == "rock"){
                result = "draw";
                break;
            }
            else if(compChoice == "paper"){
                result = "loss";
                break;
            }
            else{ //computer chose scissors
                result = "win";
                break;
            }
        case "paper":
            if (compChoice == "paper"){
                result = "draw";
                break;
            }
            else if(compChoice == "scissors"){
                result = "loss";
                break;
            }
            else{ //computer chose scissors
                result = "win";
                break;
            }
        case "scissors":
            if (compChoice == "scissors"){
                result = "draw";
                break;
            }
            else if(compChoice == "rock"){
                result = "loss";
                break;
            }
            else{ //computer chose scissors
                result = "win";
                break;
            }

        default:
            console.log("Select a move to play.");
            break;
    }    
    switch(result){
        case "win":
            score[0] += 1;
            resultLabel.innerHTML = `Your move, ${userChoice}, has beaten ${compChoice}.`;
            scoreboard.innerHTML =  `You ${score[0]} - Computer ${score[1]}`;
            break;
        case "loss":
            score[1] += 1;
            resultLabel.innerHTML = `Your move, ${userChoice}, has lost to ${compChoice}.`;
            scoreboard.innerHTML =  `You ${score[0]} - Computer ${score[1]}`;
            break;
        case "draw":
            resultLabel.innerHTML = `Your move, ${userChoice}, has drawn with ${compChoice}.`;
            scoreboard.innerHTML =  `You ${score[0]} - Computer ${score[1]}`;
            break;
        default:
            break;
    }

}

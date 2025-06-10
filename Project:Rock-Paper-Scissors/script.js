const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let humanChoice = "";

const winner = document.querySelector("#winner");

rock.addEventListener("click",function(){
    humanChoice = "rock";
    playRound(humanChoice,getComputerChoice());
    pcScore.textContent = computerScore;
    humScore.textContent = humanScore;

    if(humanScore==5 && computerScore==5)
    {
        winner.textContent = "Draw";
        humanScore = 0;
        computerScore = 0;
    }
    else if(humanScore ==5)
    {
        winner.textContent = "You Win!";
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 5)
    {
        winner.textContent == "Computer Win!";
        humanScore = 0;
        computerScore = 0;
    }
});
paper.addEventListener("click",function(){
    humanChoice = "paper";
    playRound(humanChoice,getComputerChoice());
    pcScore.textContent = computerScore;
    humScore.textContent = humanScore;
   if(humanScore==5 && computerScore==5)
    {
        winner.textContent = "Draw";
        humanScore = 0;
        computerScore = 0;

    }
    else if(humanScore ==5)
    {
        winner.textContent = "You Win!";
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 5)
    {
        winner.textContent == "Computer Win!";
        humanScore = 0;
        computerScore = 0;
    }
})
scissors.addEventListener("click",function(){
    humanChoice = "scissors";
    playRound(humanChoice,getComputerChoice());
    pcScore.textContent = computerScore;
    humScore.textContent = humanScore;
   if(humanScore==5 && computerScore==5)
    {
        winner.textContent = "Draw";
        humanScore = 0;
        computerScore = 0;
    }
    else if(humanScore ==5)
    {
        winner.textContent = "You Win!";
        humanScore = 0;
        computerScore = 0;
    }
    else if(computerScore == 5)
    {
        winner.textContent == "Computer Win!";
        humanScore = 0;
        computerScore = 0;
    }
});

const infoText = document.querySelector("#info");
const pcScore = document.querySelector("#pcScore");
const humScore = document.querySelector("#humanScore");

let humanScore = 0;
let computerScore = 0;



function getComputerChoice()
{
 let randomNumber = Math.round(Math.random() * 2);
 let computerChoice;

 if(randomNumber == 0)
 {
    computerChoice = "Rock";
 }
 else if(randomNumber == 1)
 {
    computerChoice = "Paper";
 }
 else if(randomNumber == 2)
 {
    computerChoice ="Scissors";
 }

 return computerChoice;
}

// function getHumanChoice()
// {
//     let humanChoice ="";
//     let lastHumanChoice;
//     if( humanChoice == "rock")
//     {
//         lastHumanChoice = humanChoice;
//     }
//     else if (humanChoice == "paper")
//     {
//         lastHumanChoice = humanChoice;
//     }
//     else if (humanChoice == "scissors")
//     {
//         lastHumanChoice == humanChoice;
//     }
//     else
//     {
//         alert("The entered value is incorrect");
//     }

//     return lastHumanChoice;
// }

function playRound(humanChoice,computerChoice)
{
    if(humanChoice == "rock" && computerChoice == "Rock")
    {
        console.log("Draw");
        infoText.textContent = "Draw";
        humanScore += 1;
        computerScore += 1;
    }
    else if(humanChoice == "rock" && computerChoice == "Paper")
    {
        console.log("You lose! Paper beats Rock");
        infoText.textContent = "You lose! Paper beats Rock";
        computerScore +=1;
    }
    else if(humanChoice == "rock" && computerChoice == "Scissors")
    {
        console.log("You win! Rock beats scissors");
        infoText.textContent = "You win! Rock beats scissors";
        humanScore += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "Rock")
    {
        console.log("You win! Paper beats rock");
        infoText.textContent = "You Win! Paper beats rock";
        humanScore += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "Paper")
    {
        console.log("Draw");
        infoText.textContent = "Draw";
        humanScore += 1;
        computerScore += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "Scissors")
    {
        console.log("You lose! Scissors beats paper");
        infoText.textContent = "You lose! Scissors beats paper";
        computerScore += 1;
    }
    else if(humanChoice =="scissors" && computerChoice == "Rock")
    {
        console.log("You lose! Rock beats scissors");
        infoText.textContent = "You lose! Rock beats scissors";
        computerScore += 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "Paper")
    {
        console.log("You win! Scissors beats paper"); 
        infoText.textContent = "You win! Scissors beats paper";
        humanScore += 1;
    }
    else if( humanChoice == "scissors" && computerChoice == "Scissors")
    {
        console.log("Draw");
        infoText.textContent = "Draw";
        humanScore +=1;
        computerScore +=1;
    }
}

function score()
{
    return console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
}

// function playGame()
// {
//    for(i=0; i<5; i++)
//    {
//     const humanSelection = getHumanChoice();
//     const computerChoice = getComputerChoice();
//     playRound(humanSelection,computerChoice);
//     score();

//     if(i == 4)
//     {
//         if(computerScore>humanScore)
//         {
//             console.log("Computer Win! Try again");
//         }
//         else if(humanScore > computerScore)
//         {
//             console.log("Human Win! Try again");
//         }
//         else if(humanScore == computerScore)
//         {
//             console.log("waow Computer and you are Draw");
//         }
//     }
//    }
// }










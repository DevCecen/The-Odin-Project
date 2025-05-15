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

function getHumanChoice()
{
    let humanChoice = prompt("Please choice move").toLowerCase();
    let lastHumanChoice;
    if( humanChoice == "rock")
    {
        lastHumanChoice = humanChoice;
    }
    else if (humanChoice == "paper")
    {
        lastHumanChoice = humanChoice;
    }
    else if (humanChoice == "scissors")
    {
        lastHumanChoice == humanChoice;
    }
    else
    {
        alert("The entered value is incorrect");
    }

    return lastHumanChoice;
}

function playRound(humanChoice,computerChoice)
{
    if(humanChoice == "rock" && computerChoice == "Rock")
    {
        console.log("Draw");
        humanScore += 1;
        computerScore += 1;
    }
    else if(humanChoice == "rock" && computerChoice == "Paper")
    {
        console.log("You lose! Paper beats Rock");
        computerScore +=1;
    }
    else if(humanChoice == "rock" && computerChoice == "Scissors")
    {
        console.log("You win! Rock beats scissors");
        humanScore += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "Rock")
    {
        console.log("You win! Paper beats rock");
        humanScore += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "Paper")
    {
        console.log("Draw");
        humanScore += 1;
        computerScore += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "Scissors")
    {
        console.log("You lose! Scissors beats paper");
        computerScore += 1;
    }
    else if(humanChoice =="scissors" && computerChoice == "Rock")
    {
        console.log("You lose! Rock beats scissors");
    }
    else if(humanChoice == "scissors" && computerChoice == "Paper")
    {
        console.log("You win! Scissors beats paper");
    }
    else if( humanChoice == "scissors" && computerChoice == "Scissors")
    {
        console.log("Draw");
    }
}

function score()
{
    return console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore)
}

function playGame()
{
   for(i=0; i<5; i++)
   {
    const humanSelection = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanSelection,computerChoice);
    score();

    if(i == 4)
    {
        if(computerScore>humanScore)
        {
            console.log("Computer Win! Try again");
        }
        else if(humanScore > computerScore)
        {
            console.log("Human Win! Try again");
        }
        else if(humanScore == computerScore)
        {
            console.log("waow Computer and you are Draw");
        }
    }
   }
}

playGame();








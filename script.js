let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const winner = document.querySelector(".winner");
const gamePanel = document.querySelector(".game-panel");
console.log(gamePanel)
buttons.forEach((button) => {
    button.addEventListener("click" , playRound);
}); 


// Function : Play a single round of rock paper scissors
function playRound()
{   
    const userChoice = getUserChoice(event);
    const computerChoice = getComputerChoice();
    const roundScoreBoard = document.querySelector(".round-score-container");
    const matchScoreBoard = document.querySelector(".match-score-container")
    // Case draw
    if
    (
        userChoice === computerChoice
    )
    {
        matchScoreBoard.innerHTML = `You : ${userScore} - ${computerScore} : AI`;
        roundScoreBoard.innerHTML = "Draw!";
    }
    // Case user win
    else if
    (
        userChoice === "paper" && computerChoice === "rock" ||
        userChoice === "scissors" && computerChoice === "paper" || 
        userChoice === "rock" && computerChoice === "scissors"    
    )
    {
        userScore++;
        matchScoreBoard.innerHTML = `You : ${userScore} - ${computerScore} : AI`;
        roundScoreBoard.innerHTML = `User won ${userChoice} beats ${computerChoice}`;
    }
    // Case computer win
    else 
    {
        computerScore++;
        matchScoreBoard.innerHTML = `You : ${userScore} - ${computerScore} : AI`;
        roundScoreBoard.innerHTML = `Computer won ${computerChoice} beats ${userChoice}`;    
    }

    checkWinner(userScore , computerScore);
    
}


function checkWinner (userScore , computerScore)
{
    if (userScore === 5 || computerScore === 5)
        {
            
            gamePanel.style.display = "none";
            winner.style.display = "flex";
            const winningPlayer = document.querySelector(".winner h1");
            userScore == 5 ? winningPlayer.innerHTML = "You won!" : winningPlayer.innerHTML = "You lost...";
            window.addEventListener("keydown" , () => {
                if(event.key === "r")
                {
                    location.reload();
                }
            })
        }
}

// Function : Get Computer choice either rock , paper or scissor
function getComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * 100)

    if (randomNumber <= 33)
    {
        return "rock";
    }
    else if (randomNumber > 33 && randomNumber <= 66)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

// Function : Get user choice either rock , paper or scissor
 
function getUserChoice(buttonClicked)
{
    return buttonClicked.target.value;
}


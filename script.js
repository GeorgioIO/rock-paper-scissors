let userScore = 0;
let computerScore = 0;











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
 
function getUserChoice()
{
    while(true)
    {
        const userChoice = prompt('Pick "rock" , "paper" or "scissors" : ').toLowerCase().trim();
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors")
        {
            return userChoice;
        }
        continue;
    }
}


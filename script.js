const options = ["rock","paper","sissors"];
let playerWins = 0;
let compWins = 0;
let Draws = 0;

function getComputerChoice()
{
    const randomIndex = Math.floor((Math.random() * options.length));
    return options[randomIndex]
}

function playRound(playerSelection, compSelection)
{
    const playerIndex = options.indexOf(playerSelection);
    const compIndex = options.indexOf(compSelection);
    const sub = playerIndex - compIndex;

    if(sub==-2 || sub==1)
    {
        playerWins++;
        return `You win, ${playerSelection} beats ${compSelection}`
    }
    if(sub==2 || sub==-1)
    {
        compWins++;
        return `You Lose, ${compSelection} beats ${playerSelection}`
    }
    Draws++;
    return "Draw !!"
}

function getPlayerChoice()
{
    let playerPlay;
    while(true)
    {
        playerPlay = prompt("Enter your Move.")
        if(options.includes(playerPlay))
            {break;}
        else
            {alert("Please enter a valid choice.");}
    }

    return playerPlay.toLowerCase();
}

function playGame()
{
    for (let index = 0; index < 5; index++) {
        const PlayerPlay = getPlayerChoice();
        const CompPlay = getComputerChoice();
        console.log(playRound(PlayerPlay,CompPlay));
    }
    if (playerWins > compWins)
        alert("Player has won in best of 5");
    else
        alert("Computer has won in best of 5");
}


playGame();


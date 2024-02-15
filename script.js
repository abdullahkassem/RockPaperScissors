const options = ["rock","paper","scissor"];

const winTracker = {
    playerWins: 0,
    compWins: 0,
    draws: 0,
  
    playerWinsIncrement() {
      this.playerWins++;
      const score = document.querySelector("#playerWins .scoreNum");
      score.textContent = this.playerWins;
      if(this.playerWins >= 5)
      {
        console.log("Player Wins!!");
      }
    },
  
    compWinsIncrement() {
      this.compWins++;
      const score = document.querySelector("#computerWins .scoreNum");
      score.textContent = this.compWins;
    },
  
    drawIncrement() {
      this.draws++;
      const score = document.querySelector("#numOfDraws .scoreNum");
      score.textContent = this.draws;
    },

    resetWins() {
        this.playerWins = 0;
        this.compWins = 0;
        this.draws = 0;
    },
  };
  

// let playerWins = 0;
// let compWins = 0;
// let Draws = 0;

function getComputerChoice()
{
    const randomIndex = Math.floor((Math.random() * options.length));
    return options[randomIndex]
}

function playRound(playerSelection, compSelection)
{
    const playerIndex = options.indexOf(playerSelection);
    if (playerIndex == -1) {
        console.error("wrong player choice entered")
    }
    const compIndex = options.indexOf(compSelection);
    const sub = playerIndex - compIndex;

    if(sub==-2 || sub==1)
    {
        winTracker.playerWinsIncrement();
        console.log(`You win, ${playerSelection} beats ${compSelection}`);
        return;
    }
    if(sub==2 || sub==-1)
    {
        winTracker.compWinsIncrement();
        console.log( `You Lose, ${compSelection} beats ${playerSelection}`);
        return;
    }
    winTracker.drawIncrement();
    console.log( "Draw !!");
    
}


// function getPlayerChoice()
// {
//     let playerPlay;
//     while(true)
//     {
//         playerPlay = prompt("Enter your Move.")
//         if(options.includes(playerPlay))
//             {break;}
//         else
//             {alert("Please enter a valid choice.");}
//     }

//     return playerPlay.toLowerCase();
// }


// function playGame()
// {
//     for (let index = 0; index < 5; index++) {
//         const PlayerPlay = getPlayerChoice();
//         const CompPlay = getComputerChoice();
//         console.log(playRound(PlayerPlay,CompPlay));
//     }
//     if (playerWins > compWins)
//         alert("Player has won in best of 5");
//     else
//         alert("Computer has won in best of 5");
// }

function optionPressed()
{
    const clickedId = this.id;
    console.log(`Element with ID: ${clickedId} was clicked.`);
    playRound(clickedId, getComputerChoice() );
}

const buttons = document.querySelectorAll(".options");
buttons.forEach( button => {
    button.addEventListener("click",optionPressed)
    });

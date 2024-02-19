const options = ["rock","paper","scissor"];

const winTracker = {
    playerWins: 0,
    compWins: 0,
    draws: 0,
  
    playerWinsIncrement() {
      this.playerWins++;
      const score = document.querySelector("#playerWins .scoreNum");
      score.textContent = this.playerWins;
      flashDiv(document.querySelector("#playerWins"));
      if(this.playerWins >= 5)
      {
        console.log("Player Wins!!");
        gameEnd("Player has won the game");
        confetti();
      }
    },
  
    compWinsIncrement() {
      this.compWins++;
      const score = document.querySelector("#computerWins .scoreNum");
      score.textContent = this.compWins;
      flashDiv(document.querySelector("#computerWins"));
      if(this.compWins >= 5)
      {
        console.log("Computer Wins!!");
        gameEnd("Computer has won the game");
      }
    },
  
    drawIncrement() {
      this.draws++;
      const score = document.querySelector("#numOfDraws .scoreNum");
      score.textContent = this.draws;
      flashDiv(document.querySelector("#numOfDraws"));
      
    },

    resetWins() {
        this.playerWins = 0;
        this.compWins = 0;
        this.draws = 0;
        const scores = document.querySelectorAll(".scoreNum");
        scores.forEach(score =>{
            score.textContent = 0;
        });
    },
  };
  

function gameEnd(txt)
{
    const gameContainer = document.querySelector("#gameContainer");
    const endDisplay = document.querySelector("#endDisplay");
    const endMessage = document.querySelector("#endMessage");
    
    endMessage.textContent = txt;
    
    gameContainer.classList.add("fadeout");
    setTimeout(() => {
        gameContainer.classList.remove("fadeout");
        gameContainer.classList.add("disappear");
        endDisplay.classList.remove("disappear");
    }, 1000); // Adjust timeout for 1 second

}

function flashDiv(divElement) 
{
    divElement.classList.add("flicker");
    setTimeout(() => {
        divElement.classList.remove("flicker");
    }, 1000); // Adjust timeout for 1 second
}


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

    const newGameButton = document.querySelector(".newGameButton");

    newGameButton.addEventListener("click",()=>{
        const gameContainer = document.querySelector("#gameContainer");
        const endDisplay = document.querySelector("#endDisplay");
        
        gameContainer.classList.remove("disappear");
        endDisplay.classList.add("disappear");

        winTracker.resetWins();
    });
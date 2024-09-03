let myScore = 0;
let computerScore = 0;

function humanChoice() {
    let myChoice = prompt("Choose rock, paper or scissors?");

    if (myChoice !== null) {
        myChoice = myChoice.toLowerCase();

        if (myChoice === "rock" || myChoice === 'paper' || myChoice === 'scissors') {
            return myChoice
        } else {
            alert("Invalid choice. Please choose rock, paper, or scissors.");
            return null;
        }
    } else {
        return null;
    }
}

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex];
}


function playRound(humanChoice, computerChoice) {

    if (humanChoice === null) {
        return 'no game played.';
    }

    if (humanChoice === computerChoice) {
        return 'Its a tie!' + ' You chose ' + humanChoice + " and the computer chose " + computerChoice
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        myScore = myScore + 1;
        return "You win! " + humanChoice + " beats " + computerChoice;
    } else {
        computerScore = computerScore + 1;
        return "You lost. " + computerChoice + " beats " + humanChoice;

    }

}



function playGame() {
    for (let i = 0; i < 5; i++) {
        const result = playRound(humanChoice(), computerChoice());
        console.log(result);
        console.log("Your score is: " + myScore + " and the computer's score is: " + computerScore);
    }
}

playGame();
function computerPlay() {
    let num = Math.floor(Math.random() * 100 / 33 + 1);
    let computerMove = ""
    switch (num) {
        case 1:
            computerMove = "rock";
            break;
        case 2:
            computerMove = "paper";
            break;
        case 3:
            computerMove = "scissors";
            break;
    }
    return computerMove;
}

function playRound(playerSelection, computerSelection) {
    let gameResult = ""
    if (playerSelection === "rock" && computerSelection === "scissors") {
        gameResult = "You win!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        gameResult = "You win!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        gameResult = "You win!";
    } else if (playerSelection === computerSelection) {
        gameResult = "It's a draw!"
    } else {
        gameResult = "You lose!"
    }
    return gameResult;
}

function game() {

    while (counterPlayer < 5 && counterComputer < 5) {
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection)

        if (result == "You win!") {
            counterPlayer++;
        } else if (result == "You lose!") {
            counterComputer++;
        }
        console.log("I chose " + computerSelection);
        console.log("You chose " + playerSelection);
        console.log(result);
        console.log("The score is " + counterComputer + " - " + counterPlayer)
    }
}

const playerSelection = "rock";
let counterPlayer = 0;
let counterComputer = 0;

game()

if (counterComputer < counterPlayer) {
    console.log("You beat me, congrats!")
} else if (counterComputer > counterPlayer) {
    console.log("I have defeated you!")
}
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
    if ((playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") || (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") || (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")) {
        gameResult = playerSelection + " beats " + computerSelection + ". You win!";
    } else if (playerSelection.toLowerCase() === computerSelection) {
        gameResult = "It's a draw!"
    } else {
        gameResult = computerSelection + " beats " + playerSelection + ". You lose!";
    }
    return gameResult;
}

function game() {

    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection)

    if (result == playerSelection + " beats " + computerSelection + ". You win!") {
        counterPlayer++;
    } else if (result == computerSelection + " beats " + playerSelection + ". You lose!") {
        counterComputer++;
    }
    const p = document.createElement("p");
    p.textContent = ("I chose " + computerSelection +
        ". You chose " + playerSelection.toLowerCase() + ". " +
        result)



    results.appendChild(p)
    score.textContent = (counterPlayer + " - " + counterComputer)

}
const results = document.querySelector("#results");
const score = document.querySelector("#score");

const btns = document.querySelectorAll("button");
btns.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.innerText;
        game();

    });
});
let playerSelection = "";
let counterPlayer = 0;
let counterComputer = 0;


if (counterComputer < counterPlayer) {
    console.log("You beat me, congrats!")
} else if (counterComputer > counterPlayer) {
    console.log("I have defeated you!")
}
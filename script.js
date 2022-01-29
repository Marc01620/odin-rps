function computerPlay() {
    let num = Math.floor(Math.random() * 100 / 33 + 1);
    let computerMove = ""
    switch (num) {
        case 1:
            computerMove = "Rock";
            break;
        case 2:
            computerMove = "Paper";
            break;
        case 3:
            computerMove = "Scissors";
            break;
    }
    return computerMove;
}

function playRound(playerSelection, computerSelection) {
    let gameResult = ""
    if ((playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") || (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") || (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper")) {
        gameResult = playerSelection + " beats " + computerSelection.toLowerCase() + ". You win!";
    } else if (playerSelection === computerSelection) {
        gameResult = "It's a draw!"
    } else {
        gameResult = computerSelection + " beats " + playerSelection.toLowerCase() + ". You lose!";
    }
    return gameResult;
}

function game() {
    if (counterPlayer <= 4 && counterComputer <= 4) {
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection)

        if (result == playerSelection + " beats " + computerSelection.toLowerCase() + ". You win!") {
            counterPlayer++;
        } else if (result == computerSelection + " beats " + playerSelection.toLowerCase() + ". You lose!") {
            counterComputer++;
        }
        const p = document.createElement("p");
        p.textContent = ("Round " + counterRound + ": I chose " + computerSelection.toLowerCase() +
            ". You chose " + playerSelection.toLowerCase() + ". " + result)
        counterRound++;
        results.appendChild(p)
        if (counterComputer < counterPlayer) {
            score.textContent = ("The score is " + counterPlayer + " - " + counterComputer + " for you.")
        } else if (counterComputer > counterPlayer) {
            score.textContent = ("The score is " + counterComputer + " - " + counterPlayer + " for me.")
        } else if (counterPlayer === counterComputer) {
            score.textContent = ("The score is tied " + counterComputer + " - " + counterPlayer + ".")
        }
    }
    if (counterComputer == 5 || counterPlayer == 5) {
        counterComputer++;
        counterPlayer++;
        const endText = document.createElement("p");
        endText.classList.add("end-text")
        if (counterComputer < counterPlayer) {
            endText.textContent = "You beat me... Congratulations, I guess. Refresh the page to play again."
        } else if (counterComputer > counterPlayer) {
            endText.textContent = "I beat you! Refresh the page to play again, good luck next time!"
        }

        score.appendChild(endText)
    }
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
let counterRound = 1;
/* while (results.firstChild) {
            results.removeChild(results.firstChild);
    } */
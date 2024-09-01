const result = document.querySelector("h1");
const btn = document.querySelector("#btn");
const input = document.querySelector("#guess-number");
const winGuess = document.querySelector(".win-guess");
const loseGuess = document.querySelector(".lose-guess");
const button = document.querySelector(".new-game");

let randomNumber = generateRandomNumber();
let counter = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function game() {
  const guess = parseInt(input.value, 10);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    alert("Enter a number between 1 and 10");
    input.value = "";
    return;
  }

  if (guess === randomNumber) {
    result.textContent = "You Win";
    winGuess.textContent += `${guess} `;
  } else {
    result.textContent = "You Lose";
    loseGuess.textContent += `${guess} `;
  }

  input.value = "";
  counter++;

  if (counter === 10) {
    result.textContent = "Game End";
    input.disabled = true;
  } else {
    randomNumber = generateRandomNumber(); // Generate new random number for next round
  }
}

btn.addEventListener("click", game);

button.addEventListener("click", () => {
  result.textContent = "";
  winGuess.textContent = "";
  loseGuess.textContent = "";
  input.disabled = false;
  counter = 0;
  randomNumber = generateRandomNumber(); // Reset random number
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    btn.click();
  }
});

// const container = document.querySelector(".container");
const result = document.querySelector("h1");
const btn = document.querySelector("#btn");
const input = document.querySelector("#guess-number");
let winGuess = document.querySelector(".win-guess");
let loseGuess = document.querySelector(".lose-guess");
const button = document.querySelector(".new-game");

function randomNumber() {
  return parseInt(Math.random() * 10 + 1);
}

btn.addEventListener("click", game);

let counter = 0;

function game() {
  if (input.value <= 10) {
    if (input.value === "") {
      alert("Enter between 1 to 10");
      input.value = "";
    } else {
      if (input.value == randomNumber()) {
        result.innerHTML = `You Win`;
        winGuess.innerHTML += `${input.value} `;
      } else {
        result.innerHTML = `You Lose`;
        loseGuess.innerHTML += `${input.value} `;
      }
    }
  } else {
    alert("Enter between 1 to 10");
    input.value = "";
  }

  input.value = "";
  counter++;
  endGame();
}

function endGame() {
  if (counter === 10) {
    result.innerHTML = "Game End";
    // input.setAttribute("disabled", "");
    input.disabled = true;
  }
}

button.addEventListener("click", () => {
  result.innerHTML = "";
  winGuess.innerHTML = "";
  loseGuess.innerHTML = "";
  // input.removeAttribute("disabled");
  input.disabled = false;
  counter = 0;
});

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
    btn.click();
  }
});

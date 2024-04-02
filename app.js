const btnRoll = document.querySelector(".btn__roll");
const btnNew = document.querySelector(".btn__new");
const btnHold = document.querySelector(".btn__hold");

const number = document.querySelector(".number");
number.style.display = "none";

let counterScore = 0;
let activePlayer = 0;
let score = [0, 0];
let gameOver = true;

function playRetyrn() {
  counterScore = 0;
  document.getElementById(`current__${activePlayer}`).textContent =
    counterScore;
  number.style.display = "none";
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(".player__0").classList.toggle("player__active");
  document.querySelector(".player__1").classList.toggle("player__active");
}

btnRoll.addEventListener("click", () => {
  if (gameOver) {
    number.style.display = "block";
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    number.textContent = randomNumber;
    if (randomNumber !== 1) {
      counterScore += randomNumber;
      document.getElementById(`current__${activePlayer}`).textContent =
        counterScore;
    } else {
      playRetyrn();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (gameOver) {
    score[activePlayer] += counterScore;
    document.getElementById(`score__${activePlayer}`).textContent =
      score[activePlayer];
    playRetyrn();
    if (score[activePlayer] >= 100) {
      gameOver = false;
      document
        .querySelector(`.player__${activePlayer}`)
        .classList.add("player--winner");
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", () => {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  gameOver = true;
  document.getElementById(`current__0`).textContent = 0;
  document.getElementById(`current__1`).textContent = 0;
  document.getElementById(`score__0`).textContent = 0;
  document.getElementById(`score__1`).textContent = 0;
  document.querySelector(".player__0").classList.remove("player--winner");
  document.querySelector(".player__1").classList.remove("player--winner");
  document.querySelector(".player__1").classList.remove("player__active");
  document.querySelector(".player__0").classList.add("player__active");
});

let timer = 60;
let score = 0;
let randomN = 0;

function ScoreInc() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function getNewHit() {
  randomN = Math.floor(Math.random() * 10);
  document.querySelector("#hit").innerHTML = randomN;
}

function makeBubble() {
  let closture = "";

  for (let i = 1; i <= 263; i++) {
    let random = Math.floor(Math.random() * 10);
    closture += `<div class="bubble">${random}</div>`;
  }

  document.querySelector("#pbot").innerHTML = closture;
}

function runTime() {
  let a = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").innerHTML = timer;
    } else {
      clearInterval(a);
      document.querySelector("#pbot").innerHTML = `
      <div class="result">
      <h1>Game Over</h1>
      <h3>Score: ${score}</h3>
      </div>
      `;
      document.getElementById("btn").style.visibility = "visible";
    }
  }, 1000);
}

document.querySelector("#btn").addEventListener("click", () => {
  if (timer === 0) {
    window.location.reload();
  }
});

document.querySelector("#pbot").addEventListener("click", (e) => {
  let clickedNum = Number(e.target.textContent);
  if (clickedNum === randomN) {
    ScoreInc();
    makeBubble();
    getNewHit();
  }
});

getNewHit();
runTime();
makeBubble();

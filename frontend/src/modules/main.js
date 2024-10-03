import { getAllthePlayers, addaPlayer } from "./gissanumretrequest.js";
import { displayAlltoppPlayers } from "./gui.js";

const form = document.querySelector("form");

let score = 0;

getAllthePlayers().then(displayAlltoppPlayers);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let correctNumber = Math.floor(Math.random() * 3) + 1;
  let formElement = document.querySelector("form");
  let userName = document.getElementById("playersname").value;
  let userAnswer = parseInt(
    document.getElementById("playersnumberofguess").value
  );

  let resultElement = document.getElementById("result");

  if (correctNumber == userAnswer) {
    score++;

    resultElement.textContent = `Rätt svar!`;

    let divResult = document.createElement("div");
    divResult.setAttribute("id", "mydivResult");

    let pElplayername = document.createElement("p");
    pElplayername.setAttribute("id", "mypElplayername");

    let pElplayerscore = document.createElement("p");
    pElplayerscore.setAttribute("id", "mypElplayerscore");

    pElplayername.textContent = "Namn: " + userName;
    pElplayerscore.textContent = "Poäng: " + score;

    divResult.append(pElplayername, pElplayerscore);
    document.body.append(divResult);
  } else {
    resultElement.textContent = `Fel svar! Datorns val : ${correctNumber}`;
    score = 0;
  }
});



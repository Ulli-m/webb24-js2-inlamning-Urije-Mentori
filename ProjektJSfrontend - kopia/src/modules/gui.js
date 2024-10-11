import { getAllthePlayers } from "./gissanumretrequest.js";

async function displayAlltoppPlayers() {
  const container = document.querySelector("#playersContainer");
  console.log(container);
  container.innerHTML = "";

  const highScoreplayersArray = await getAllthePlayers();

  highScoreplayersArray.sort((a, b) => b.score - a.score);

  const myH2El = document.createElement("h2");
  myH2El.textContent = " Highscorelista topp 5 poäng: ";
  container.append(myH2El);
  myH2El.setAttribute("id", "myH2Elgui");

  highScoreplayersArray.slice(0, 5).forEach((player, index) => {
    const highScoreDiv = document.createElement("div");
    const myp1 = document.createElement("p");
    highScoreDiv.setAttribute("id", "myhighScoreDiv");

    myp1.textContent = `#${index + 1} Namn: ${player.name}, Poäng: ${
      player.score
    }`;
    myp1.setAttribute("id", "myp1gui");

    highScoreDiv.append(myp1);
    container.append(highScoreDiv);
  });
}

export { displayAlltoppPlayers };

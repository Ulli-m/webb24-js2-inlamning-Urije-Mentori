import fs from "fs/promises";

async function getAllPlayers() {
  const rawdata = await fs.readFile("./src/highscore.json");
  return JSON.parse(rawdata);
}

async function addPlayer(newPlayers) {
  const player = await getAllPlayers();

  console.log("org array", player);

  player.push(newPlayers);
  console.log("after push", player);

  const arr = player.sort((a, b) => b.score - a.score).slice(0, 5);
  console.log("after slice ", player);
  console.log(arr);

  await fs.writeFile("./src/highscore.json", JSON.stringify(arr, null, 2));
}

export { getAllPlayers, addPlayer };

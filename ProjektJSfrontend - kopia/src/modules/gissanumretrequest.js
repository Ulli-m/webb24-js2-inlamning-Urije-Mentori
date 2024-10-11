const baseURL = "http://localhost:5000/players";

async function getAllthePlayers() {
  const res = await fetch(baseURL);
  console.log(res);
  const scores = await res.json();
  console.log(scores);
  return scores;
}

async function addaPlayer(newPlayer) {
  const options = {
    method: "POST",
    body: JSON.stringify(newPlayer),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };

  const res = await fetch(baseURL, options);
  const data = await res.json();
  console.log(data);
}

export { getAllthePlayers, addaPlayer };

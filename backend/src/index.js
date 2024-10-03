import express from "express";
import * as database from "./handledatabase.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.get("/players", async (req, res) => {
  const myPlayers = await database.getAllPlayers();
  res.json(myPlayers);
});

app.post("/players", async (req, res) => {
  const newPlayers = await database.addPlayer(req.body);
  res.json({ message: "New player added", scoreList: newPlayers });
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});

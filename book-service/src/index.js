import express from "express";
import dotenv from "dotenv";

const app = express();
const port = 3000;
dotenv.config();

dbStart();

app.get("/books", async (req, res) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`Book Service running at http://localhost:${port}`);
});

import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); // lets configure the .env so we can use the bits from it

const app = express();

app.use(cors());
app.use(express.json());

const connectionString = process.env.DATABASE_URL;

const db = new pg.Pool({ connectionString: connectionString });

app.get("/", (request, response) => {
  response.json("You are in the server!");
});

app.get("/songs", async (request, response) => {
  const result = await db.query(`SELECT *
FROM songs`);
  response.json(result.rows);
});

app.post("/songs", async (request, response) => {
  const title = request.body.title;
  const year = request.body.year;
  db.query(`INSERT INTO contestants (title, year) VALUES ($1, $2)`, [
    title,
    year,
  ]);
  response.json({ success: true });
});

app.listen(8080, () => console.log("I am running on 8080"));

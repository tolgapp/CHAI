import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const port = 3000;

app.listen(port, () => {
  console.log("Listening");
});

app.get("/", (req, res, next) => {
  res.send(`<h1>Hello World!</h1> <a href="/message">Message</a>`);
});

app.get("/message", (req, res, next) => {
  res.json({ message: "Hello from server.." });
});

export default app;

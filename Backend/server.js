import express from "express";
import cors from "cors";
import coffee from "../Backend/assets/coffees.json" assert { type: "json" };

const app = express();
app.use(cors());

const port = 3000;

app.get('/', (request, response) => {
  response.send('Testing Hello World!')
})

app.get('/message', (request, response) => {
  response.send('Testing second message')
})

app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`)
})

app.get("/coffee", (request, response) => {
  response.status(200).json(coffee);
});

app.post("/coffee", (request, response) => {
  todos.push(request.body);
  response.status(201).json({ msg: "Coffees added" });
});


export default app;

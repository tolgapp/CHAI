import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const port = 3000;

app.get('/', (request, response) => {
  response.send('Testing Hello World!')
})


app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`)
})


export default app;

const app = require("express")();
const bodyParser = require("body-parser");

const actionMediator = require("./src/actionMediator");

const PORT = 3000;

app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy"
  })
})

app.post("/api/webhook", async (req, res) => {
  console.log(req.body);
  const result = await actionMediator.send(req.body);
  res.json(result);
})

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`)
})
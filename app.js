const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/mylastname", (req, res) => {
  const lastName = "Ваганов";  // Замените на свою фамилию
  res.send(lastName);
});

const port = 3000;
app.listen(port, () => {
  console.log(`API запущено на порту ${port}`);
});
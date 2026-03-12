import express from "express";

const app = express();
const PORT = 3000;

app.get("/health", (req, res) => {
  res.send("health ok");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Student Portal!");
});

app.get("/about", (req, res) => {
  res.send("This is the About page for the Student Portal.");
});

app.get("/contact", (req, res) => {
  res.send(
    "For any queries feel free to contact Shashank Jadhav at shashank@gmail.com"
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

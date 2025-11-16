const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the student portal!");
});

app.get("/about", (req, res) => {
  res.send(
    "Stay connected, stay informed, and make the most of your academic journey with the Student Portal!"
  );
});

app.get("/contact", (req, res) => {
  res.send("Need help! Contact Shashank Jadhav at shashank@gmail.com");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

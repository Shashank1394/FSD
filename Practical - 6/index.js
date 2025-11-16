const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.end("Welcome to my college");
  } else if (req.url === "/about") {
    res.end("This is the About page of my college.");
  } else if (req.url === "/contact") {
    res.end("This is the Contact page of my college");
  } else {
    res.end("404 Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

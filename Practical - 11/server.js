import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

let clients = [];

app.get("/events", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  const clientId = Date.now();
  const newClient = { id: clientId, res };
  clients.push(newClient);

  console.log(`Client connected: ${clientId}`);

  req.on("close", () => {
    console.log(`Client disconnected: ${clientId}`);
    clients = clients.filter((c) => c.id !== clientId);
  });
});

app.post("/notify", (req, res) => {
  const { title, message } = req.body;
  if (!title || !message)
    return res.status(400).json({ error: "Missing title or message" });

  const payload = JSON.stringify({
    title,
    message,
    timestamp: new Date().toISOString(),
  });

  clients.forEach((client) => client.res.write(`data: ${payload}\n\n`));

  console.log("Notification sent:", title);
  res.json({ success: true });
});

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);

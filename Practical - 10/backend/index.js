import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/todosdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Error: ", err));

const Todo = mongoose.model(
  "Todo",
  new mongoose.Schema({
    text: String,
    done: { type: Boolean, default: false },
  })
);

app.get("/todos", async (req, res) => {
  res.send(await Todo.find());
});

app.post("/todos", async (req, res) => {
  const todo = await Todo.create({ text: req.body.text });
  res.send(todo);
});

app.put("/todos/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.done = !todo.done;
  await todo.save();
  res.send(todo);
});

app.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.send({ message: "Deleted" });
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));

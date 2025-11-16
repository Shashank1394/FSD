"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const API_BASE = "/api/todos";

  const fetchTodos = async () => {
    try {
      const res = await fetch(API_BASE);
      if (!res.ok) throw new Error("Failed to fetch todos");
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) throw new Error("Failed to add todo");
      setText("");
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: "PUT" });
      if (!res.ok) throw new Error("Failed to toggle todo");
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete todo");
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-lg mx-4 border border-white/20">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-white tracking-wide">
          📝 To-Do App
        </h1>

        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <input
            className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Add a new task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition font-semibold"
          >
            Add
          </button>
        </form>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="flex justify-between items-center px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition border border-white/10"
            >
              <span
                onClick={() => toggleTodo(todo._id)}
                className={`cursor-pointer text-lg ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo._id)}
                className="text-red-400 hover:text-red-500 text-lg transition"
                title="Delete"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

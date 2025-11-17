import { useEffect, useState } from "react";

const API = "http://localhost:4000";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const loadTodos = async () => {
    const res = await fetch(API + "/todos");
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async () => {
    if (!text.trim()) return;

    await fetch(API + "/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    setText("");
    loadTodos();
  };

  const toggleTodo = async (id) => {
    await fetch(API + "/todos/" + id, {
      method: "PUT",
    });

    loadTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(API + "/todos/" + id, {
      method: "DELETE",
    });

    loadTodos();
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do App</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={text}
            placeholder="Add a task..."
            onChange={(e) => setText(e.target.value)}
            className="flex-1 border p-2 rounded"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="flex justify-between items-center p-2 bg-gray-50 rounded border"
            >
              <span
                className={`cursor-pointer ${
                  todo.done ? "line-through text-gray-500" : ""
                }`}
                onClick={() => toggleTodo(todo._id)}
              >
                {todo.text}
              </span>
              <button
                className="text-red-600"
                onClick={() => deleteTodo(todo._id)}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;

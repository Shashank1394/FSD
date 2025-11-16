import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [notifications, setNotifications] = useState([]);
  const [form, setForm] = useState({ title: "", message: "" });

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:4000/events");

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setNotifications((prev) => [data, ...prev]);
    };

    eventSource.onerror = () => {
      console.error("EventSource failed.");
      eventSource.close();
    };

    return () => eventSource.close();
  }, []);

  const sendNotification = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/notify", form);
    setForm({ title: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-indigo-900 to-black text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-extrabold mb-8 flex items-center gap-2 drop-shadow-lg">
        <span role="img" aria-label="bell">
          🔔
        </span>{" "}
        Event Driven Notification Service
      </h1>

      {/* Notification Form */}
      <form
        onSubmit={sendNotification}
        className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-2xl border border-white/10 w-full max-w-md mb-10"
      >
        <input
          type="text"
          placeholder="Title"
          className="w-full mb-3 p-3 rounded-lg text-white outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Message"
          className="w-full mb-3 p-3 rounded-lg text-white outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500 h-24"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button
          type="submit"
          className="bg-linear-to-r from-blue-500 to-indigo-600 hover:opacity-90 transition-all text-white w-full py-3 rounded-lg font-semibold shadow-lg hover:shadow-blue-500/40"
        >
          Send Notification
        </button>
      </form>

      {/* Notification Feed */}
      <div className="w-full max-w-lg space-y-4 overflow-y-auto max-h-[60vh] px-2 scrollbar-thin scrollbar-thumb-gray-700">
        <AnimatePresence>
          {notifications.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-800/60 hover:bg-gray-700/80 transition-all backdrop-blur-xl p-4 rounded-xl shadow-md border border-gray-700 hover:shadow-lg hover:shadow-blue-500/20">
                <h2 className="font-semibold text-lg text-blue-400">
                  {n.title || "Untitled"}
                </h2>
                <p className="text-gray-200 mt-1">{n.message}</p>
                <span className="text-xs text-gray-400 mt-2 block">
                  {n.timestamp
                    ? new Date(n.timestamp).toLocaleTimeString()
                    : "Just now"}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

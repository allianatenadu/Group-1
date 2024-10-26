import React, { useState } from "react";

function Forms({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo({ text: task, isCompleted: false });
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="border rounded w-full py-2 px-3 shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter a new task"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
}

export default Forms;

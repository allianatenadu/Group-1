import React, { useState } from "react";
import Forms from "./components/Forms";
import Lists from "./components/Lists";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (index, newTask) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: newTask } : todo
    );
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center mb-4">Add Task</h1>
          <Forms addTodo={addTodo} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Task List</h2>
          <Lists
            todos={todos}
            setTodos={setTodos}
            editingIndex={editingIndex}
            setEditingIndex={setEditingIndex}
            updateTodo={updateTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

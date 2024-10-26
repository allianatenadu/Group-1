import React from "react";
import Items from "./Items";

function Lists({ todos, setTodos, editingIndex, setEditingIndex, updateTodo }) {
  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className="max-h-80 overflow-y-auto">
      {todos.map((todo, index) => (
        <Items
          key={index}
          todo={todo}
          isEditing={editingIndex === index}
          toggleComplete={() => toggleComplete(index)}
          handleDelete={() => handleDelete(index)}
          startEditing={() => setEditingIndex(index)}
          updateTodo={(newTask) => updateTodo(index, newTask)}
        />
      ))}
    </div>
  );
}

export default Lists;

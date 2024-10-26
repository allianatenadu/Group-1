import React, { useState } from "react";

function Items({
  todo,
  isEditing,
  toggleComplete,
  handleDelete,
  startEditing,
  updateTodo,
}) {
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      updateTodo(editText);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    startEditing(null);
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      {isEditing ? (
        <div className="flex items-center gap-2 w-full">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border rounded w-full py-2 px-3 shadow-sm"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-2 py-1 rounded shadow-md hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white px-2 py-1 rounded shadow-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span
            onClick={toggleComplete}
            className={`cursor-pointer ${
              todo.isCompleted ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.text}
          </span>
          <div>
            <button onClick={startEditing} className="text-blue-500 mr-2">
              Edit
            </button>
            <button onClick={handleDelete} className="text-red-500">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Items;

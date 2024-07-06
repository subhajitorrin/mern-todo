import React, { useState } from 'react';
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const editTodo = (index) => {
    setIsEditing(true);
    setCurrentTodo(index);
    setInput(todos[index]);
  };

  const updateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[currentTodo] = input;
    setTodos(updatedTodos);
    setIsEditing(false);
    setInput("");
    setCurrentTodo(null);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 p-2 border rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            className="ml-2 p-2 bg-blue-500 text-white rounded"
            onClick={isEditing ? updateTodo : addTodo}
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{todo}</span>
              <div>
                <button
                  className="p-1 bg-yellow-500 text-white rounded mr-2"
                  onClick={() => editTodo(index)}
                >
                  Edit
                </button>
                <button
                  className="p-1 bg-red-500 text-white rounded"
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

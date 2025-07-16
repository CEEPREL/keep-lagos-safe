import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (input.trim() !== "") {
      // setTodos([...todos, { id: todos.length + 1, todo: input }]);
      setTodos([
        ...todos,
        { id: todos.length + 1, mainText: input, isCompleted: false },
      ]);
      setInput("");
    }
  };
  return (
    <div>
      <h1>Todo-list</h1>
      <input
        type="text"
        placeholder="Add new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {index + 1}-{todo.mainText}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

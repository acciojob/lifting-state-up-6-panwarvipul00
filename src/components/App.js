
import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Build a React app", completed: false },
    { id: 3, task: "Deploy the React app", completed: false },
  ]);

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos); // ✅ must be spelled correctly
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
}

export default App;

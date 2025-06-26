
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Build a React app', completed: false },
    { id: 3, task: 'Deploy the React app', completed: false },
  ]);

  const handleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
}

export default App;

import List from "@mui/material/List";
import TodoItem from "./TodoItem";
import { useState } from "react";
const initialTodos = [
  { id: 1, text: "Buy vegetables for pasta", completed: false },
  { id: 2, text: "Buy vegetables for noodles", completed: false },
  { id: 3, text: "Buy Chicken", completed: false },
  { id: 4, text: "Buy Milk", completed: true },
];

export default function TodoList() {
  const [todos, setTodo] = useState(initialTodos);
  const removeTodo = (id) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };
  const toggleTodo = (id) => {
    setTodo((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          removeTodo={() => removeTodo(todo.id)}
          toggle={() => toggleTodo(todo.id)}
        />
      ))}
    </List>
  );
}

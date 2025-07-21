import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <span onClick={() => onToggle(todo.id)} style={{ cursor: "pointer" }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;

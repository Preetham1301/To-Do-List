import { useState } from "react";
import './ToDoItem.css';

function ToDoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  return (
    <li className="todo-item">
      {isEditing ? (
        <input
          className="edit-input"
          value={editText}
          onChange={e => setEditText(e.target.value)}
        />
      ) : (
        <span
          onClick={() => onToggle(todo.id)}
          className={todo.completed ? "completed" : ""}
        >
          {todo.text}
        </span>
      )}

      <div className="btns">
        {isEditing ? (
          <button onClick={() => { onEdit(todo.id, editText); setIsEditing(false); }}> <img src="https://img.icons8.com/?size=100&id=TGd4NEfXhxLa&format=png&color=000000" alt="Delet"  width="30px"  height="30px"/> </button>
        ) : (
          <button onClick={() => setIsEditing(true)}> <img src="https://img.icons8.com/?size=100&id=KxSFDkadWYYJ&format=png&color=000000" alt="Delet"  width="30px"  height="30px"/> </button>
        )}
        <button onClick={() => onDelete(todo.id)}><img src="https://img.icons8.com/?size=100&id=99971&format=png&color=000000" alt="Delet"  width="30px"  height="30px"/></button>
      </div>
    </li>
  );
}

export default ToDoItem;

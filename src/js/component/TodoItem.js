import React from 'react';

const TodoItem = ({ task, removeTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {/* Muestra el texto de la tarea */}
      {task}

      {/* La cruz de eliminación, que al hacer clic elimina la tarea */}
      <span className="remove-icon" onClick={removeTask}>
        x  {/* símbolo de la cruz "X" */}
      </span>
    </li>
  );
};

export default TodoItem;

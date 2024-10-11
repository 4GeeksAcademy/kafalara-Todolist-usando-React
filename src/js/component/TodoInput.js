import React from 'react';

const TodoInput = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      className="form-list"
      placeholder="What needs to be done?" // entrada del formulario
      value={value}
      onChange={onChange}  // Actualiza el estado de la tarea
      onKeyDown={onKeyDown}  // Maneja el evento de tecla Enter
    />
  );
};

export default TodoInput;

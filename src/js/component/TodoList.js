import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, removeTask }) => {
  return (
    <ul className="list-group mt-3">
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} removeTask={() => removeTask(index)} /> //remover la tarea cuando se hace en la X
      ))}
    </ul>
  );
};

export default TodoList;



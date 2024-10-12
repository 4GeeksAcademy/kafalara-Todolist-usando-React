import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Home = () => {
  const [todos, setTodos] = React.useState([]);  
  const [newTodo, setNewTodo] = React.useState("");  // nueva tarea

  // Función que maneja la tecla Enter para agregar tareas
  const handleKeyDown = (e) => {
    if (e.code === "Enter" && newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);  // sumar tarea a la lista
      setNewTodo("");  // quitar despues de agregar
    }
  };

  return (
    <>
      <div className="text-center mt-5">
      <h1 className ="todos-title">todos</h1>
      </div>

      {/* Uso de TodoInput como un componente y lo separo con un div diferente para el recuadro.*/}
      <div className="home-container">
      <TodoInput
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)} 
        onKeyDown={handleKeyDown}  //tecla
      />

      {/* Renderiza la lista de tareas */}
      <TodoList tasks={todos} removeTask={(id) => {
        setTodos(todos.filter((task, index) => index !== id));
      }} />

      <p className="items-left">{todos.length} item left</p>
    </div>
    </>
  );
};

export default Home;

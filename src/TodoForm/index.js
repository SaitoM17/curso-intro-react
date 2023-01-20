import React from "react";
import "./TodoForm.css";

function TodoForm( {addTodo, setOpenModal} ) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.length <= 0) return;
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo Task</label>

      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribir aqui..."
      />

      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="TodoForm-button TodoForm-button-add"
          onClick={onSubmit}
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };

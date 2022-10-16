import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    };
    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            
            <textarea
            value={newTodoValue}
            onChange={onChange}
             placeholder="Escribir aqui..."/>   

            <div className="TodoForm-buttonContainer">

                <button 
                type="button"
                className="TodoForm-button TodoForm-cancel" 
                onClick={onCancel}>
                    Cancelar
                </button>

                <button 
                type="submit" 
                className="TodoForm-button TodoForm-button-add"
                onClick={onSubmit}>
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }
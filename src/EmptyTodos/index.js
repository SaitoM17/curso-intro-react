import React from "react";
import {SlNote} from 'react-icons/sl'
import './EmptyTodos.css';

function EmptyTodos(){
    return(
        <div className="EmptyTodo-container">
            <SlNote className="EmptyTodo-completeIcon"></SlNote>
            <p className="EmptyTodo-text">!Crea tu primer Task</p>
        </div>
    )
}

export {EmptyTodos};
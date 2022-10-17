import React from "react";
import './TodosLoading.css';
import {GiSandsOfTime} from 'react-icons/gi';

function TodosLoading(){
    return(
        <div className="LoadingTodo-container">
            <GiSandsOfTime className="LoadingTodo-completeIcon"></GiSandsOfTime>
            <p className="LoadingTodo-text">Cargando Task</p>
            {/* <AiOutlineLoading3Quarters className="LoadingTodo-deleteIcon"></AiOutlineLoading3Quarters>  */}
        </div>
    )
}

export {TodosLoading};
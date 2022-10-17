import React from "react";
import './TodoItem.css';
import {RiCloseCircleFill} from 'react-icons/ri';
import {RiCheckboxCircleFill} from 'react-icons/ri';

function TodoItem(props) {
 
    return (
      <li className="TodoItem">

        <RiCheckboxCircleFill className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
        >
          
        </RiCheckboxCircleFill>

        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>

        <RiCloseCircleFill className="Icon Icon-delete"
        onClick={props.onDelete}
        >
          
        </RiCloseCircleFill>
        
      </li>
    );
  }
  
  export { TodoItem };
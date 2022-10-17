import React from 'react';
import './CreateTodoButton.css'
import {FaPlusCircle} from 'react-icons/fa'

function CreateTodoButton(props){
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return(
        <FaPlusCircle className='CreateTodoButton'
        onClick={onClickButton}
        >
        </FaPlusCircle>
    );
}

export {CreateTodoButton};


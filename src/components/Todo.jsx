import React from 'react'
import {GrFormClose, GrFormEdit, GrFormCheckmark } from "react-icons/gr";
import { useToDoLayerValue } from '../context/todoContext';

const Todo = ({todo}) => {
    
    return (
        <div className="todo-row">
            <div>
                {todo.content}
            </div>
            <div className="todo-icons">
                <GrFormClose className="todo-icon" onClick={() => removeTodo(todo.id)}/>
                <GrFormEdit className="todo-icon"/>
            </div>
            
        </div>
    )
}

export default Todo

import React from 'react'
import {GrFormClose, GrFormEdit, GrFormCheckmark } from "react-icons/gr";
import { useToDoLayerValue } from '../context/todoContext';

const Todo = ({todo}) => {
    const [{ }, dispatch] = useToDoLayerValue();
    const removeTodo = todoId => {
        dispatch ({
            type: "REMOVE_TODO",
            payload: todoId
        })
    }
    return (
        <div className="todo-row">
            <div>
                {todo.content}
            </div>
            <div className="todo-icons">
                <GrFormClose className="todo-icon" onClick={() => removeTodo(todo.id)}/>
                
            </div>
            
        </div>
    )
}

export default Todo

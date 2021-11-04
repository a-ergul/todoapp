import React, {useState} from 'react'
import { useToDoLayerValue } from './context/todoContext'
import TodoList from './components/TodoList'
import { findAllByTestId } from '@testing-library/dom';
import './App.css';

const App = () => {
  const [{ todos }, dispatch] = useToDoLayerValue();
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    console.log(content);
    event.preventDefault();

    if(!content) return;

    const newTodo = {
      id: Math.floor(Math.random() * 4896543),
      content,
      isCompleted: false
    };

    dispatch(
     { type: "ADD_TODO",
      payload: newTodo}
    );

    setContent('')
  };
  return (
    <div className= "container">
      <form onSubmit={handleSubmit} className="todo-form">
        <input type="text" className="todo-input" 
        onChange={(event) => setContent(event.target.value)} value={content} />
        <button className="todo-button">
          Ekle
        </button>
      </form>

      <TodoList todos={todos}/>
    </div>
  )
}

export default App

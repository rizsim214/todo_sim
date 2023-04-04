import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(todo);
  }
  return (
    <form className="todo__form" onSubmit={handleSubmit}>
        <input type="text" 
          name="todo_title" 
          className="todo__input" 
          placeholder="What's the plan?"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          />
        <button type="submit" className="todo__button">+</button>
    </form>
  )
}

export default TodoForm
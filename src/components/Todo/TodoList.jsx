import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
    console.log(todos)
  return (
    <ul className="todo__list">
        {todos.map((todo) => {
            return(
                <TodoItem todo={todo}/>
            )
        })}
        
    </ul>
  )
}

export default TodoList
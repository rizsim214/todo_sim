import React from 'react'
import { UilEdit, UilTrashAlt  } from "@iconscout/react-unicons";
const TodoItem = ({todo}) => {
  return (
    <>
         <li className="todo__item" key={todo.id}>
            <p className="todo__desc">{todo.task}</p>
            <span className="todo__actions">
                <a href="/" className="todo__edit"><UilEdit /></a>
                <a href="/" className="todo__delete"><UilTrashAlt /></a>
            </span>
        </li>
    </>
  )
}

export default TodoItem
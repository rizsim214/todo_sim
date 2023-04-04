import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {v4 as uuidv4} from "uuid";

uuidv4();

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4, task: todo, completed: false, isEditing: false}]);
    console.log(todos);
  }

  return (
    <div className="todo__container">
        <h3>Todo List</h3>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos}/>
    </div>
  )
}

export default Todo
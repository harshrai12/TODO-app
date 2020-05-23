import React from 'react'
import './App.css'

function Todo({todo,index,completeTodo,removeTodo}) {
 return (
  <div style={{textDecoration:todo.isCompleted? 'line-through':''}} className="todo">
   {todo.text} 
   <div>
   <button className="button1"
    onClick={()=> completeTodo(index)}>Complete</button>
   <button className="button2" onClick={()=> removeTodo(index)}>X</button>
   </div>
  </div>
 )
}

export default Todo

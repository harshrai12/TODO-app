import React,{useState} from 'react'
import Todo from './Todo';
import Todoform from './Todoform'
import './App.css'

function App() {
  const[todos,setTodo]=useState([
 {
   text:'Eat breakfast',
   iscompleted:false
 },

]);

const addTodo=text =>{
  const NewTodo=[...todos,{text}];
  setTodo(NewTodo);
};

const completeTodo=index=>{
  const newTodos=[...todos];
  newTodos[index].isCompleted=true;
  setTodo(newTodos);
}; 

const removeTodo=index=>{
  const newTodos =[...todos];
  newTodos.splice(index,1);
  setTodo(newTodos);


};

  return (
     


    <div className="app">
    <div className="task">
    <h1>Task List</h1>
    <p>Write your daily task</p>
    </div>
    <div className="todo-list">
    {todos.map((todo,index)=>( 
      <Todo key={index} index={index} todo={todo}
      completeTodo={completeTodo}
      removeTodo={removeTodo} />
    ))}
    <Todoform addTodo={addTodo}/>
    </div>
    </div>
  )
}

export default App


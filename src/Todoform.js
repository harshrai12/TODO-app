import React,{useState} from 'react'
import './App.css'

function Todoform({addTodo}) {
 const[value,setValue]=useState('');

 const handleSubmit=e=>{
  e.preventDefault();
  if(!value) return;
  addTodo(value);
  setValue('');
 }

  
 return (
  <form onSubmit={handleSubmit}>
  <input type="text" className="input"
  placeholder="your tasks" value={value} 
   onChange={e=> setValue(e.target.value)}/>
  </form>
 )
}

export default Todoform

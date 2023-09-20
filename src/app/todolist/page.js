"use client"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../redux/todoSlice";

export default function Page(){
   const [todo,setTodo] = useState("");
   const todoData=useSelector((data)=>data.todosData.todos);

   const dispatch=useDispatch();
    return(<div>
        <h3>Add todo</h3>
        <input type="text" onChange={(e)=> setTodo(e.target.value)} placeholder="add new task"/>
        <button onClick={()=>dispatch(addTodos(todo))}>Add todo</button>
        <h4>Todo List</h4>
        {
            todoData.length && todoData.map((item)=>(
                <h6 key={item.id} >{item.name}</h6>
            ))
        }
        
        </div>)
}
"use client"
import { useState } from "react"
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";

export default function AddUsers(){
    const [name,setName]=useState("");
    const dispatch= useDispatch();
    const userDispatch=()=>{
        dispatch(addUser(name))
    }
    return(<div className="add-user">
        <h3>Add Users</h3>
        <input type="text"
         className="add-user-input"
         onChange={(e)=>setName(e.target.value)}
          placeholder="Add New User" />
        <button onClick={userDispatch} className="add-user-btn">Add User</button>
    </div>)
}
"use client"
import { useSelector } from "react-redux"

export default function DisplayUsers(){
    const userData= useSelector((data)=>data.users);
    console.log(userData);
    return(<div className="display-user">
        <h3>User List</h3>
        {
            userData.map((item)=>(
                <div className="user-item">{item.name}</div>
            ))
        }
    </div>)
}
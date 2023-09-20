"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchApiUsers } from "../redux/slice"
import { useEffect } from "react";

export default function Page(){
    const dispatch=useDispatch();
    const apiUserData= useSelector((data)=>data.usersData.userAPIData);
    
    useEffect(()=>{
        dispatch(fetchApiUsers())
    },[])
    return(
        <div>
            <h1>User list from API</h1>
           
            {
               apiUserData.length && apiUserData.map((item)=>(
                    <h4>{item.name}</h4>
                ))
            }
        </div>
    )
}
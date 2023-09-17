"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice";

export default function Page() {
    const userData = useSelector((data) => data.usersData.users);
    const dispatch = useDispatch();
    console.log(userData);
    return (
        <div className="display-user">
            <h1>Remove User Page</h1>
            {
                userData.map((item) => (
                    <div className="user-item"> 
                        <span>{item.name}</span>
                        <button onClick={() => dispatch(removeUser(item.id))}>Remove User</button>
                    </div>
                ))
            }
        </div>
    )
}
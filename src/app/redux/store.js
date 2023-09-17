const { configureStore } = require("@reduxjs/toolkit");
import usersReducers from './slice'
import todoReducer from './todoSlice'
export const store =configureStore({
    reducer:{
        usersData:usersReducers,
        todosData:todoReducer
    }
})
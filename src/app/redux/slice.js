const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
    users: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
}
const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {

            const data = {
                id: nanoid(),
                name: action.payload
            }

            state.users.push(data);
            let userData = JSON.stringify(current(state.users));
            localStorage.setItem("users", userData)
        },
        removeUser: (state, action) => {
            const data = state.users.filter((item) => {
                return item.id !== action.payload
            })
            state.users = data;

        }
    }
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
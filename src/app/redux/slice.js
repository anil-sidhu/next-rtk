const { createSlice, nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    userAPIData: [],
    users: JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
}

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {

    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    return result.json();
});

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
            let userData = JSON.stringify(data);
            localStorage.setItem("users", userData)

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
            console.log("reducer", action);

            state.isloading = false,
                state.userAPIData = action.payload
        })

    }
});

export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;
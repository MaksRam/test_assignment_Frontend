import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice ({
    name: 'users',
    initialState: {
        loading: false,
        error: false,
        success: false,
        list: [],
    },
    reducers: {
        loadUsers: (state) => {
            state.loading = true;
            state.success = true;
            state.error = true;
            state.list = [];
        },
        // in state you access the current list of the state
        loadUsersSuccess: (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = false;
            state.list = action.payload;
        },
        loadUsersFailure: (state) => {
            state.loading = false;
            state.success = false;
            state.error = true;
            state.list = [];
        },
        addNewUser: (state, action) => {
          //write code for adding a user
            state.list.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.list = state.list.splice((user) => user.id !== action.payload.id)
        }


    },
},
)
export const { loadUsers, loadUsersSuccess, loadUsersFailure, addNewUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
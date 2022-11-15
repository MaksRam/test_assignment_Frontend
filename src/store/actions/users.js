import { loadUsers, loadUsersSuccess, loadUsersFailure, addNewUser, deleteUser } from '../slices/usersSlices';
import axios from 'axios';

export function fetchUsers() {
    return async dispatch => {
        dispatch(loadUsers())

        try {
            const response  = await fetch('http://localhost:3002/hello');
            const data = await response.json();
            console.log(data)
            dispatch(loadUsersSuccess(data));
        }
        catch (error) {
            dispatch(loadUsersFailure());
        }
    }
}




export const deleteUserById = (id) => {
    return function (dispatch) {
       axios
       .delete(`http://localhost:3002/hello/${id}`)
       .then((resp) => {
        console.log("resp", resp);
        dispatch(deleteUser());
        dispatch(fetchUsers());
       })
       .catch((error) => console.log(error));

};
};

export const addUser = newUser => {
    return (dispatch) => {
        axios.post('http://localhost:3002/hello', { newUser })
        .then(response => {
            console.log(response);
            dispatch(addNewUser())
        .catch(error => {
            console.log(error)
        })
        })
    }
}
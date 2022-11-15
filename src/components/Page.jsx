import s from './Page.module.css';
import Table from 'react-bootstrap/Table';
import React, {useState, useEffect} from 'react';
import Pagination from './Pagination';
import {useSelector, useDispatch} from 'react-redux';
import {deleteUserById, fetchUsers} from '../store/actions/users';

function DarkExample() {  
  const usersList = useSelector((store) => store.users.list);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(14)

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
      if(window.confirm("Are you sure you want to delete user?")) {
        dispatch(deleteUserById(id));
      }
    }

   const indexOfLastUser = currentPage * usersPerPage;
   const indexOfFirstUser = indexOfLastUser - usersPerPage;
   const currentUsers = usersList.slice(indexOfFirstUser, indexOfLastUser)
   const howManyPages = Math.ceil(usersList.length/usersPerPage)


  return (

    <div className={s.userlist}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.UserName}</td>
              <td>{user.UserEmail}</td>
              <td><p className={s.delete} onClick={() => handleDelete(user.id)}>Delete</p></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className={s.footer}>
        <br />
        <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
          
}

export default DarkExample;
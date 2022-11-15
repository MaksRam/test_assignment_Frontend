import './Register.css';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { addUser, fetchUsers } from '../store/actions/users';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

function Register() {
    // const usersList = useSelector((store) => store.users.list);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
      }, [dispatch]);

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const [isAlertVisible, setIsAlertVisible] = React.useState(false);

    const handleButtonClick = () => {
        if(userPassword !== checkPass || userPassword.length < 8 || userName.length < 4) {
        setIsAlertVisible(true);
        setTimeout(() => {
            setIsAlertVisible(false);
        }, 3000);
    }
    }

    const [userName, setUsername] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [checkPass, setCheck] = useState("");

    const error = (userPassword !== checkPass || userPassword.length < 8 || userName.length < 4)

    const addAnotherUser = (e) => {
        e.preventDefault();
        handleButtonClick();
        if(!error) {
        axios
        .post('http://localhost:3002/hello', {UserName: userName, UserEmail: userEmail, Password: userPassword})
        .then(res => console.log('Posting data', res))
        .then(dispatch(fetchUsers()))
        .catch(err => console.error(err))
    }}

    return (
        <div className="register">

            <div className="rectangle220"><p>Register</p></div>
            <div className="frame390">
                <div className="frame370">
                    <div className="frame340">
                        <p>Username</p>
                        <input
                            className="username"
                            placeholder="Your username"
                            onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className="frame320">
                        <p>Email</p>
                        <input
                            className="email"
                            placeholder="Your email, e.g: john@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <br />
                    <div className="frame320">
                        <p>Password</p><FontAwesomeIcon icon={faEye} className='regeye' onClick={togglePassword} />
                        <input
                            className="email"
                            type={passwordShown ? "text" : "password"}
                            placeholder="Your password, at least 8 ch."
                            onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <br />
                    <div className="frame320">
                        <p>Confirm password<FontAwesomeIcon icon={faEye} className='regeye2' onClick={togglePassword} /></p>
                        <input
                            className="email"
                            type={passwordShown ? "text" : "password"}
                            placeholder="Re-type your password"
                            onChange={(e) => setCheck(e.target.value)}
                        ></input>
                    </div>
                    <div className='errormsg'>{isAlertVisible && <div className='alert-container'>
                        <div className='alert-inner'>Something went wrong</div>
                    </div>}</div>
                </div>
                <button type='submit' onClick={addAnotherUser}>Register</button>

            </div>
        </div>

    )
}

export default Register;
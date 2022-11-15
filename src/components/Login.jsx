import './Login.css'
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import App from './PassRec';
import axios from 'axios';

function Login() {

    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState(false)
    

    console.log(userEmail, userPassword)

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {

        setPasswordShown(!passwordShown);
    };

    return (
        <div className="login">
            <div className="rectangle22"><p>Login</p></div>
            <div className="frame39">
                <div className="frame37">
                    <div className="frame34">
                        <p className="emailtxt">Email</p>
                        <input
                            className="email"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className="frame32">
                        <p className="passtxt">Password<FontAwesomeIcon icon={faEye} className='eye' onClick={togglePassword} /></p>
                        <br />
                        <input
                            className="passw"
                            type={passwordShown ? "text" : "password"}
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <div  className='passwRec'>                       
                    <App />
                    </div>
                    <div className="frame30">
                        <button className="loginBtn" onClick={async () => {      
      const res = await axios.get(`http://localhost:3002/login?email=${userEmail}&passw=${userPassword}`);
      let token = res.data.accessToken
      localStorage.setItem('token', token)     
    }}>Login</button>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;
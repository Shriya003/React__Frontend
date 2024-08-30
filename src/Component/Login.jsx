// src/Component/Login.js
import React from "react";
import { useNavigate } from 'react-router-dom'; 
import '../Style/Login.css';
import Img1 from './swigy_one.jpg'; 


function Login() {
    const navigate = useNavigate(); 

    const handleCreateAccountClick = () => {
        navigate('/signup'); 
    };

    return (
        <>
      
        <div className="main">
            <div className="first_part">
                <div className="head_one">
                    <h2>Login</h2>
                </div>
                <div className="image">
                    <img src={Img1} alt="Swigy" />
                </div>
            </div>
            <div className="para_one">
                <p>or <span className="create_acc" onClick={handleCreateAccountClick}>create an account</span></p>
            </div>
            <div className="input">
                <input 
                    className="input_login"
                    id="Email"
                    type="text"
                    placeholder="Enter your Email"
                    maxLength="10"
                />
                  <input 
                    className="input_login"
                    id="password"
                    type="text"
                    placeholder="Enter your password"
                    maxLength="10"
                />
                <button className="button_login">LOGIN</button>
            </div>
        </div>
        </>
    );
}

export default Login;

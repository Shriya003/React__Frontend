// src/Component/Sign_up.js
import React from "react";
import { useNavigate } from 'react-router-dom'; 
import '../Style/Sign_up.css';
import Img1 from './swigy_one.jpg'; 

function Signup() {
    const navigate = useNavigate(); 

    const handleLoginClick = () => {
        navigate('/'); 
    };

    return (
        <div className="main_signup">
            <div className="first_part_signup">
                <div className="head_one_signup">
                    <h2>Signup</h2>
                </div>
                <div className="image_signup">
                    <img src={Img1} alt="Swigy" />
                </div>
            </div>
            <div className="para_one_signup">
                <p>or <span className="login_link" onClick={handleLoginClick}>Login to your account</span></p>
            </div>
            <div className="input_signup">
                
                <input 
                    className="input_name"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                />
                <input 
                    className="input_email"
                    id="email"
                    type="text"
                    placeholder="Enter your E-mail"
                />
                <input 
                    className="input_password"
                    id="phone-number"
                    type="text"
                    placeholder="Enter your password"
                    maxLength="10"
                />
                <p className="refferal">Have a referral code?</p>
                <button className="button_signup">SIGN UP</button>
            </div>
        </div>
    );
}

export default Signup;

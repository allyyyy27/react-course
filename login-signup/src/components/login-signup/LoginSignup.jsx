import React from 'react'
import './LoginSignup.css'
import user_icon from '../assets/user.png'
import email_icon from '../assets/mail.png'
import pass_icon from '../assets/padlock.png'

const LoginSignup = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            <div className="input">
                <img src={user_icon} width={20} height={20}/>
                <input type="text" placeholder='Name'/>
            </div>
            <div className="input">
                <img src={email_icon} width={20} height={20}/>
                <input type="email" placeholder='Email'/>
            </div>
            <div className="input">
                <img src={pass_icon} width={20} height={20}/>
                <input type="password" placeholder='Password'/>
            </div>
        </div>

        <div className="forgot-password">Forgot Password? <span>Click Here</span> </div>

        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}

export default LoginSignup
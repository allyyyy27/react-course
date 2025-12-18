import React from 'react'
import './LoginSignup.css'
import { formFields } from '../assets/config/formConfig'

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");
    const currentFields = formFields[action];

    const signupBtnClass = action === "Sign Up"?"submit":"submit gray";
    const loginBtnClass = action === "Login"?"submit":"submit gray";

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
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
            <div className={signupBtnClass}>Sign Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}

export default LoginSignup
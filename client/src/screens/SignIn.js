import React from 'react'
import '../css/SignIn.css'
import BlackLogo from '../assets/logo-black.png';
const SignIn = () => {
    return (
        <div className="signIn__container vertical__flex">
            <img src={BlackLogo} />
            <div className="signIn__form vertical__flex">
                <span className="fontSize__2rem">Login</span>
                <span className="bold enter__email">Email or Mobile phone Number</span>
                <input type="text" className="email__input" />
                <div className="btn__continue horizontal__flex">Continue</div>
                <div className="conditions">
                    By continuing, you agree to Amazon's 
                    <a> Conditions of Use</a> and 
                    <a> Privacy Notice.</a></div>
                <div className="conditions">
                    <span>Need Help </span>
                   </div>
            </div>
            <div className="horizontal__flex text_through" >New to Amazon?</div>
            <div className="btn__create horizontal__flex">Create Your Amazon Account</div>

        </div>
    )
}

export default SignIn

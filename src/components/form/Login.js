import React, { useRef } from 'react';
import LoginButton from './LoginButton';
import ResetButton from './ResetButton';

const Login = props => {

 const usernameInput = useRef();
 const passwordInput = useRef();
 const checkBoxInput = useRef();
 

    
    const loginHandler = (event) => {
        event.preventDefault();
        const userData = {
            name: usernameInput.current.value,
            password: passwordInput.current.value,
            checkbox: checkBoxInput.current.checked
        }
        console.log(userData);
    }

    const resetHandler = (event) => {
        event.preventDefault();
        usernameInput.current.value = '';
        passwordInput.current.value = '';
        checkBoxInput.current.checked = false;


    }
        
   
    return (
        <form>
            <label>Insert your Username and Password:</label>
            <input type="text" ref={usernameInput}></input>
            <input type="password" ref={passwordInput} ></input>
            <div>
                <label>Remember me</label>
                <input type="checkbox" ref={checkBoxInput}></input>
                <LoginButton onLogin={loginHandler}/>
                <ResetButton onReset={resetHandler}/>
            </div>
        </form>
    )
}

export default Login;
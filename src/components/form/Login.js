import React, { useState } from 'react';
import LoginButton from './LoginButton';

const Login = props => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredPassword,setEnteredPassword] = useState('');
    const [checked, setChecked] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);


    const nameHandler = event => {
        setEnteredName(event.target.value);
        setIsDisabled(false);
    
    }
    const passwordHandler = event => {
        setEnteredPassword(event.target.value);
        setIsDisabled(false);
        
    }
    const checkHandler = event => {
        setChecked(event.target.checked); 
    }

    const loginHandler = (event) => {
        event.preventDefault();
        
    }
        
   
    return (
        <form>
            <label>Insert your Username and Password:</label>
            <input type="text" value={enteredName} onChange={nameHandler}></input>
            <input type="password" value={enteredPassword} onChange={passwordHandler}></input>
            <div>
                <label>Remember me</label>
                <input type="checkbox" value={checked} onChange={checkHandler}></input>
                <LoginButton onLogin={loginHandler} onEnable={isDisabled} />
            </div>
        </form>
    )
}

export default Login;
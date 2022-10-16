import React, { useState } from 'react';
import LoginButton from './LoginButton';
import ResetButton from './ResetButton';

const Login = props => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredPassword,setEnteredPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);


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

    const resetHandler = (event) => {
        event.preventDefault();
        setEnteredName('');
        setEnteredPassword('');
        setChecked(false);
        
    }
        
   
    return (
        <form>
            <label>Insert your Username and Password:</label>
            <input type="text" value={enteredName} onChange={nameHandler}></input>
            <input type="password" value={enteredPassword} onChange={passwordHandler}></input>
            <div>
                <label>Remember me</label>
                <input type="checkbox" checked={checked} onChange={checkHandler}></input>
                <LoginButton onLogin={loginHandler} onEnable={isDisabled} />
                <ResetButton onReset={resetHandler} />
                
            </div>
        </form>
    )
}

export default Login;
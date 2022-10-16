import React, { useState } from 'react';
const Login = props => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredPassword,setEnteredPassword] = useState('');
    const [checked, setChecked] = useState('');


    const nameHandler = event => {
        setEnteredName(event.target.value);
    
    }
    const passwordHandler = event => {
        setEnteredPassword(event.target.value);
        
    }
    const checkHandler = event => {
        setChecked(event.target.checked); 
    }

   

    return (
        <form>
            <label>Insert your Username and Password:</label>
            <input type="text" value={enteredName} onChange={nameHandler}></input>
            <input type="password" value={enteredPassword} onChange={passwordHandler}></input>
            <div>
                <label>Remember me</label>
                <input type="checkbox" value={checked} onChange={checkHandler}></input>
            </div>
        </form>
    )
}

export default Login;
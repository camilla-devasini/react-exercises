import { useState } from 'react';
import Welcome from '../../components/Welcome';

const InteractiveWelcome = props => {

    const [enteredUsername, setEnteredUsername] = useState('');

    const EnteredUsernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }


    return (
        <div>
            <form>
                <label>Name:</label>
                <input className="bg-gray-50 border border-gray-300 rounded-lg" type="text" value={enteredUsername} onChange={EnteredUsernameHandler}></input>
                <Welcome name={enteredUsername} />
            </form>
        </div>
    )
}

export default InteractiveWelcome;
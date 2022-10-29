// Create a custom hook that keeps track of the state of a controlled form
// with the username and password inputs,
// and returns the current value of the inputs
// as well as an event handler to update either input.

import { useState } from "react";

function useInputValues() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    function updateUsername(event) {
        setUserName(event.target.value);
    }
    function updatePassword(event) {
        setPassword(event.target.value);
    }

    return (
        {
            username,
            password,
            onUpdateUsername: updateUsername,
            onUpdatePassword: updatePassword
        }
    )

}
export default useInputValues;


// Create a GithubUserList component that maintains an array of usernames,
// showing a GithubUser component for each username entered.
// The usernames should be added to the array using an input field and a button.
import { useState } from "react";
import GithubUser from "./GithubUser";


function GithubUserList() {

    const [input, setInput] = useState('');
    const [users, setUsers] = useState([]); 

    const inputHandler = (event) => {

        setInput(event.target.value);
    }

    const clickHandler = (event) => {
        
        event.preventDefault();
        setUsers(
            (prevState) => {
            const listArray = [...prevState,input ];
                return listArray;
            }
        )  
    }
    

    return (
        <form>
            <input type="text" onChange={inputHandler} value={input}></input>
            <button type="submit" onClick={clickHandler}>Add the user</button>
            <ul>
                {users.map((user, index) => { 
                    return (
                        <GithubUser username={user} key={index} />
                    )
                })}
            </ul>    
        </form>
    )

}
export default GithubUserList;
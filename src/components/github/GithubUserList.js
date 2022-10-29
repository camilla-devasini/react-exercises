
// Create a GithubUserList component that maintains an array of usernames,
// showing a GithubUser component for each username entered.
// The usernames should be added to the array using an input field and a button.
import { useState } from "react";
import GithubUser from "./GithubUser";
import { Link, Outlet } from "react-router-dom";


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
                {users.map((username, index) => { 
                    return (
                        // <GithubUser username={user} key={index} />
                        <div>
                            <div key={index}>
                                <Link to={username}>{username}</Link>
                            </div>
                            <Outlet />
                        </div>
                    )
                })}
            </ul>    
        </form>
    )

}
export default GithubUserList;
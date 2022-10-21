
// Create a TodoList component that renders a ul tag with a li tag for each item contained
// in the items state variable. The items state variable should be an array of strings.
// The TodoList component should also contain an input tag and a button. When the button is clicked,
// the event handler should add the value of the input tag to the items array.
import { useState } from 'react';

const TodoList = props => {
   
   
    const [input, setInput] = useState(''); //per gestire gli input inseriti dall'utente
    const [items, setItems] = useState([]); // per gestire la lista degli items

    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    }

    const addToListHandler = () => {
        // const newItems = [...items, input];
        setItems((prevState) => {
            return [...prevState, input]
        })
        console.log(items);


    }       

    return (
        <div>
          <ul>
            {items.map((item, index)=> 
                    <li key={index}>{item}</li>
              )}
            </ul>
            <input type="text" onChange={inputChangeHandler}></input>
            <button onClick={addToListHandler}>Add to list</button>
        </div>
    )

}

export default TodoList;
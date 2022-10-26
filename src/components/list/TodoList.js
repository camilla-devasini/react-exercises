
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
        setItems((prevState) => {
            return [...prevState, input]
        })
        setInput(''); // setInput to null value again + value={input} in the return part.
        console.log(items);
    }

    const resetHandler = () => {
        setItems([]);
    }

    const deleteItemHandler = (index) => {
        setItems((prevState) => {
            const itemsArray = [...prevState];
            console.log(itemsArray);
            itemsArray.splice(index, 1);
            return itemsArray;
        })
    }

    return (
        <div>
            <ul>
                {items.map((item, index)=> 
                        <li key={index}>{item}<button className="bg-red-500 hover:bg-blue-700 text-white"  onClick={() => {deleteItemHandler(index)}}>Delete item</button></li>
                )}
            </ul>
            <input className="bg-gray-50 border border-gray-300 rounded-lg" type="text" onChange={inputChangeHandler} value={input}></input> 
            <button className="bg-blue-500 hover:bg-blue-700 text-white" onClick={addToListHandler}>Add to list</button>
            <br></br>
            <button className="bg-blue-500 hover:bg-blue-700 text-white" onClick={resetHandler}>Clear list</button>
        </div>
    )
}

export default TodoList;
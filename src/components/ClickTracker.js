import { useState } from 'react';

const ClickTracker = props => {
    const [titleValue, setTitleValue] = useState('');

    const clickButtonHandler = (event) => {
        setTitleValue(event.target.value);
     
    };
    
    return (
    <div>
        <h1>{titleValue}</h1>
        <button value="title 1" onClick={clickButtonHandler}>Button 1</button>
        <button value="title 2" onClick={clickButtonHandler}>Button 2</button>
        <button value="title 3" onClick={clickButtonHandler}>Button 3</button>
    </div>
    );
    
}

export default ClickTracker;
  

 
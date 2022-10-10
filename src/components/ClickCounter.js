import { useState } from 'react';

const ClickCounter = props => {
    const [counter, setCounter] = useState(0);
    const clickHandler = () => {
        setCounter ((prevState) => {
            return prevState + 1
        })
    };


    return (
        <div>
            <h1>{counter}</h1>
            <button type="button" onClick={clickHandler}>Click to increment</button>
        </div>
    )
}

export default ClickCounter;
import { useState } from 'react';
import CounterButton from './CounterButton';

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
            <CounterButton onClick={clickHandler}/>
        </div>
    )
}

export default ClickCounter;
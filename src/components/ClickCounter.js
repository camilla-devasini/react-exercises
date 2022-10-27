import { useState, useEffect } from 'react';
import CounterButton from './CounterButton';


const ClickCounter = (props) => {
    const { onCounterChange } = props;
    
    useEffect( () => {
        onCounterChange()

    }, [props.counter])
   

    return (
        <div>
            <h1>{props.counter}</h1>
            <CounterButton onClick={props.onClickHandler}/>
        </div>
    )
}

export default ClickCounter;

//uso useCounter custom hook:


import useCounter from "./useCounter";

function ComponentUsingHook({initialValue = 0}) {
    const 
        {counter, onIncrement, onDecrement, onReset } = useCounter(initialValue);

    
    return (
        <div>
            <h4>{counter}</h4>
            <button onClick={onIncrement}>Add</button>
            <button onClick={onDecrement}>Decrease</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )

}

export default ComponentUsingHook;

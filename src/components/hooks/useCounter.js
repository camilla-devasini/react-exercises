// Create a custom hook useCounter that keeps track of the state of a counter,
// and returns the current value of the counter
// as well as three functions to increment, decrement and reset the counter.

import { useState } from "react";

function useCounter(initialValue = 0) {
    
    const [counter, setCounter] = useState(initialValue);
    
    function handleCounterIncrement() {
        setCounter((prevState) => prevState + 1)
    }

    function handleCounterDecrement() {
        setCounter((prevState) => prevState - 1)
    }

    function handleCounterReset() {
        setCounter(initialValue);
    }

    return (
        {
            counter,
            onIncrement: handleCounterIncrement,
            onDecrement: handleCounterDecrement,
            onReset: handleCounterReset
        }
    )
}

export default useCounter;



//QUANDO DOVO' USARE L'HOOK AD ESEMPIO:

// import useCounter from "./useCounter";
// 

// function MyCounter({initialValue = 0}) {
//     const 
//         {counter, onIncrement, onDecrement, onReset } = useCounter(initialValue);

    
//     return (
//         <div>
//             <h4>{counter}</h4>
//             <button onClick={onIncrement}>Add</button>
//             <button onClick={onDecrement}>Decrease</button>
//             <button onClick={onReset}>Reset</button>
//         </div>
//     )

// }

// export default MyCounter;

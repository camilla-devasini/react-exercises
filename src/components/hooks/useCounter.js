// Create a custom hook useCounter that keeps track of the state of a counter,
// and returns the current value of the counter
// as well as three functions to increment, decrement and reset the counter.

// Modify the useCounter custom hook from Custom Hooks 01 to use the useCallback
// to memoize the functions used to increment, decrement and reset the counter.

import { useCallback, useState } from "react";

function useCounter(initialValue = 0) {
    
    const [counter, setCounter] = useState(initialValue);
    
    const handleCounterIncrement = useCallback(function handleCounterIncrement() {
        setCounter((prevState) => prevState + 1)
    }, [])


    const handleCounterDecrement = useCallback( function handleCounterDecrement() {
        setCounter((prevState) => prevState - 1)
    }, [])


    const handleCounterReset = useCallback( function handleCounterReset() {
        setCounter(initialValue);
    }, [])
        

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




import React from "react";
import CounterDisplay from "./CounterDisplay";

// Create a Counter class component with an internal state containing a count property,
// initialized to 0. The Counter component should render the count property within an h1 tag,
// and the count property should be incremented by 1 every second

class Counter extends React.Component {
    
    
    constructor (props) {
        super(props)

        this.state = {    //initial value
            count: this.props.initialValue
        }

        // Exercise State 05
        // Reset the counter to the initial value received as a prop when the value is greater than ten times that initial value.
        
        setInterval(() => {
          this.setState((state) => {
            if (state.count >= 10 ) {
              return {count: this.props.initialValue};
            } else {
              return  {count: state.count + this.props.increment}
            }
          })
        }, this.props.interval )
      }



    render() {
        return (
        <div>
          <CounterDisplay counterValue={this.state.count} />
        </div>
        )
    }
}





// Svolto durante la call 1:1 
// import { useState, useEffect } from "react"


// export function Counter() {
//     const [counter, setCounter] = useState(1000); 
//     
//  Permette di 
//     1. definire la variabile counter - 
//     2. definire il valore iniziale di counter -
//     3. definire qual è la chiamata che modificherà il valore di counter

//     // quando la pagina è totalmente caricata ==> parte il contatore.
//     
//         useEffect(() => {
//         const interval = setInterval(() => {
//           setCounter(counter => counter - 1); //la chiamata che modifica il valore del counter
//         }, 1000);
        
//         return () => clearInterval(interval);
//       }, []);



//         // setInterval(() => {
//         //     console.log(counter);
            
//         //     setCounter(counter => counter + 1);

//         // }, 3000 )  
    

//     return (<h1>{counter}</h1>)

// }

export default Counter;


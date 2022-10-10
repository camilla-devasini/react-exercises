import React from "react";

// Create a Counter class component with an internal state containing a count property,
// initialized to 0. The Counter component should render the count property within an h1 tag,
// and the count property should be incremented by 1 every second

class Counter extends React.Component {
    
    
    constructor (props) {
        super(props)

        this.state = {    //initial value
            count: this.props.initialValue
        }

        setInterval(() => {
            this.setState((state) => {
                return {count: state.count + this.props.increment}

            })
        }, this.props.interval )
    }



    render() {
        return <h1>{this.state.count}</h1>
    }
}

<<<<<<< HEAD
// import { useState, useEffect } from "react"


// // Create a Counter class component with an internal state containing a count property,
// // initialized to 0. The Counter component should render the count property within an h1 tag,
// // and the count property should be incremented by 1 every second

// export function Counter() {
//     const [counter, setCounter] = useState(1000); //1. definire la variabile counter - 
//     //2. definire il valore iniziale di counter -
//     // 3. definire qual è la chiamata che modificherà il valore di counter

//     // quando la pagina è totalmente caricata ==> parte il contatore.
//     useEffect(() => {
=======
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
>>>>>>> state-03
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

<<<<<<< HEAD
export default Counter;
=======
export default Counter;

>>>>>>> state-03

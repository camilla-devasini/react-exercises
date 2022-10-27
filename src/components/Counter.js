import React, { useState, useEffect } from "react";
import CounterDisplay from "./CounterDisplay";



function Counter() {

  const [counter, setCounter] = useState(0);

  useEffect(()=> {
    const interval =  setInterval( () => 
      setCounter( (counter) => 
        counter + 1
      ), 1000);

    return () => {
      clearInterval(interval);
    }
  
  },[])


  return (
      <div>
        <CounterDisplay counterValue={counter} style={{color: "blue"}} />
      </div>
  )
}

export default Counter; 







    
    // constructor (props) {
    //     super(props)
    //     this.state = {    //initial value
    //         count: this.props.initialValue
    //     }
    // }
    // componentDidMount() {
    //   this.interval = setInterval(() => {
    //     this.setState((state) => {
    //         return  {count: state.count + this.props.increment}
          
    //     })
    //   }, this.props.interval)
    // }

    // componentWillUnmount() {
    //   clearInterval(this.interval);
    // }

    // componentDidUpdate() { 
    //   this.setState((state) => {
    //   if (state.count > 10 ) {
    //     return {count: this.props.initialValue};
    //   }
    // })

    // }
    // render() {
      
        // return (
        // <div>
        //   <CounterDisplay counterValue={this.state.count} style={{color: "blue"}} />
        // </div>
        // )
    











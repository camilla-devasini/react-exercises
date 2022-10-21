import React from 'react';

class CounterDisplay extends React.Component {
    render() {
        return <h1 style={{color: "blue"}}>{this.props.counterValue}</h1> 
    } 
    
}
export default CounterDisplay;
  
  


import React from "react";

// Create a Counter class component with an internal state containing a count property,
// initialized to 0. The Counter component should render the count property within an h1 tag,
// and the count property should be incremented by 1 every second

class Counter extends React.Component {
    
    
    constructor (props) {
        super(props)

        this.state = {    //initial value
            count: 0
        }

        setInterval(() => {
            this.setState((state) => {
                return {count: state.count + 1}

            })
        }, 1000 )
    }



    render() {
        return <h1>{this.state.count}</h1>
    }
}

export default Counter;
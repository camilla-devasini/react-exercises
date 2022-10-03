import React from "react";
import Age from "./Age";



class Welcome extends React.Component {
    render() {
        
        if (this.props.age > 18) {
            return (
                <>
                    <p>Welcome {this.props.name}!</p>
                    <Age age={this.props.age} />
                </>
            )
        } else {
            return <p>Welcome {this.props.name}!</p>
        }
    }
} 

//What happens if no name prop is passed to the Welcome component?
// In that case no name will be rendered, only the "Welcome!" string. 
// We can set a default value for the name prop in this way:

Welcome.defaultProps = {
    name: "Student"
}

export default Welcome;



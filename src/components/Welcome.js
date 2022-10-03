import React from "react";

class Welcome extends React.Component {
    render() {
       // Or with destructuring i can do: const {name, age} = this.props; and in return part only {name} ahd {age} to insert the props.
        return (
            <>
                <p>Welcome {this.props.name}!</p>
                <p>Your age is {this.props.age}</p>
            </>
       
        )
    }   
}

//What happens if no name prop is passed to the Welcome component?
// In that case no name will be rendered, only the "Welcome!" string. 
// We can set a default value for the name prop in this way:

Welcome.defaultProps = {
    name: "Student"
}

export default Welcome;



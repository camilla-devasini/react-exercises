import React from "react";

class Welcome extends React.Component {
    render() {
        return <p>Welcome {this.props.name}!</p>
    }   
}

//What happens if no name prop is passed to the Welcome component?
// In that case no name will be rendered, only the "Welcome!" string. 
// We can set a default value for the name prop in this way:

Welcome.defaultProps = {
    name: "Student"
}

export default Welcome;



import React from "react";

class Welcome extends React.Component {
    render() {
        //or with Destructuring i can do: const {name, age} = this.props
        //and than in the return i can insert the props only calling {name} and {age}
      
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



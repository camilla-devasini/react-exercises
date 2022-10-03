import React from "react";
import Age from "./Age";


// this.props.age > 18 && this.props.age < 65 && 
class Welcome extends React.Component {
    render() {
    
        if (this.props.age > 18 && this.props.age < 65 && this.props.name == 'Jhon') {
            return (
                <>
                    <p>Welcome {this.props.name && <strong>{this.props.name}</strong>}!</p>
                    <Age age={this.props.age} />
                    
                </>
            )
        } else {
            return <p>Welcome {this.props.name && <strong>{this.props.name}</strong>}!</p>
              
        }
    }
} 

//What happens if no name prop is passed to the Welcome component?
// In that case no name will be rendered, only the "Welcome!" string. 
// We can set a default value for the name prop in this way:

// RIMOSSO PER ESERCIZIO CONDITIONAL-RENDERING-04
// Welcome.defaultProps = {
//     name: "Student"
// }

export default Welcome;



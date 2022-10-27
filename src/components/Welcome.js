
import Age from "./Age";


// this.props.age > 18 && this.props.age < 65 && 
function Welcome(props) {
  
    let adultRange = props.age > 18 || props.age < 65; 
    // 19 - 64                                      // 0-18 oppure 65-100

    if (adultRange && props.name == 'Jhon' || (!adultRange || props.name != 'Jhon')) {
        
        return (
            <>
                <p className="welcome">Welcome {props.name && <strong>{props.name}</strong>}!</p>
                <Age age={props.age} />
            </>
        )
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



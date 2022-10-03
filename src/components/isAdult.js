import Age from "./Age";


function IsAdult() {

    const {adult} = this.props.age > 18;
    if (adult) {
        return <Age age={this.props.age}/>
    }
    
    
}
export default IsAdult;

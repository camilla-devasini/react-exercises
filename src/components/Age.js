import React from "react"

class Age extends React.Component {
    render() {
        if (this.props.age > 18) {
            return <p>Your age is {this.props.age}</p>;
        } if (this.props.age <= 18) {
            return <p>You are very young!</p>}
        }
}

export default Age;
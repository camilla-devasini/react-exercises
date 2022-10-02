import React from "react";
import Message from "./Message.js";

class SayHello extends React.Component {
    render() {
        return (
            <>
                <h1>Hello, World</h1>
                <Message />
            </>
        )
    }
}

export default SayHello;


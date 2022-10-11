import React from 'react';
import SayHello from './components/helloTitle.js';
import Welcome from './components/Welcome.js';
import Counter from './components/Counter.js';
import ClickCounter from './components/ClickCounter.js';
import ClickTracker from './components/ClickTracker.js';

class App extends React.Component {
    render() {

        return (
            <div>
                <SayHello />
                <Welcome name={"Jhon"} age="18" />
                <Counter initialValue={0} increment={1} interval={1000} />
                <ClickCounter />
                <ClickTracker />
            </div>    
        )
    }
}

export default App;



// What happens if the name prop is a JSX expression instead of a string? How do you pass a prop
// that contains a JSX expression?
// It is fine to pass a JSK expression (that will be converted into Javascript).
// We need to include JSX code into curly brackets {}

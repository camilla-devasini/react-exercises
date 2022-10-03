import React from 'react';
import SayHello from './components/helloTitle.js';
import Welcome from './components/Welcome.js';


class App extends React.Component {
    render() {
        return (
            <div>
                <SayHello />
                <Welcome name="Camilla" age="28"/>
            </div>    
        )
    }
}

export default App;
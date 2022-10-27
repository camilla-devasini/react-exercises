import React from 'react';
import ClickCounter from './components/ClickCounter.js';
import ClickTracker from './components/ClickTracker.js';
import Container from './components/containers/Container.js';
import Counter from './components/Counter.js';
import InteractiveWelcome from './components/form/InteractiveWelcome.js';
import Login from './components/form/Login.js';
import SayHello from './components/helloTitle.js';
import TodoList from './components/list/TodoList';
import Welcome from './components/Welcome.js';

class App extends React.Component {
    render() {

        return (
            <Container title="My React App">
                <SayHello />
                <Welcome name={"Jhon"} age="18" />
                <Counter initialValue={0} increment={1} interval={1000} />
                <ClickCounter />
                <ClickTracker />
                <InteractiveWelcome />
                <Login />
                <TodoList render={
                    ((items, deleteItemHandler) => 
                        {
                            return (
                                <ul>
                                    {items.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                {item}
                                                <button className="bg-red-500 hover:bg-blue-700 text-white"
                                                onClick={() => deleteItemHandler(index)}>Delete item</button>
                                            </li>)
                                    })}
                                </ul>
                            )      
                        }         
                    )
                }></TodoList>
            </Container>    
        )
    }
}

export default App;



// What happens if the name prop is a JSX expression instead of a string? How do you pass a prop
// that contains a JSX expression?
// It is fine to pass a JSK expression (that will be converted into Javascript).
// We need to include JSX code into curly brackets {}

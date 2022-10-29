import React from 'react';
import { useState } from "react";
import ClickCounter from './components/ClickCounter.js';
import ClickTracker from './components/ClickTracker.js';
import Container from './components/containers/Container.js';
import Counter from './components/Counter.js';
import InteractiveWelcome from './components/form/InteractiveWelcome.js';
import Login from './components/form/Login.js';
import SayHello from './components/helloTitle.js';
import TodoList from './components/list/TodoList';
import Welcome from './components/Welcome.js';
import LanguageContext from "./components/context/LanguageContext";
import DisplayLanguage from './components/DisplayLanguage.js';
import Sum from './components/Sum.js';
import GithubUser from './components/github/GithubUser.js';
import GithubUserList from './components/github/GithubUserList.js';
import CarDetails from './components/ref/CarDetails.js';
import ComponentUsingHook from './components/hooks/ComponentUsingHook.js';
import FilteredList from './components/filter/FilteredList.js';
import { Route, Routes } from 'react-router-dom';
import ShowGithubUser from './components/ ShowGithubUser.js';





function App () {
    

    const [Language, setLanguage] = useState();
    const handleLanguage = (event) => {
        setLanguage(event.target.value);
    }

    const numberArray = [1, 2, 3];
   
    const [counter, setCounter] = useState(0);
    const clickHandler = () => {
        setCounter ((prevState) => {
            return prevState + 1
        })
    };
   const onCounterChange = () => {
        setCounter(counter);
    
    }  
    return (
       
            
        <Container lang={Language} onLangChange={handleLanguage} title="My React App">
            <LanguageContext.Provider value={Language}>
                <DisplayLanguage />
            </LanguageContext.Provider>
            
            <Routes>
                <Route path="/" element={<Welcome name="Camilla" />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="users/:username" element={<ShowGithubUser />} />
            </Routes>
            
            {/* 
            <CarDetails />
            <GithubUserList />
            <SayHello />
            {/* <Welcome name={"Jhon"} age="18" /> */}
            {/* <FilteredList />
            <Counter initialValue={0} increment={1} interval={1000} />
            <ClickCounter onCounterChange={onCounterChange} onClickHandler={clickHandler} counter={counter}/>
            <ClickTracker />
            <InteractiveWelcome />
            <Login />
            <TodoList>
                {
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
                }
            </TodoList>
            <Sum />
            <GithubUser username="camilla-devasini"/>
            <ComponentUsingHook/> */}
        
        </Container>    
        )
    }



export default App;



// What happens if the name prop is a JSX expression instead of a string? How do you pass a prop
// that contains a JSX expression?
// It is fine to pass a JSK expression (that will be converted into Javascript).
// We need to include JSX code into curly brackets {}

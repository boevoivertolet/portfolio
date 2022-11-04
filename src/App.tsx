import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import {MyWorks} from './components/MyWorks/MyWorks';
import {Remote} from './components/Remote/Remote';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Remote/>
        </div>
    );
}

export default App;





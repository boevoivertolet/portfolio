import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import {MyWorks} from './components/MyWorks/MyWorks';


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>

        </div>
    );
}

export default App;





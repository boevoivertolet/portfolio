import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import {MyWorks} from './components/MyWorks/MyWorks';
import {Remote} from './components/Remote/Remote';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';
import {PhotoCard} from "./PhotoCard/PhotoCard";


function App() {

    return (
        <div className = "App">
            <div className = {'left'}>
                <PhotoCard />
            </div>
            <div className = {'right'}>
                <Main />
                <Skills />
                <MyWorks />
                {/*<Remote />*/}
                <Contacts />
                <Footer />
            </div>
        </div>
    );
}

export default App;



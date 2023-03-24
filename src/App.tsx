import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import {MyWorks} from './components/MyWorks/MyWorks';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';
import {PhotoCard} from "./components/PhotoCard/PhotoCard";


function App() {

    return (
        <div className = "App">
            <div className = {'left'}>
                <PhotoCard />
            </div>
            <div className = {'right'}>
                <article id ='main'></article>
                <Main />
                <article id ='skills'></article>
                <Skills />
                <article id ='works'></article>
                <MyWorks />
                <article id ='contacts'></article>
                <Contacts />
                <Footer />
            </div>
        </div>
    );
}

export default App;



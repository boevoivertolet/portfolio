import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import {MyWorks} from './components/MyWorks/MyWorks';
import {Remote} from './components/Remote/Remote';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';
import styles from "./components/Main/Main.module.css";


function App() {
    return (
        <div className = "App">
            <div className={'left'}>
                <div className = {styles.mainPhoto}></div>
            </div>
            <div className={'right'}>
                <Header />
                <Main />
                <Skills />
                <MyWorks />
                <Remote />
                <Contacts />
                <Footer />
            </div>
        </div>
    );
}

export default App;





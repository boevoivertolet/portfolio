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
            <div className = {'left'}>
                <div className = {styles.mainPhoto}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                                                       aperiam assumenda consequatur, dignissimos dolore dolorem hic
                                                       illo ipsam iusto laborum laudantium nisi omnis quam repudiandae
                                                       suscipit totam ullam veniam voluptas.</p>
                    <Header />
                </div>
            </div>
            <div className = {'right'}>
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





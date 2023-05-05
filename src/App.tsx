import React from 'react'
import './App.scss'
import Main from './components/Main/Main'
import Skills from './components/Skills/Skills'
import {MyWorks} from './components/MyWorks/MyWorks'
import {Contacts} from './components/Contacts/Contacts'
import {Footer} from './components/Footer/Footer'
import {PhotoCard} from './components/PhotoCard/PhotoCard'
import {UpButton} from "./components/UpButton/UpButton.";
import Particle from "./common/components/Particle";


function App() {
    return (
        <div className = 'App'>
            <Particle />
            <div className = {'left'}>
                <article id = 'top'></article>
                <PhotoCard />
            </div>

            <div className = {'right'}>
                <article id = 'main'></article>
                <Main />
                <article id = 'skills'></article>
                <Skills />
                <article id = 'works'></article>
                <MyWorks />
                <article id = 'contacts'></article>
                <Contacts />
                <UpButton />
                <Footer />
            </div>
        </div>

    )
}

export default App

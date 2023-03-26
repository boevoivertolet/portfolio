import React, {useEffect, useState} from 'react';
import './App.css';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import {MyWorks} from './components/MyWorks/MyWorks';
import {Contacts} from './components/Contacts/Contacts';
import {Footer} from './components/Footer/Footer';
import {PhotoCard} from "./components/PhotoCard/PhotoCard";
// @ts-ignore
import Zoom from 'react-reveal/Zoom';


function App() {
    const [startAnimation, setStartAnimation] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setStartAnimation(true)
        }, 1000)

    })

    return (
        <div className = "App">
            <div className = {'left'}>
                <PhotoCard />
            </div>
            <div className = {'right'}>
                {startAnimation &&
                    <Zoom>
                        <article id = 'main'></article>
                        <Main />
                        <article id = 'skills'></article>
                        <Skills />
                        <article id = 'works'></article>
                        <MyWorks />
                        <article id = 'contacts'></article>
                        <Contacts />
                    </Zoom>
                }
            </div>
            <Footer />
        </div>
    );
}

// <div className = "App">
//     <div className = {'left'}>
//         <PhotoCard />
//     </div>
//     <div className = {'right'}>
//         <ScrollContainer>
//             <ScrollPage>
//                 <Animator animation = {Fade()}>
//                     <article id = 'main'></article>
//                     <Main />
//                 </Animator>
//             </ScrollPage>
//
//             <ScrollPage>
//                 <Animator animation = {Fade()}>
//                     <article id = 'skills'></article>
//                     <Skills />
//                 </Animator>
//             </ScrollPage>
//
//             <ScrollPage>
//                 <Animator animation = {Fade()}>
//                     <article id = 'works'></article>
//                     <MyWorks />
//                 </Animator>
//             </ScrollPage>
//
//             <ScrollPage>
//                 <Animator animation = {Fade()}>
//                     <article id = 'contacts'></article>
//                     <Contacts />
//                 </Animator>
//             </ScrollPage>
//         </ScrollContainer>
//     </div>
//     <Footer />
// </div>

export default App;

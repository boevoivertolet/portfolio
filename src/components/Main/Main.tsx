import React from 'react';
import styles from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {GitGif} from "./GitGif";
import {Fade} from "react-awesome-reveal";


function Main() {
    return (
        <>
            <div className = {`${styles.mainBlock} ${styleContainer.container}`}>
                <div className = {styles.mainContainer}>
                    <div className = {styles.mainText}>
                        <Fade delay = {500}>
                            <h1>
                                Всем привет! Спасибо, что решили посетить мою страницу. Меня
                                зовут <span>Александр Бегинин</span>. Я
                                начинающий <span>Frontend</span> разработчик. Разрабатываю одностраничные
                                приложения(<span>SPA</span>).
                            </h1>
                        </Fade>
                        <p>Я проектирую и кодирую красивые простые вещи, и мне нравится то, что я делаю.</p>
                    </div>
                </div>
                <GitGif />
            </div>
        </>
    );
}

export default Main;

import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {GitGif} from "./GitGif";


function Main() {
    return (
        <>
            <div className = {`${styles.mainBlock} ${styleContainer.container}`}>
                <div className = {styles.mainContainer}>
                    <div className = {styles.mainText}>
                        <h1>
                            Всем привет! Спасибо, что решили посетить мою страницу. Меня
                            зовут <span>Александр</span>. Я
                            начинающий <span>Frontend</span> разработчик. Разрабатываю одностраничные
                            приложения(<span>SPA</span>).
                        </h1>
                        <p>Я проектирую и кодирую красивые простые вещи, и мне нравится то, что я делаю.</p>
                    </div>
                </div>
                <GitGif />
            </div>
        </>
    );
}

export default Main;

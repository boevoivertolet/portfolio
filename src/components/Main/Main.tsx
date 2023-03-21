import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'


function Main() {

    return (
        <div className = {styles.main}>
            <div className = {`${styles.mainContainer} ${styleContainer.container}`}>
                <div className = {styles.mainText}>
                    <h1>
                        Всем привет! Спасибо, что решили посетить мою страницу. Меня зовут <span>Александр</span>. Я начинающий <span>Frontend</span> разработчик. Я  делаю одностраничные приложения(<span>SPA</span>). Приоритетный стек: <span>ReactJS</span>, <span>Redux</span>, <span>TS/JS</span>.
                    </h1>
                    <p>Я проектирую и кодирую красивые простые вещи, и мне нравится то, что я делаю.</p>
                </div>

            </div>
        </div>
    );
}

export default Main;
import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'


function Main() {
    return (
        <div className={styles.main}>
            <div className={`${styles.mainContainer} ${styleContainer.container}`}>
                <div className={styles.mainText}>
                    <span>HI there</span>
                    <h1>I am Alexander Beginin</h1>
                    <p>Frontend Developer.</p>
                </div>

            </div>
        </div>
    );
}

export default Main;
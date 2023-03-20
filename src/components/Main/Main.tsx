import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'


function Main() {
    return (
        <div className = {styles.main}>
            <div className = {`${styles.mainContainer} ${styleContainer.container}`}>
                <div className = {styles.mainText}>
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span>Error</span>, explicabo.
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, aspernatur?</p>
                </div>

            </div>
        </div>
    );
}

export default Main;
import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'


function Main() {
    return (
        <div className = {styles.main}>
            <div className = {`${styles.mainContainer} ${styleContainer.container}`}>
                <div className = {styles.mainText}>
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, explicabo.
                    </h1>
                </div>

            </div>
        </div>
    );
}

export default Main;
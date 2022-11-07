import React from 'react';
import styles from './Footer.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import {BarItem} from './BarItem/BarItem';

export const Footer = () => {
    return (
        <footer className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Alexander Beginin</h2>
                    <div className={styles.bar}>
                        <BarItem/>
                        <BarItem/>
                        <BarItem/>
                        <BarItem/>

                    </div>
                    <div className={styles.title}>©2022 All rights reserved</div>
                </div>
            </div>
        </footer>

    )
}
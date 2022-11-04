import React from 'react';
import styles from './Remote.module.css';
import styleContainer from '../../common/styles/Container.module.css';

export const Remote = () => {
    return (
        <div className={styles.remoteBlock}>
            <div className={`${styleContainer.container} ${styles.remoteContainer}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Considering remote work options</h2>
                    <a className={styles.button} href="https://spb.hh.ru/">
                        <div >Hire me</div>
                    </a>
                </div>

            </div>
        </div>

    )
}
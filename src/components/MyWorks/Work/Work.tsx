import styles from './Work.module.css';
import React from 'react';

type WorkType = {
    titleProject: string
    description: string
}

export const Work = (props: WorkType) => {
    return (
        <div className={styles.work}>
            <div className={styles.icon}>
               {/*<img src="https://reactjs.org/logo-og.png" alt=""/>*/}
                <div className={styles.iconButton}><a href="https://github.com/boevoivertolet">Look</a></div>
            </div>
            <div>
                <h3>{props.titleProject}</h3>
                <div>{props.description}</div>
            </div>
        </div>
    )
}
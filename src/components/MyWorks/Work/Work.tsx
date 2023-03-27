import styles from './Work.module.scss';
import React from 'react';

type WorkType = {
    titleProject: string
    description: string
    link: string
    style?: {
        backgroundImage: string
        backgroundRepeat: string
        backgroundPosition: string,
        backgroundAttachment: string,
        backgroundSize: string;
    }
}

export const Work = (props: WorkType) => {
    return (
        <a className = {styles.workContainer} href = {props.link}>
            <div style = {props.style} className = {styles.work}>
                <div className = {styles.TitleDescription}>
                    <h2 className = {styles.workTitle}>{props.titleProject}</h2>
                    <div className = {styles.description}>{props.description}</div>
                </div>
            </div>
        </a>
    )
}

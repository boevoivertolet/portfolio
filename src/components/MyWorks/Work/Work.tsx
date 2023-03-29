import styles from './Work.module.scss';
import React from 'react';

type WorkPropsType = {
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

export const Work: React.FC<WorkPropsType> = (props) => {
    const {titleProject, description, link, style, ...restProps} = props
    return (
        <a target = {'_blank'} className = {styles.workContainer} href = {link}>
            <div style = {style} className = {styles.work}>
                <div className = {styles.TitleDescription}>
                    <h2 className = {styles.workTitle}>{titleProject}</h2>
                    <div className = {styles.description}>{description}</div>
                </div>
            </div>
        </a>
    )
}

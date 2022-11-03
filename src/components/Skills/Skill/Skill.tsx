import styles from './Skill.module.css';
import React from 'react';

type SkillType = {
    title: string
}


export const Skill = (props: SkillType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src="" alt=""/>
            </div>
            <h3>{props.title}</h3>
            <p></p>
        </div>
    )


}
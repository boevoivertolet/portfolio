import styles from './Skill.module.css';
import React from 'react';


type SkillType = {
    title: string
    logo: string
    id: string
}


export const Skill = (props: SkillType) => {
    return (
        <div  className={styles.skill}>
            <div id={props.id} className={styles.icon}>
                <img src={props.logo} alt="" />
            </div>

            <span  className={styles.description}>{props.title}</span>
        </div>
    )


}
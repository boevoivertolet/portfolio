import styles from './Skill.module.css';
import React from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';


type SkillType = {
    title: string
    logo: string
    id: string
    link: string
}


export const Skill = (props: SkillType) => {
    return (
        <Fade left>
            <a href = {props.link} target = "_blank">
                <div id = {props.id} className = {styles.skill}>

                    <div className = {styles.icon}>
                        <img src = {props.logo} alt = "" />
                    </div>
                    <span className = {styles.description}>{props.title}</span>
                </div>
            </a>
        </Fade>

    )

}

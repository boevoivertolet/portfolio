import styles from './Skill.module.scss'
import React from 'react'
import { Bounce } from 'react-awesome-reveal'

type SkillPropsType = {
    title: string
    logo: string
    id: string
    link: string
}

export const Skill: React.FC<SkillPropsType> = (props) => {
    const { link, id, logo, title, ...restProps } = props
    return (
        <Bounce triggerOnce={true}>
            <a href={link} target="_blank">
                <div id={id} className={styles.skill}>
                    <div className={styles.icon}>
                        <img src={logo} alt="" />
                    </div>
                    <span className={styles.description}>{title}</span>
                </div>
            </a>
        </Bounce>
    )
}

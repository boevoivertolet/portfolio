import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container}  ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'React'}/>
                    <Skill title={'Redux'}/>
                    <Skill title={'HTML'}/>
                    <Skill title={'CSS'}/>

                </div>
            </div>
        </div>
    );
}

export default Skills;


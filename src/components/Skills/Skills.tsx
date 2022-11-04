import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';

function Skills() {
    let description = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container}  ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill description={description} title={'React'}/>
                    <Skill description={description} title={'Redux'}/>
                    <Skill description={description} title={'JS'}/>
                    <Skill description={description} title={'HTML'}/>
                    <Skill description={description} title={'CSS'}/>

                </div>
            </div>
        </div>
    );
}

export default Skills;


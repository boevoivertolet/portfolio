import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import reactLogo from '../../assetes/reactLogo.png'
import reduxLogo from '../../assetes/reduxLogo.png'
import jsLogo from '../../assetes/jsLogo.png'
import tsLogo from '../../assetes/tsLogo.png'
import htmlLogo from '../../assetes/htmlLogo.png'
import cssLogo from '../../assetes/cssLogo.png'
import ofLogo from '../../assetes/ofLogo.png'

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container}  ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Мой приоритетный <span>стэк</span>:  </h2>
                <div className={styles.skills}>
                    <Skill  id={'react'} title={'React'} logo={reactLogo}/>
                    <Skill id={'redux'}  title={'Redux'} logo={reduxLogo}/>
                    <Skill  id={'js'} title={'JavaScript'} logo={jsLogo}/>
                    <Skill  id={'ts'} title={'TypeScript'} logo={tsLogo}/>
                    <Skill id={'html'} title={'HTML'} logo={htmlLogo}/>
                    <Skill  id={'css'} title={'CSS'} logo={cssLogo}/>
                    <Skill id={'stack'} title={'Stack Overflow ;)'} logo={ofLogo}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;


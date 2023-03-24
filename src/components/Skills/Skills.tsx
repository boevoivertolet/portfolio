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
        <div className={`${styles.skillsBlock} ${styleContainer.container}`}>
            <div  className={styles.skillsContainer}>

                <h2 className={styles.title}>Мой приоритетный <span>стэк</span>:  </h2>
                <div className={styles.skills}>
                    <Skill  id={'react'} title={'React'} logo={reactLogo} link={'https://ru.reactjs.org/'}/>
                    <Skill id={'redux'}  title={'Redux'} logo={reduxLogo} link={'https://redux.js.org/'}/>
                    <Skill  id={'js'} title={'JavaScript'} logo={jsLogo} link={'https://developer.mozilla.org/ru/docs/Web/JavaScript'}/>
                    <Skill  id={'ts'} title={'TypeScript'} logo={tsLogo} link={'https://www.typescriptlang.org/'}/>
                    <Skill id={'html'} title={'HTML'} logo={htmlLogo} link={''}/>
                    <Skill  id={'css'} title={'CSS'} logo={cssLogo} link={'http://htmlbook.ru/html'}/>
                    <Skill id={'stack'} title={'Stack Overflow ;)'} logo={ofLogo} link={'https://stackoverflow.com/'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;


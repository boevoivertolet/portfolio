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
                <h2 className={styles.title}>Вот этим я <span>умею пользоваться:</span>  </h2>
                <div className={styles.skills}>
                    <Skill  id={'id1'} title={'React'} logo={reactLogo}/>
                    <Skill id={'id2'}  title={'Redux'} logo={reduxLogo}/>
                    <Skill  id={'id3'} title={'JS'} logo={jsLogo}/>
                    <Skill  id={'id4'} title={'TS'} logo={tsLogo}/>
                    <Skill id={'id5'} title={'HTML'} logo={htmlLogo}/>
                    <Skill  id={'id6'} title={'CSS'} logo={cssLogo}/>
                    <Skill id={'id7'} title={'Stack Overflow ;)'} logo={ofLogo}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;


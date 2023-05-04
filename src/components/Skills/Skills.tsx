import React from 'react';
import styles from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {Skill} from './Skill/Skill';
import reactLogo from '../../assetes/reactLogo.png'
import reduxLogo from '../../assetes/reduxLogo.png'
import jsLogo from '../../assetes/jsLogo.png'
import tsLogo from '../../assetes/tsLogo.png'
import htmlLogo from '../../assetes/htmlLogo.png'
import cssLogo from '../../assetes/cssLogo.png'
import ofLogo from '../../assetes/ofLogo.png'
import {Title} from "../../common/components/Title";
import {Zoom} from "react-awesome-reveal";


function Skills() {
    return (
        <div className = {`${styles.skillsBlock} ${styleContainer.container}`}>
            <div className = {styles.skillsContainer}>
                <Title text = {'Мой приоритетный'} textSpan = {'стек'} />
                <Zoom delay = {500}>
                    <div className = {styles.skills}>
                        <Skill id = {'react'} title = {'React'} logo = {reactLogo} link = {'https://ru.reactjs.org/'} />
                        <Skill id = {'redux'} title = {'Redux'} logo = {reduxLogo} link = {'https://redux.js.org/'} />
                        <Skill id = {'js'} title = {'JavaScript'} logo = {jsLogo}
                               link = {'https://developer.mozilla.org/ru/docs/Web/JavaScript'} />
                        <Skill id = {'ts'} title = {'TypeScript'} logo = {tsLogo}
                               link = {'https://www.typescriptlang.org/'} />
                        <Skill id = {'html'} title = {'HTML'} logo = {htmlLogo}
                               link = {'https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics'} />
                        <Skill id = {'css'} title = {'CSS'} logo = {cssLogo} link = {'http://htmlbook.ru/html'} />
                        <Skill id = {'stack'} title = {'Stack Overflow ;)'} logo = {ofLogo}
                               link = {'https://stackoverflow.com/'} />
                    </div>
                </Zoom>

            </div>
        </div>
    );
}

export default Skills;

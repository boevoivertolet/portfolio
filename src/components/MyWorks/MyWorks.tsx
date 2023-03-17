import React from 'react';
import styles from './MyWorks.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import {Work} from './Work/Work';

export const MyWorks = () => {

    let description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatibus!'

    return (
        <div className = {styles.myWorksBlock}>
            <div className = {`${styleContainer.container}  ${styles.myWorksContainer}`}>
                <div className = {styles.title}>
                    <h1>My <span>Projects</span></h1>
                </div>
                <div className = {styles.works}>
                    <Work titleProject = {'Casecook'} description = {description} />
                    <Work titleProject = {'My todolist'} description = {description} />
                    <Work titleProject = {'My counter'} description = {description} />
                </div>
            </div>

        </div>
    )
}



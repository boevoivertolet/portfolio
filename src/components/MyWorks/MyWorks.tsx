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
                    <h2>My <span>Projects</span></h2>
                </div>
                <div className = {styles.works}>
                    <Work titleProject = {'social network'} description = {description} />
                    <Work titleProject = {'todolist'} description = {description} />
                    <Work titleProject = {'counter'} description = {description} />
                </div>
            </div>

        </div>
    )
}



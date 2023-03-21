import React from 'react';
import styles from './MyWorks.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import {Work} from './Work/Work';

export const MyWorks = () => {

    let descriptionCasecook = 'Учебный проект, который я делал, когда обучался в "it-incubatore". Всё с нуля. От верстки, до санок, запросов на сервер и обработки ответов. Проект на классах с элементами хуков.'
    let descriptionTodo = 'Учебный проект, который я делал, когда обучался в "it-incubatore". В какой-то степени повторён функционал "Trello" Создание тудулистов, удаление, обновление. Весь на хуках. От  useState до useSelector, useMemo, useDispatch, а так же кастомные хуки. '
    let descriptionCounter = 'Учебный проект, который я делал, когда обучался в "it-incubatore". Одна из проверочных работ. Реализация счётчика по возрастающей сложности. От простейшего через локальный стейт до применения Redux.'

    return (
        <div className = {styles.myWorksBlock}>
            <div className = {`${styleContainer.container}  ${styles.myWorksContainer}`}>
                <div className = {styles.title}>
                    <h1>Мои <span>проекты:</span></h1>
                </div>
                <div className = {styles.works}>
                    <Work titleProject = {'Социальная сеть "Casecook"'} description = {descriptionCasecook}  link={'https://github.com/boevoivertolet/casecook'}/>
                    <Work titleProject = {'Небольшой аналог "Trello" мой тудулист'} description = {descriptionTodo} link={'https://github.com/boevoivertolet/todo'} />
                    <Work titleProject = {'Счётчики'} description = {descriptionCounter} link={'https://github.com/boevoivertolet/training'}  />
                </div>
            </div>

        </div>
    )
}



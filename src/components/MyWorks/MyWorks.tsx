import React from 'react';
import styles from './MyWorks.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import {Work} from './Work/Work';
import {Title} from '../../common/components/Title';
import caseCook from '../../assetes/img/social.png'
import {Zoom} from "react-awesome-reveal";


export const MyWorks = () => {

    const social = {
        backgroundImage: `url(${caseCook})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'

    }

    let descriptionCasecook = 'Учебный проект, который я делал, когда обучался в "it-incubatore". Всё с нуля. От верстки, до санок, запросов на сервер и обработки ответов. Проект на классах с элементами хуков.(В разработке) '
    let descriptionTodo = 'Учебный проект, который я делал, когда обучался в "it-incubatore". В какой-то степени скопирован функционал "Trello" Создание списка дел, удаление, обновление. Весь на хуках. От  useState до useSelector, useMemo, useDispatch, а так же кастомные хуки. (В разработке) '
    let descriptionCounter = 'Учебный проект, который я делал, когда обучался в "it-incubatore". Одна из проверочных работ. Реализация счётчика по возрастающей сложности. От простейшего через локальный стейт до применения Redux.'

    return (
        <Zoom fraction = {0} delay = {1000} triggerOnce = {true}>
            <div className = {`${styles.myWorksBlock} ${styleContainer.container}`}>
                <div className = {styles.myWorksContainer}>
                    <Title text = {'Мои'} textSpan = {'проекты'} />
                    <div className = {styles.works}>
                        <Work titleProject = {'Социальная сеть "Casecook"'}
                              description = {descriptionCasecook}
                              link = {'https://github.com/boevoivertolet/casecook'} />
                        <Work titleProject = {'Небольшой аналог "Trello" мой todolist'} description = {descriptionTodo}
                              link = {'https://github.com/boevoivertolet/todo'} />
                        <Work titleProject = {'Счётчики'} description = {descriptionCounter}
                              link = {'https://github.com/boevoivertolet/training'} />
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

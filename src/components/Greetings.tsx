import { useEffect, useState } from 'react'
import photo from '../assets/myPhoto.jpg'
import s from '../common/styles/HomePage.module.scss'

export const Greetings = () => {
    const [show, setShow] = useState<boolean>(false)
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000)
    }, [])
    return (
        <div className={show ? `${s.greetings + ' ' + s.show}` : `${s.greetings}`}>
            <div className={s.photo}>
                <img src={photo} alt="avatar" />
            </div>
            <div className={s.greetings_text}>
                <p>
                    Всем привет! И добро пожаловать на мою страницу. Меня зовут Александр и я занимаюсь разработкой
                    пользовательских интерфейсов. Пишу на JS/TS, активно использую ReactJS в связке с Redux(Toolkit).
                </p>
                <p>Тут собрана некоторая информация обо мне, моих работах и отдыхе.</p>
            </div>
        </div>
    )
}

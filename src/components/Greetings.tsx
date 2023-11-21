import s from '../common/styles/GreetingsPage.module.scss'
import photo from '../assetes/myPhoto.jpg'

export const Greetings = () => {
    return (
        <div className={s.greetings}>
            <div className={s.photo}>
                <img src={photo} alt="#" />
            </div>
            <div className={s.greetings_text}>
                <p>
                    Всем привет! И добро пожаловать на мою страницу. Меня зовут Александр и я занимаюсь разработкой
                    пользовательских интерфейсов. Пишу на JS/TS, активно использую ReactJS в связке с Redux(Redux
                    Toolkit).
                </p>
                <p>Это моё портфолио. Тут собрана некоторая информация обо мне, моих работах и отдыхе.</p>
            </div>
        </div>
    )
}

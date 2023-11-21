import s from '../common/styles/GreetingsPage.module.scss'
import { Greetings } from '../components/Greetings'
import { Fade } from 'react-awesome-reveal'

export const GreetingsPage = () => {
    return (
        <Fade duration={1000}>
            <div className={s.greetings_page}>
                <Greetings />
            </div>
        </Fade>
    )
}

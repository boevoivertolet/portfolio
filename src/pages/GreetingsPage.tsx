import s from '../common/styles/GreetingsPage.module.scss'

import { Greetings } from '../components/Greetings'

export const GreetingsPage = () => {
    return (
        <div className={s.greetings_page}>
            <Greetings />
        </div>
    )
}

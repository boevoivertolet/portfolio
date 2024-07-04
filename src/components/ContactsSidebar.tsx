import { Slide } from 'react-awesome-reveal'
import { NavLink } from 'react-router-dom'
import s from '../common/styles/ContactsSidebar.module.scss'

export const ContactsSidebar = () => {
    return (
        <div className={s.contacts_sidebar}>
            <Slide delay={500}>
                <NavLink title={'telegram'} target="_blank" to={'https://t.me/boevoiverto1et'}>
                    <div className={s.item}>
                        <span>
                            {' '}
                            <i className="fa-brands fa-telegram"></i>
                        </span>
                    </div>
                </NavLink>
            </Slide>
            <Slide delay={700}>
                <NavLink title={'vk'} target="_blank" to={'https://vk.com/nakalahinei'}>
                    <div className={s.item}>
                        <span>
                            {' '}
                            <i className="fa-brands fa-vk"></i>
                        </span>
                    </div>
                </NavLink>
            </Slide>
            <Slide delay={900}>
                <NavLink title={'skype'} target="_blank" to={'https://join.skype.com/invite/cT6Tt9ggx3VD'}>
                    <div className={s.item}>
                        <span>
                            <i className="fa-brands fa-skype"></i>
                        </span>
                    </div>
                </NavLink>
            </Slide>
        </div>
    )
}

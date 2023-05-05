import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import {BarItem} from './BarItem/BarItem';
import ReactTypingEffect from "react-typing-effect";

export const Footer = () => {
    return (
        <footer className = {`${styles.footerBlock} ${styleContainer.container}`}>
            <div className = {styles.footerContainer}>
                <div className = {styles.content}>
                    <div className = {styles.bar}>
                        <BarItem link = {'https://vk.com/nakalahinei'} id = {'vkId'} title = {'vk'}
                                 iconClassName = {"fa-brands fa-vk"} />
                        <BarItem link = {'https://www.instagram.com/boevoiverto1et/'} id = {'instId'}
                                 title = {'instagram'} iconClassName = {"fa-brands fa-instagram"} />
                        <BarItem link = {'https://t.me/boevoiverto1et'} id = {'telId'} title = {'telegram'}
                                 iconClassName = {"fa-brands fa-telegram"} />
                        <BarItem link = {'https://join.skype.com/invite/cT6Tt9ggx3VD'} id = {'skypeId'}
                                 title = {'skype'} iconClassName = {"fa-brands fa-skype"} />
                    </div>
                </div>
            </div>

        </footer>

    )
}

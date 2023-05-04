import React from 'react';
import styles from './Contacts.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import {Title} from "../../common/components/Title";
import {NameEmailPhone} from "./NameEmailPhone";
import {TextareaGroup} from "./TextareaGroup";
import {Fade} from "react-awesome-reveal";


export const Contacts = () => {
    return (
        <div className = {`${styles.contactsBlock} ${styleContainer.container}`}>
            <Title text = {'Мы можем поработать '} textSpan = {'вместе'} />
            <p>Со мной можно связаться по почте <span>begininworkspace@gmail.com</span>. Или заполнив форму.</p>
            <Fade damping = {1} delay = {500}>
                <div className = {`${styleContainer.container} ${styles.contactsContainer}`}>

                    <div className = {styles.content}>

                        <form className = {styles.form}>
                            <div className = {styles.formData}>
                                <NameEmailPhone />
                                <TextareaGroup />
                            </div>
                            <button type = {'submit'} className = {styles.button}>Отправить сообщение</button>
                        </form>

                    </div>

                </div>
            </Fade>
        </div>

    )
}

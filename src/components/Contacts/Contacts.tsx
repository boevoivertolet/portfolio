import React from 'react';
import styles from './Contacts.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import {Title} from "../../common/components/Title";
import {NameEmailPhone} from "./NameEmailPhone";
import {TextareaGroup} from "./TextareaGroup";


export const Contacts = () => {
    return (
        <div className = {`${styles.contactsBlock} ${styleContainer.container}`}>
            <Title text = {'Мы можем поработать '} textSpan = {'вместе'} />
            <p>Со мной можно связаться по почте <span>begininworkspace@gmail.com</span>. Или заполнив форму.</p>
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
        </div>

    )
}

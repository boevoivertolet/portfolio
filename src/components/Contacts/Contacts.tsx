import React from 'react';
import styles from './Contacts.module.css';
import styleContainer from '../../common/styles/Container.module.css';
import {Title} from "../../common/components/Title";


export const Contacts = () => {
    return (
        <div className = {`${styles.contactsBlock} ${styleContainer.container}`}>
            <Title text = {'Мы можем поработать '} textSpan = {'вместе'} />
            <p>Со мной можно связаться по почте <span>begininworkspace@gmail.com</span>. Или заполнив форму.</p>
            <div className = {`${styleContainer.container} ${styles.contactsContainer}`}>
                <div className = {styles.content}>
                    <form className = {styles.form}>
                        <div className = {styles.NameEmail}>
                            <div className = {styles.inputGroup}>
                                <label>Ф.И.О<sup>*</sup></label>
                                <input type = "text" name = "full-name" id = "full-name"
                                       placeholder = "Ваше полное имя" />
                            </div>
                            <div className = {styles.inputGroup}>
                                <label>Email<sup>*</sup></label>
                                <input type = "text" name = "email" id = "email" placeholder = "Ваш почтовый адрес" />
                            </div>
                        </div>
                        <div className = {styles.inputPhone}>
                            <label>Телефон</label>
                            <input type = "text" name = "phone" id = "phone" placeholder = "Ваш номер телефона" />
                        </div>
                        <div className = {styles.textareaGroup}>
                            <label>Сообщение</label>
                            <textarea name = "message" id = "message"
                                      placeholder = "Напишите своё сообщение для меня здесь ..."></textarea>
                        </div>
                    </form>
                    <button type = {'submit'} className = {styles.button}>Отправить сообщение</button>
                </div>
            </div>
        </div>

    )
}

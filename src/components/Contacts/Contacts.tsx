import React from 'react';
import styles from './Contacts.module.scss';
import styleContainer from '../../common/styles/Container.module.scss';
import {Title} from "../../common/components/Title";
import {Zoom} from "react-awesome-reveal";
import {MyForm} from "../../common/components/Form/MyForm";


export const Contacts = () => {


    return (
        <div className = {`${styles.contactsBlock} ${styleContainer.container}`}>
            <Title text = {'Мы можем поработать '} textSpan = {'вместе'} />
            <p>Со мной можно связаться по почте begininworkspace@gmail.com. Или заполнив форму.</p>
            <Zoom  damping = {1} delay = {500} triggerOnce = {true}
                  className = {`${styleContainer.container} ${styles.contactsContainer}`}>
                <div className = {styles.content}>
                    <MyForm />
                </div>
            </Zoom>

        </div>

    )
}

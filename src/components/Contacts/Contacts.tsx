import React from 'react';
import styles from './Contacts.module.css';
import styleContainer from '../../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Contacts</h2>
                    <form className={styles.form}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                    </form>
                    <button type={'submit'} className={styles.button}> Send</button>

                </div>
            </div>
        </div>

    )
}
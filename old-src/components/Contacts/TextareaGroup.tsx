import styles from './Contacts.module.scss'
import React from 'react'

export const TextareaGroup = () => {
    return (
        <div className={styles.textareaGroup}>
            <label className={styles.textareaGroupLabel}>Сообщение</label>
            <textarea
                className={styles.formTextarea}
                name="message"
                id="message"
                placeholder="Напишите своё сообщение для меня здесь ..."
            ></textarea>
        </div>
    )
}

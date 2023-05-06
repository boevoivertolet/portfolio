import styles from "./Contacts.module.scss";
import {InputGroup} from "./InputGroup";
import React, {useState} from "react";

export const NameEmailPhone = () => {
    return (
        <div className = {styles.nameEmailPhone}>
            <InputGroup type = {'text'} id = {"full-name"} name = {"full-name"} label = {'Ф.И.О'}
                        placeholder = {"Ваше полное имя"} sup = {'*'} />
            <InputGroup type = {'text'} id = {"email"} name = {"email"} label = {'Email'}
                        placeholder = {"Ваш почтовый адрес"} sup = {'*'} />
            <InputGroup type = {'text'} id = {"phone"} name = {"phone"} label = {'Телефон'}
                        placeholder = {"Ваш номер телефона"} />
        </div>

    )

}

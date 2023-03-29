import styles from "./Contacts.module.scss";
import React from "react";

export const InputGroup: React.FC<InputGroupPropsType> = (props) => {
    const {label, name, id, placeholder, sup, type, ...restProps} = props
    return (
        <div className = {styles.inputGroup}>
            <label>{label}<sup>{sup}</sup></label>
            <input className = {styles.formInput} type = {type} name = {name} id = {id}
                   placeholder = {placeholder} />
        </div>
    )
}
type InputGroupPropsType = {
    label: string
    name: string
    id: string
    sup?: string
    placeholder: string
    type: string

}

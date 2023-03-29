import styles from "./Contacts.module.scss";
import React from "react";

export const InputGroup = (props: InputGroupPropsType) => {
    return (
        <div className = {styles.inputGroup}>
            <label>{props.label}<sup>{props.sup}</sup></label>
            <input className = {styles.formInput} type = {props.type} name = {props.name} id = {props.id}
                   placeholder = {props.placeholder} />
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

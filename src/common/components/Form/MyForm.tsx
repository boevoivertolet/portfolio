import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import styles from "../../../components/Contacts/Contacts.module.scss";


export function MyForm() {
    const {register, watch, handleSubmit, formState: {errors}} = useForm<IFormInput>({mode: "onTouched"});


    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        alert(JSON.stringify(data))
    }
    console.log(watch("fullName"))


    return (
        <>
            <form className = {styles.form} onSubmit = {handleSubmit(onSubmit)}>
                <div className = {styles.formData}>
                    <div className = {styles.nameEmailPhone}>
                        <div className = {styles.inputGroup}>
                            <label>{'Ваше имя: '}<sup>{'*'}</sup></label>
                            <input
                                className = {errors.fullName ? `${styles.formInput + ' ' + styles.formInput__error}` : `${styles.formInput}`}
                                type = {'text'}
                                id = {"full-name"}
                                {...register("fullName", {
                                    required: ' поле обязательно',
                                    maxLength: {
                                        value: 50,
                                        message: ' 50 символов максимум'
                                    },
                                    minLength: {
                                        value: 3,
                                        message: ' 3 символа минимум'
                                    }
                                })} />
                            {errors.fullName && <span className = {errors.fullName ? styles.p__error : ''}>
                                      <i className = "fa-solid fa-triangle-exclamation"></i>
                                {errors.fullName?.message ? errors.fullName.message : ''}</span>}
                        </div>
                        <div className = {styles.inputGroup}>
                            <label>{"Email: "}<sup>{'*'}</sup></label>
                            <input
                                className = {errors.email ? `${styles.formInput + ' ' + styles.formInput__error}` : `${styles.formInput}`}
                                type = {'text'} id = {"email"}
                                {...register("email", {
                                    required: ' поле обязательно'
                                    ,
                                    maxLength: {
                                        value: 50,
                                        message: ' 50 символов максимум'
                                    },
                                })} />
                            {errors.email && <span
                                className = {errors.email ? styles.p__error : ''}>
                                <i className = "fa-solid fa-triangle-exclamation"></i>
                                {errors.email?.message ? errors.email.message : ''}</span>}
                        </div>
                        <div className = {styles.inputGroup}>
                            <label>{"Телефон: "}</label>
                            <input className = {styles.formInput} type = {'text'} id = {"phone"}
                                   placeholder = {""} {...register("phone")} />
                        </div>
                    </div>
                    <div className = {styles.textareaGroup}>
                        <label className = {errors.message ? styles.label__error : ''}>Сообщение<sup>{'*'}</sup></label>
                        <textarea
                            className = {errors.message ? `${styles.formTextarea + ' ' + styles.formInput__error}` : styles.formTextarea}
                            id = {"message"}
                            placeholder = {errors.message ? errors.message.message : ""} {...register("message", {required: 'поле обязательно'})}></textarea>
                    </div>
                </div>
                <input type = 'submit' className = {styles.button} />
            </form>
        </>
    );

}


interface IFormInput {
    fullName: string;
    email: string;
    message: string;
    phone: number;
}

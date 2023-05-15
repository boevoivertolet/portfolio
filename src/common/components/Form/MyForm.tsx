import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import styles from "../../../components/Contacts/Contacts.module.scss";


export function MyForm() {
    const {register, watch, reset, handleSubmit, formState: {errors,}} = useForm<IFormInput>({mode: "onTouched"});


    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        alert(JSON.stringify(data))
        reset()
    }
    console.log(watch("fullName"))


    return (
        <>
            <form  className = {styles.form} onSubmit = {handleSubmit(onSubmit)}>
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
                                    pattern: {
                                        value: /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u,
                                        message: " недопустимые символы"
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: ' 50 символов максимум'
                                    },
                                })} />
                            {errors.fullName && <span className = {errors.fullName ? styles.p__error : ''}>
                                      <i className = "fa-solid fa-triangle-exclamation"></i>
                                {errors.fullName?.message ? errors.fullName.message : '1'}</span>}
                        </div>
                        <div className = {styles.inputGroup}>
                            <label>{"Email: "}<sup>{'*'}</sup></label>
                            <input
                                className = {errors.email ? `${styles.formInput + ' ' + styles.formInput__error}` : `${styles.formInput}`}
                                type = {'text'} id = {"email"}
                                {...register("email", {
                                    required: ' поле обязательно'
                                    ,
                                    pattern: {
                                        value: /^[_a-z0-9-\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,
                                        message: ' поле для почтового адреса'
                                    },
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
                                   placeholder = {""} {...register("phone", {
                                pattern: {
                                    value: /^([+]?[0-9\s-\(\)]{3,25})*$/i,
                                    message: ' поле для номера телефона'
                                }
                            })} />
                            {errors.phone && <span
                                className = {errors.phone ? styles.p__error : ''}>
                                <i className = "fa-solid fa-triangle-exclamation"></i>
                                {errors.phone?.message ? errors.phone.message : ''}</span>}
                        </div>
                    </div>
                    <div className = {styles.textareaGroup}>
                        <label>Сообщение<sup>{'*'}</sup></label>
                        <textarea
                            className = {errors.message ? `${styles.formTextarea + ' ' + styles.formInput__error}` : styles.formTextarea}
                            id = {"message"}
                            placeholder = {errors.message?.message} {...register("message", {required: ' поле обязательно'})}></textarea>

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

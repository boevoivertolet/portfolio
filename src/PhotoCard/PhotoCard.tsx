import styles from "../components/Main/Main.module.css";
import MyPhoto from "../assetes/kotymba.jpg";
import Header from "../components/Header/Header";
import React from "react";

export const PhotoCard = () => {
    return (
        <div className = {styles.mainPhoto}>
            <h2 className = {styles.myLogo}>Alexander <span>Frontend developer</span></h2>
            <img className = {styles.myPhoto} src = {MyPhoto} alt = "#" />
            <p>bjha78rus@yandex.ru</p>
            <p>Base in Saint-Petersburg</p>
            <Header />
        </div>
    )
}
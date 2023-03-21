import styles from "../components/Main/Main.module.css";
import MyPhoto from "../assetes/kotymba.jpg";
import Header from "../components/Header/Header";
import React from "react";

export const PhotoCard = () => {
    return (
        <div className = {styles.mainPhoto}>
            <h2 className = {styles.myLogo}>Александр<span>Frontend dev.</span></h2>
            <img className = {styles.myPhoto} src = {MyPhoto} alt = "#" />
            <p>begininworkspace@gmail.com</p>
            <p>Живу в Санкт-Петербурге</p>
            <Header />
            <a href = "#"><div className={styles.resumeButton}>Моё резюме</div></a>
        </div>
    )
}
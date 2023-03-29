import styles from "./PhotoCard.module.scss";
import MyPhoto from "../../assetes/kotymba.jpg";
import Header from "../Header/Header";
import React from "react";
import reactGif from "../../assetes/react.gif";

export const PhotoCard = () => {
    return (

        <div className = {styles.mainPhoto}>
            <img className = {styles.gif} src = {reactGif} alt = "" />
            <img className = {styles.gif} src = {reactGif} alt = "" />
            <img className = {styles.gif} src = {reactGif} alt = "" />
            <img className = {styles.gif} src = {reactGif} alt = "" />
            <img className = {styles.gif} src = {reactGif} alt = "" />
            <h3 className = {styles.myLogo}>Александр<span>Frontend dev.</span></h3>
            <img className = {styles.myPhoto} src = {MyPhoto} alt = "#" />
            <p>begininworkspace@gmail.com</p>
            <p>Живу в Санкт-Петербурге</p>
            <Header />
            <a target = "_blank" href = "https://spb.hh.ru/resume/bf881214ff0bd2eca90039ed1f307262414d71">
                <div className = {styles.resumeButton}>Моё резюме</div>
            </a>
        </div>


    )
}

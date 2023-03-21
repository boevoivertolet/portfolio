import styles from "../components/Main/Main.module.css";
import MyPhoto from "../assetes/kotymba.jpg";
import Header from "../components/Header/Header";
import React from "react";

export const PhotoCard = () => {
    return (
        <div className = {styles.mainPhoto}>
            <h2 className = {styles.myLogo}>Alexander <span>Frontend developer</span></h2>
            <img className = {styles.myPhoto} src = {MyPhoto} alt = "#" />
            <p>begininworkspace@gmail.com</p>
            <p>Base in Saint-Petersburg</p>
            <Header />
            <p>©2022 All rights reserved</p>
        </div>
    )
}
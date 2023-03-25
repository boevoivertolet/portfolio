import styles from "../PhotoCard/PhotoCard.module.css";
import gitGif from "../../assetes/git.gif";
import React from "react";

export const GitGif = () => {
    return (
        <div className = {styles.gifContainer}>
            <div className = {styles.gitGif}>
                <a target = '_blank' href = "https://github.com/boevoivertolet">
                    <img className = {styles.gitImg} src = {gitGif} alt = "" />
                </a>
                <span>Github</span>
            </div>
        </div>
    )
}

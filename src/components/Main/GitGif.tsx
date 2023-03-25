import styles from "../PhotoCard/PhotoCard.module.css";
import gitGif from "../../assetes/gitHubImg.jpg";
import React from "react";
// @ts-ignore
import Spin from 'react-reveal/Spin';


export const GitGif = () => {
    return (
        <div className = {styles.gifContainer}>
            <div className = {styles.gitGif}>
                <Spin>
                    <a target = '_blank' href = "https://github.com/boevoivertolet">
                        <img className = {styles.gitImg} src = {gitGif} alt = "" />
                    </a>
                </Spin>
            </div>
        </div>
    )
}

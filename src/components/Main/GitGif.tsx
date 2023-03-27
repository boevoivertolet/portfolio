import styles from "../Main/GitGif.module.scss";
import gitGif from "../../assetes/gitHubImg.jpg";
import React, {useEffect, useState} from "react";
// @ts-ignore
import Spin from 'react-reveal/Spin';


export const GitGif = () => {
    const [startAnimation, setStartAnimation] = useState<boolean>(false)

    useEffect(() => {
        setStartAnimation(true)
        setTimeout(() => {
            setStartAnimation(false)
        }, 10000)

    })
    return (
        <div className = {styles.gifContainer}>
            <div className = {styles.gitGif}>
                {
                    startAnimation &&
                    <Spin>
                        <a target = '_blank' href = "https://github.com/boevoivertolet">
                            <img className = {styles.gitImg} src = {gitGif} alt = "" />
                        </a>
                    </Spin>
                }
            </div>
        </div>
    )
}

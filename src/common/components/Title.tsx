import styles from "../../components/MyWorks/MyWorks.module.scss";
import React from "react";

export const Title = (props: TitlePropsType) => {
    return (
        <div className = {styles.title}>
            <h2>{props.text} <span>{props.textSpan}:</span></h2>
        </div>
    )
}
type TitlePropsType = {
    text: string
    textSpan: string
}

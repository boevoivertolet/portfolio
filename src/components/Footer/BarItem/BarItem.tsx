import React from 'react';
import styles from './BarItem.module.scss';


export const BarItem: React.FC<BarItem> = (props) => {
    const {link, id, iconClassName, title, ...restProps} = props
    return (
        <a href = {link} target = "_blank">
            <div id = {id} className = {styles.barItem}>
                <i className = {iconClassName}></i>

            </div>
        </a>

    )
}
type BarItem = {
    title?: string
    iconClassName: string
    id: string
    link: string
}

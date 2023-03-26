import React, {MouseEvent, useState} from "react";
import styles from './Nav.module.css'

export const NavItem = (props: NavItemPropsType) => {
    const [display, setDisplay] = useState<boolean>(false)

    const setDisplayTrue = (e: MouseEvent<HTMLAnchorElement>) => {
        setDisplay(true)
    }
    const setDisplayFalse = (e: MouseEvent<HTMLAnchorElement>) => {
        setDisplay(false)
    }
    return (
        <div className = {styles.navItem}>
            <a href = {props.address} onMouseEnter = {setDisplayTrue}
               onMouseLeave = {setDisplayFalse}>
                <div className = {styles.navIcon}>
                    <i className = {props.className}></i>
                </div>

            </a>
            {display && <div className = {styles.titleNav}>{props.title}</div>}
        </div>
    )
}
type NavItemPropsType = {
    address: string
    title?: string
    className: string
}

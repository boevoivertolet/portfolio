import React, {MouseEvent, useState} from "react";
import styles from './Nav.module.scss'

export const NavItem: React.FC<NavItemPropsType> = (props) => {
    const {address, title, iconClassName, ...restProps} = props
    const [display, setDisplay] = useState<boolean>(false)

    const setDisplayTrue = (e: MouseEvent<HTMLAnchorElement>) => {
        setDisplay(true)
    }
    const setDisplayFalse = (e: MouseEvent<HTMLAnchorElement>) => {
        setDisplay(false)
    }
    return (
        <div className = {styles.navItem}>
            <a href = {address} onMouseEnter = {setDisplayTrue}
               onMouseLeave = {setDisplayFalse}>
                <div className = {styles.navIcon}>
                    <i className = {iconClassName}></i>
                </div>

            </a>
            {display && <div className = {styles.titleNav}>{title}</div>}
        </div>
    )
}
type NavItemPropsType = {
    address: string
    title?: string
    iconClassName: string
}

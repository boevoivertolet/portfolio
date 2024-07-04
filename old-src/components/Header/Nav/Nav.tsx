import React from 'react'
import styles from './Nav.module.scss'
import { NavItem } from './NavItem'

function Nav() {
    return (
        <div className={styles.nav}>
            <NavItem title={'home'} address={'#main'} iconClassName={'fa-solid fa-house'} />
            <NavItem title={'skills'} address={'#skills'} iconClassName={'fa-brands fa-react'} />
            <NavItem title={'works'} address={'#works'} iconClassName={'fa-solid fa-diagram-project'} />
            <NavItem title={'contacts'} address={'#contacts'} iconClassName={'fa-sharp fa-solid fa-address-card'} />
        </div>
    )
}

export default Nav

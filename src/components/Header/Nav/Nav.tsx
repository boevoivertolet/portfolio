import React from 'react';
import styles from './Nav.module.css'
import {NavItem} from "./NavItem";

function Nav() {
    return (
        <div className = {styles.nav}>
            <NavItem title={'home'} address={"#main"} className={"fa-solid fa-house"}/>
            <NavItem title={'skills'} address={"#skills"} className={"fa-brands fa-react"}/>
            <NavItem title={'works'} address={"#works"} className={"fa-solid fa-diagram-project"}/>
            <NavItem title={'contacts'} address={"#contacts"} className={"fa-sharp fa-solid fa-address-card"}/>
        </div>
    );
}

export default Nav;

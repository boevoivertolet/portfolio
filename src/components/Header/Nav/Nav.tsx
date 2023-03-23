import React from 'react';
import styles from './Nav.module.css'

function Nav() {
    return (
        <div className = {styles.nav}>
            <a href = "#main">
                <div><i className = "fa-solid fa-house"></i></div>
            </a>
            <a href = "#skills">
                <div><i className = "fa-brands fa-react"></i></div>
            </a>
            <a href = "#works">
                <div><i className = "fa-solid fa-diagram-project"></i></div>
            </a>
            <a href = "#contacts">
                <div><i className = "fa-sharp fa-solid fa-address-card"></i></div>
            </a>
        </div>
    );
}

export default Nav;
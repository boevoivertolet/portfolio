import React, { useState } from 'react'
import s from '../common/styles/Navbar.module.scss'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const [vue, setVue] = useState<boolean>(false)

    return (
        <div className={s.navbar}>
            <div className={vue ? s.navbar_menu_show : s.navbar_menu_hide}>
                <NavLink to={'/greetingsPage'} className={({ isActive }) => (isActive ? s.active : '')}>
                    <i className="fa-solid fa-house"></i>
                </NavLink>
                <NavLink to={'/portfolioPage'} className={({ isActive }) => (isActive ? s.active : '')}>
                    <i className="fa-solid fa-user"></i>
                </NavLink>
            </div>
            <div onClick={() => setVue(!vue)} className={s.menu_icon}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    )
}

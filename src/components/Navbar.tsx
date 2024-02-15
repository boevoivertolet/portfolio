import { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import { NavLink } from 'react-router-dom';
import s from '../common/styles/Navbar.module.scss';

export const Navbar = () => {
      const [vue, setVue] = useState<boolean>(false);

      return (
            <div className={s.navbar}>
                  <div className={vue ? s.navbar_menu_show : s.navbar_menu_hide}>
                        <NavLink
                              title={'home'}
                              to={'/homePage'}
                              className={({ isActive }) => (isActive ? s.active : '')}
                        >
                              <i className='fa-solid fa-house'>
                                    <span>home</span>
                              </i>
                        </NavLink>
                        <NavLink
                              title={'portfolio'}
                              to={'/portfolioPage'}
                              className={({ isActive }) => (isActive ? s.active : '')}
                        >
                              <i className='fa-solid fa-user'>
                                    <span>portfolio</span>
                              </i>
                        </NavLink>
                        <NavLink
                              title={'about'}
                              to={'/aboutPage'}
                              className={({ isActive }) => (isActive ? s.active : '')}
                        >
                              <i className='fa-solid fa-address-card'>
                                    <span>about</span>
                              </i>
                        </NavLink>
                        <NavLink
                              title={'my works'}
                              to={'/worksPage'}
                              className={({ isActive }) => (isActive ? s.active : '')}
                        >
                              <i className='fa-solid fa-diagram-project'>
                                    <span>my works</span>
                              </i>
                        </NavLink>
                        <NavLink
                              title={'contacts'}
                              to={'/contactsPage'}
                              className={({ isActive }) => (isActive ? s.active : '')}
                        >
                              <i className='fa-solid fa-address-book'>
                                    <span>contacts</span>
                              </i>
                        </NavLink>
                  </div>
                  <Slide direction={'right'}>
                        <div className={s.menu_icon}>
                              {!vue ? (
                                    <i onClick={() => setVue(!vue)} title={'menu'} className='fa-solid fa-bars'></i>
                              ) : (
                                    <i onClick={() => setVue(!vue)} title={'close'} className='fa-solid fa-xmark'></i>
                              )}
                        </div>
                  </Slide>
            </div>
      );
};

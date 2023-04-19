import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

function Header() {
    return (
        <header>

            <div className="head container">
                <NavLink to="/" className='head__logo'>
                    LOGO
                </NavLink>

                <ul className="head__list">
                    <li className="head__item"><NavLink to="/" className='head__link' >Popular</ NavLink></li>
                    <li className="head__item"><NavLink to="/upcoming" className='head__link' >Upcoming</ NavLink></li>
                    <li className="head__item"><NavLink to="/toprated" className='head__link' >Top Rated</ NavLink></li>
                </ul>

                <form action="#" className='head__form form'>
                    <label htmlFor="search" className='form__lable'>
                        <input type="search" name='search' placeholder='Search all movie' className='form__input' />
                    </label>
                </form>
            </div>
        </header>
    )
}

export default Header
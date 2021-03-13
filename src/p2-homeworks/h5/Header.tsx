import React from 'react'
import {PATH} from "./Routes";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'


function Header() {

    return (


            <div className={s.content}>
               <NavLink className={s.link} activeClassName={s.active} to={PATH.PRE_JUNIOR}>
                   Pre-junior</NavLink>
                <NavLink className={s.link} activeClassName={s.active} to={PATH.JUNIOR}>
                    Junior</NavLink>
                <NavLink className={s.link} activeClassName={s.active} to={PATH.JUNIOR_PLUS}>
                    Junior+</NavLink>
                <div className={s.block}> Menu </div>
            </div>

    )
}

export default Header

import React from "react";
import { NavLink } from 'react-router-dom';

import '../assets/css/nav.css'

export default function Nav() {
    //maybe export this to the server
    const navLabels = [
        {title: 'Home', route: 'Home'},
        {title: 'Wine Club', route: 'WineClub'},
        {title: 'Dining', route: 'Restaurant'},
        {title: 'Events', route: 'Events'},
        {title: 'Gift', route: 'Shop'},
        {title: 'Winery', route: 'Wine'},
        {title: 'Contact', route: 'Connect'}
    ]

    return(
        <div class='navBar'>
            <div />
            <ul class='navItems'>
            <a className='navLink'>icon</a>
            {navLabels.map(label => {
                return (
                        <li className='navItem'>
                            <NavLink to={label.route} className={({ isActive }) => isActive ? 'activeLink link' : 'navLink link' }>{label.title}</NavLink>
                        </li>
                        )
                    })}
            </ul>
            {/* maybe create a modal that contains more of the 'I already know what im here for' customers. */}
        </div>
        )
    }
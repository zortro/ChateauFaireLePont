import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import '../assets/css/nav.css'

export default function Nav() {
    const [open, setOpen] = useState(false)
    
    function openModal() {
        if (open !== true) {
            return setOpen(true)
        }
        return setOpen(false)
    }

    //maybe export this to the server
    const navLabels = [
        {title: 'Home', route: 'Home'},
        {title: 'Winery', route: 'Wine'},
        {title: 'Dining', route: 'Restaurant'},
        {title: 'Events', route: 'Events'},
        {title: 'Shop', route: 'Shop'},
        {title: 'Contact', route: 'Connect'}
    ]

    return(
            <>
                <div class='navBar'>
                    <div class='navBG'/>
                    <a className='navLink icon'>Chateau Faire Le Pont</a>
                    <ul class='navItems'>
                        {navLabels.map(label => {
                            return (
                                <li className='navItem'>
                                    <NavLink to={label.route} className={({ isActive }) => isActive ? 'activeLink link' : 'navLink link' }>{label.title}</NavLink>
                                </li>
                                )
                            })}
                    </ul>
                    <button onClick={() => openModal()} class='menu'>=</button>
                    {/* maybe create a modal that contains more of the 'I already know what im here for' customers. */}
                </div>
                <div>
                    <h1>modal</h1> 
                </div>

            </>
        )
    }
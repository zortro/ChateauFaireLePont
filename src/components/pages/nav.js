import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

import '../assets/css/nav.css'

export default function Nav() {
    const [open, setOpen] = useState(false)

    console.log(open)
    
    function openModal() {
        if (open !== true) {
            return setOpen(true)
        }
        return setOpen(false)
    }

    //maybe export this to the server
    const navLabels = [
        {title: 'Home', route: ''},
        {title: 'Winery', route: 'Wine'},
        {title: 'Dining', route: 'Restaurant'},
        {title: 'Events', route: 'Events'},
        {title: 'Shop', route: 'Shop'},
        {title: 'Contact', route: 'Connect'}
    ]

    const modalLabels = [
        {title: 'ex.', route: 'route'},
        {title: 'ex.', route: 'route'},
        {title: 'ex.', route: 'route'},
        {title: 'ex.', route: 'route'}
    ]

    return(
            <>
                <div class='navBar'>
                    <div class='navBG'/>
                    <NavLink to='/' className='navLink link icon'>Chateau Faire Le Pont</NavLink>
                    <ul class={open ? 'navItems' : 'navItems'}>
                        {navLabels.map(label => {
                            return (
                                <li className='navItem'>
                                    <NavLink to={label.route} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'activeLink link' : 'navLink link' }>
                                            {label.title}
                                        </NavLink>
                                </li>
                                )
                            })}
                    </ul>
                    <div onClick={() => openModal()} class={open ? 'menu' : 'menu'}>
                        {/* transform into the shape of an x on true */}
                        <div class='line' />
                        <div class='line' />
                        <div class={open ? 'hidden' : 'line'} />
                    </div>
                </div>
                <div class={open ? 'modal' : 'hidden'}>
                    <div class='modalBg' />
                    <div class='modalContent'>
                        <h1>modal</h1>
                        {modalLabels.map(label => {
                            return (
                                <li className='navItem'>
                                    <NavLink onClick={() => setOpen(false)} to={label.route} className='navLink link'>
                                        {label.title}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </div> 
                </div>

                {/* maybe create a modal that contains more of the 'I already know what im here for' customers. */}

            </>
        )
    }
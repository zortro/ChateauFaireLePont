import React from 'react';

import familyGuyCast from '../assets/img/familyGuyCast.jpg'
import logo from '../assets/img/logo.png'

export default function Home() {
    return(
        <>
            <div class='banner'>
                <img src={familyGuyCast}></img>
            </div>

            <div class='content'>
                <p class='header'>Welcome to</p>
                {/* replace with img of titleText */}
                <h1 class='title'>Chateau Faire Le Pont</h1>
                <p class='textWall'>Lorem</p>

                <img src="https://placehold.it/"></img>

                <h1 class='header'>About Ourselves</h1>
                <p class='textWall'>lorem</p>
            </div>
        </>
    )
}
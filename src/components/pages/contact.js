import React from 'react';

import goldshire from '../assets/img/goldshire.jpg'

export default function connect() {
    return(
        <>
            <div class='bannerContainer'>
                <h1 class='bannerHead'>Connect</h1> 
                <img src={goldshire}/>
            </div>

            <div class='content'>
                <h1 class='title'>Connect with us</h1>
            </div>
        </>
    )
}
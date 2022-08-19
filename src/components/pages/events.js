import React from 'react';
import goldshire from '../assets/img/goldshire.jpg'

//potentially change to "News" and include events and Article Features
export default function events() {
    return(
        <>
            <div class='bannerContainer'>
                <h1 class='bannerHead'>events</h1> 
                <img src={goldshire}/>
            </div>

            <div class='content'>
                <h1 class='title'>events</h1>
            </div>
        </>
    )
}
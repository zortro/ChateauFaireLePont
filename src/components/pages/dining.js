import React from 'react';
import goldshire from '../assets/img/goldshire.jpg'

//include abt restaurant, and menu, feat. music and special events/concerts

export default function dining() {
    return(
        <>
            <div class='bannerContainer'>
                <h1 class='bannerHead'>dining</h1> 
                <img src={goldshire}/>
            </div>

            <div class='content'>
                <h1 class='title'>dining</h1>
            </div>
        </>
    )
}
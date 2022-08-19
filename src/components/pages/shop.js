import React from 'react';
import goldshire from '../assets/img/goldshire.jpg'

export default function shop() {
    return(
        <>
            <div class='bannerContainer'>
                <h1 class='bannerHead'>Shop</h1> 
                <img src={goldshire}/>
            </div>

            <div class='content'>
                <h1 class='title'>Shop</h1>
            </div>
        </>
    )
}
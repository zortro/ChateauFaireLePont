import React from 'react';
import goldshire from '../assets/img/goldshire.jpg'

//Include links to purchasing wine through '/shop' route, include award winning releases, wine history, wineclub information and signup link, wineclub benefits, and inquiry about custom labels
export default function winery() {
    return(
        <>
            <div class='bannerContainer'>
                <h1 class='bannerHead'>Winery</h1> 
                <img src={goldshire}/>
            </div>

            <div class='content'>
                <h1 class='title'>Our Wines</h1>
            </div>
        </>
    )
}
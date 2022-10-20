import React, { useEffect, useState } from 'react';
import goldshire from '../assets/img/goldshire.jpg'
import wine1 from '../assets/img/wine1.jpg'

import Get from '../../js/connection.js'

/* //getWine
import getWine from '../../js/connection.js' */

//Include links to purchasing wine through '/shop' route, include award winning releases, wine history, wineclub information and signup link, wineclub benefits, and inquiry about custom labels
export default function winery() {

    const ext = '/wine/getWine'
    let data = []
    console.log('wine.js got:', data)
    Get(ext, data)

    return(
        <>
            <div className='bannerContainer'>
                <h1 className='bannerHead'>Winery</h1> 
                <img src={goldshire}/>
            </div>

            <div className='content'>

                <ul>
                </ul>
                <h1 className='title'>Our Wines</h1>
                <div className='textWall'>
                    <p>
                        Uncork that thing, decanter the contents. Chenin blanc boasts a bouquet of fresh pears, saffron, jasmine, ginger, and quince. Sangiovese – go ahead, pronounce it.
                    </p>
                <br/>
                    <p>
                        The world's oldest bottle of wine is over 1600 years old and can be found at a museum in Germany. Acid, tannin, fruitiness, oakiness, are all components of balance. Hint: Sangiovese is a four syllable word. Maybe more if you're drunk. Dry Lambrusco pairs well with junk food. Trichloroanisole, or stinky cork, is produced when chlorine used in sanitization comes into contact with natural cork-dwelling bacteria. The host of a dinner should take the first sip of wine to assure his guests it is not poisoned. Wine and a sonnet to ponder.
                    </p>
                <br/>
                    <img className='articleImg' src={wine1}/>
                <br/>
                    <p>
                        When at a wine tasting event, one is not frowned upon for spitting wine out. The pink color can range from a pale orange to a vivid near-purple, depending on the varietals used and wine-making techniques. At sea, brutes have raided wine barrels. An inimitable flavor is found in barrels. Research shows that white wines keep lung tissues healthy. In order to increase the alcohol content of their wines, some vintners began adding sugar to the grape must in a process called chaptalization.
                    </p>
                <br/>
                    <p>
                        If a husband found his wife drinking wine in the early Roman times, he was at liberty to kill her. During racking, a wine is moved to a new barrel and separated from sediment in the old one. Thunderbird is a screw-top classic. In response to violent demonstrations by protesters, the French government began regulating the amount of sugar that can be added to wine in the early twentieth century.
                    </p>
                </div>
            </div>
        </>
    )
}
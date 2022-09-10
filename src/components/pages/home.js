import React from 'react';

import dougAndDeb from '../assets/img/douganddeb.jpg'
import winery from '../assets/img/winery.jpg'

//Include information about our locations, partners, staff and general information on wineclub and winery
export default function Home() {
    return(
        <>
            <div class='bannerContainer'>
                <img class='banner' src={winery}/>
            </div>

            <div class='content'>
                <p class='header'>Welcome to</p>
                {/* replace with img of titleText */}
                <h1 class='title'>Chateau Faire Le Pont</h1>
                <div class='textWall'>
                    <p>
                        Wine is often served with dinner. Young red wines may require several hours to aerate – if there's still any left. The classic profile of Cabernet Sauvignon tends to be full-bodied with high tannins and noticeable acidity that contributes to the wine's aging potential. Acidity is a key element in a wine's longevity. Bouquet refers to wine's aroma.
                    </p>

                    <p>
                        The world's oldest person – at one hundred twenty-two – attributed her longevity to a diet of olive oil, port wine and chocolate. Chinon is a town in France renowned for its winemaking.
                    </p>

                    <p>
                        The concept of foie gras begs a brash blanc. When at a wine tasting event, one is not frowned upon for spitting wine out. Chenin blanc boasts a bouquet of fresh pears, saffron, jasmine, ginger, and quince. Toasting was originally the practice of dropping toasted bread into wine to temper excessive acidity. Younger grapes can instill herbaceous notes on the nose.
                    </p>
                </div>

                <img src={dougAndDeb}/>

                <h1 class='header'>About Ourselves</h1>
                <div class='textWall'>
                    <p>
                        Wine grapes grow almost exclusively between 30 and 50 degrees latitude north and south of the equator. The world's oldest bottle of wine is over 1600 years old and can be found at a museum in Germany. In California, the main stylistic difference in Cabernet Sauvignon is between hillside / mountain vineyards and those on flatter terrain like valley floors. The Romans named Sangiovese after the blood of Jupiter; that must have been some hangover. Rotten sémillon grapes are the secret to Sauternes.
                    </p>

                    <p>
                        In order to increase the alcohol content of their wines, some vintners began adding sugar to the grape must in a process called chaptalization. The word "sauvignon" is believed to be derived from the French sauvage meaning "wild." More? A grape in the glass is worth two on the vine. Well-regarded sparkling wines include Espumante from Portugal, and Asti from Italy. Intense hatred of wine is called oenophobia. So many organic compounds are in wine.
                    </p>

                    <p>
                        The term meritage is a blend of merit and heritage, and usually describes blended California wines. Women have a higher fat content than men. What does this have to do with wine? Because fat doesn't absorb alcohol, women get drunk faster. Fruity flavors, with aromas of rose petals, peaches, and allspice. Sauvignon blanc is light, grassy, and herbaceous. Burgundy is the definition of a strong red. Loamy soils, which are usually preferred for growing most plants, actually produce rather flavorless wines.
                    </p>

                    <p>
                        The host of a dinner should take the first sip of wine to assure his guests it is not poisoned. A botrytized wine is made using grapes that have been allowed to become mouldy. How do you hold a wine glass? There is a right and a wrong way. Winemakers refer to screw caps as Stelvin enclosures, because it sounds better than "lid."
                    </p>

                    <p>
                        If a husband found his wife drinking wine in the early Roman times, he was at liberty to kill her. A good wine will have a lengthy aftertaste. Wine, women, and song – not necessarily in that order. Pursing your lips and inhaling some air while the wine is still on your palate is also a nice way to spread the more complex flavors through your sinuses. Grand Cru wines are produced from the small number of the best vineyard sites in the Côte d'Or. Research shows that white wines keep lung tissues healthy. Sulfites are found in nearly all wines, produced by the yeast during fermentation.
                    </p>

                    <p>
                        Is wine vegan? Not if it uses gelatin in the clarification process. A wine has legs if it sticks to the inside of the glass when swirled. Sparkling reds include Lambrusco, from Italy, and Brachetto D'Acqui. The aftertaste, or "finish," is the primary factor in judging the quality and character of wine. Young red wines may require several hours to aerate – if there's still any left. The first stage of wine tasting is looking over the appearance of the wine. Gulp.
                    </p>

                    <p>
                        Dry yet sweet whites complement fish, chicken and pork dishes. Some wines are made from rotting grapes: Botrytis, or noble rot, makes good dessert wine. Younger grapes can instill herbaceous notes on the nose.
                    </p>
                </div>
            </div>
        </>
    )
}
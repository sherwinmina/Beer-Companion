import React, { Component } from 'react'

const BeerStyle  = () => {
    return <div>
      <img style={{width: '100%', paddingTop:'50px'}} src={require('../../../../images/beertaxonomy.png')} alt=""/>
        <p>
          As a generic word, beer includes every style of fermented malt
          beverage, including ales and lagers and all the individual and
          hybrid styles that fall under those headings. Within the realm of
          major beer categories, you find some truly special brews, such as
          real ale, barrel-aged and wood-aged beer, extreme beer, organic
          beer, gluten-free beer, and kosher beer. These kinds of beers
          don’t represent new or different beer styles, per se; rather, they
          represent different ways of making and presenting beer.
        </p>
        <h5>ALES vs. LAGERS</h5>
        <p>
          The two major classifications of beer are ale and lager. Every
          beer enthusiast should know some basic facts about these
          classifications:
        </p>
        <li>
          Ales are the ancient types of beer that date back to antiquity;
          lager beers are relatively new (only several hundred years old).
        </li>
        <li>
          Ales are fermented at relatively warm temperatures for short
          periods of time, while lagers are cold fermented for longer
          periods of time.
        </li>
        <li>
          Ales are fermented with top-fermenting yeasts (the yeasts float on
          top of the beer during fermentation), while lagers are fermented
          with bottom-fermenting yeasts (the yeasts sink to the bottom of
          the beer during fermentation).
        </li>

        <p>
          Within the ale and lager classifications, major beer style
          categories include Pale Ales and Brown Ales (in the ale family)
          and Pilsners and Dark Lagers (in the lager family). And the
          majority of major beer style categories include several different
          beer sub-styles. Here are just two examples of how this beer
          hierarchy plays out; many others are similar to these.
        </p>

        <h5>HYBRID AND SPECIALTY BEERS</h5>
        <p>
          In addition to the two major beer classifications (ales and
          lagers), a third beer classification that’s an amalgam (more or
          less) of the first two is hybrid beer. Hybrid beers cross over ale
          and lager style guidelines. A beer fermented at cold temperatures,
          using an ale yeast, is an example of a hybrid; likewise for a beer
          that’s warm fermented, using lager yeast. Specialty beers, on the
          other hand, are practically limitless. This unofficial style of
          beer covers a very wide range of brews that are hard to define,
          much less regulate. Typically, specialty beers are brewed to a
          classic style (such as Porter or Weizenbier) but with some new
          flavor added; some are made from unusual foods that are fermented.
          Guidelines are useless, and brewing anarchy rules the brewhouse.
          The rules-be-damned attitude is what makes specialty beers so fun
          to brew and drink.
        </p>
      </div>;
}

export default BeerStyle;


import React from 'react'

const Brew = ()  =>{
  return <div>
      <img style={styles.image} src={require('../../../../images/brewing-process.png')} alt="" />

      <h5>Water</h5>
      <p>
        Pure water is essential to good beer – and brewers pay scrupulous
        attention to the source and purification of their brewing water. The
        water used in brewing is purified to rigidly set standards. If it
        doesn’t have the proper calcium or acidic content for maximum activity
        of the enzymes in the mash, it must be brought up to that standard.
      </p>
      <h5>Malt</h5>
      <p>
        To make malt, grain is first allowed to germinate. It’s then dried in
        a kiln or often roasted. This germination process creates enzymes that
        convert the grain’s starch into sugar. Depending on how long the
        roasting process takes, the malt will darken in colour. This is what
        influences the colour and flavour of the beer.
      </p>
      <h5>Mashing</h5>
      <p>
        Now malt is added to heated, purified water and, through a carefully
        controlled time and temperature process, the malt enzymes break down
        the starch to sugar, and the complex proteins of the malt break down
        to simpler nitrogen compounds. The mashing takes place in a large
        round tank called a "mash mier" or "mash tun", and requires careful
        temperature control. Depending on the type of beer desired, the malt
        is then supplemented by starch from other cereals such as corn, wheat
        or rice.
      </p>
      <h5>Lautering</h5>
      <p>
        The mash is transferred to a straining or "lautering" vessel, usually
        cylindrical, with a slotted false bottom two to five cm above the true
        bottom. The liquid extract drains through the false bottom and is run
        off to the brew kettle. This extract, a sugar solution called "wort",
        is not yet beer. Water is "sparged" or sprayed through the grains to
        wash out as much of the extract as possible. The "spent grains" are
        removed and sold for cattle feed.
      </p>
      <h5>hop separation & cooling</h5>
      <p>
        After the beer has taken on the flavour of the hops, the wort then
        goes to the hot wort tank. It’s then cooled, usually in an apparatus
        called a plate cooler. As the wort and a coolant flow past each other
        on opposite sides of stainless steel plates, the temperature of the
        wort drops from boiling to about 50°F to 60°F (a drop of more than
        150°F) in a few seconds.
      </p>
      <h5>Fermentation</h5>
      <p>
        This is where all the magic happens – where the yeast (those living,
        single-cell fungi) break down the sugar in the wort to carbon dioxide
        and alcohol. It’s also where a lot of the vital flavour occurs. In all
        modern breweries, elaborate precautions are taken to ensure that the
        yeast remains pure and unchanged. Through the use of pure yeast
        culture plants, a particular beer flavour can be maintained year after
        year. During fermentation, which lasts about seven to 10 days, the
        yeast multiplies until a creamy, frothy head appears on top of the
        brew. When the fermentation is over, the yeast is removed. At last, we
        have beer!
      </p>
    </div>
  
}

const styles={
  image: {
    width: '100%',
    paddingTop: '50px'
  }
}

export default Brew
import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Favorite Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
            src="images/facilita1.png"
            text="Real time event management"
            projectname='FaciLita'
            path='/'
            />


            <CardItem
            src="images/devtav2.png"
            text="Recruit developers for projects"
            label='Dev-Tavern'
            path='/'
            />

            <CardItem
            src="images/bako1.png"
            text="Build your personal game library"
            label='GAMEBAKO'
            path='/'
            />



          </ul>
        </div>
      </div>


<div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
            src="images/wl1.png"
            text="Save movies to your watchlist"
            label='Watch Later'
            path='/'
            />



            <CardItem
            src="images/pawnpin1.png"
            text="Share your favorite images and sites"
            label='PawnPin'
            path='/'
            />


            <CardItem
            src="images/wawrite1.png"
            text="Buy Japanese stationery"
            label='Wa Write'
            path='/'
            />


          </ul>
        </div>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
            src="images/gbpx1.png"
            text="Interactive PokeDex"
            label='GBPX'
            path='/'
            />


            <CardItem
            src="images/ec1.png"
            text="Customize cocktail recipes"
            label='Edo Cocktails'
            path='/'
            />

            <CardItem
            src="images/splashr2.png"
            text="Share short messages with friends"
            label='Splashr'
            path='/'
            />

          </ul>
        </div>
      </div>






    </div>
    )
}

export default Cards

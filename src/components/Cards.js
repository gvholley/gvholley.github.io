import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
            src="images/facilita1.png"
            text="FaciLita is an event management tool that helps organizers manage questions and comments. The app gathers data from users with accounts, allowing them to analyze statistics in order to create more relevant events in the future. Attendees can join events via a code, allowing them to chat, ask questions, and leave feedback. Questions use an upvote system, assisting event organizers in knowing the most important questions to answer. This project was created over a two-week span in a team of three including myself."
            label='FaciLita'
            path='/'
            />


            <CardItem
            src="images/devtav1.png"
            text="Dev-Tavern helps game developers connect with each other and recruit contributors to projects. Users can create their projects and list what kind of developer they are looking for. Users can join other people's projects, and are notified via their profile whether or not they were accepted into a project. Projects can be found with keywords via the search engine, or through tags. Dev-Tavern was created in one week with the same team as FaciLita."
            label='Dev-Tavern'
            path='/'
            />



          </ul>
        </div>
      </div>


<div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>



            <CardItem
            src="images/ec1.png"
            text="Create cocktails by choosing ingredients and doses. You can also customize your cocktail's name and upload a picture."
            label='Edo Cocktails'
            path='/'
            />


            <CardItem
            src="images/splashr2.png"
            text="Splashr is a simplified Twitter clone with a fun fish theme. Post tweets to the main channel, and view others' profile pages to see a list of only their tweets."
            label='Splashr'
            path='/'
            />


          </ul>
        </div>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
            src="images/pawnpin1.png"
            text="Post interesting images with descriptions and a link to the source, similar to Pinterest. Users can upvote posts they like. You can also see the pins shift around if you change the size of your browser screen!"
            label='PawnPin'
            path='/'
            />


            <CardItem
            src="images/wawrite1.png"
            text="Wa Write is an eCommerce store selling Japanese stationery. Items are tagged, making it easy to find similar products. Wa Write uses Stripe API integration to make payments."
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
            text="GBPX is a PokeDex showcasing the first 251 Pokemon found in the original Game Boy titles. Clicking on the name brings you to their Bulbapedia profile page, while clicking elsewhere flips the card to reveal their sprite and ability. The data is pulled from PokeAPI."
            label='GBPX'
            path='/'
            />


            <CardItem
            src="images/wl1.png"
            text="Search through movies to see their posters and add them to your watchlist for later. Your choices save, and you can remove movies from your watchlist after viewing them."
            label='Watch Later'
            path='/'
            />


          </ul>
        </div>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
            src="images/bako1.png"
            text="Build your personal game library by searching for games. Add the games you own to your library, or remove the ones you no longer have. Users can see other's profiles to view thier collections."
            label='GAMEBAKO'
            path='/'
            />


            <CardItem
            src="images/kakaw2.png"
            text="Kakaw is a Halloween themed Twitter clone based on Michael Hartl's Rails tutorials. Users can make posts, follow users, and save their favorites."
            label='Kakaw'
            path='/'
            />


          </ul>
        </div>
      </div>



    </div>
    )
}

export default Cards

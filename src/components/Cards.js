import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
            src="images/facilita1.png"
            text="FaciLita is an event management tool that helps organizers manage questions and comments. The app gathers data from users with accounts, allowing them to analyze statistics in order to create more relevant events in the future. Attendees can join events via a code, allowing them to chat, ask questions, and leave feedback. Questions use an upvote system, assisting event organizers in knowing the most important questions to answer. This project was created over a two-week span in a team of three including myself."
            label='Grant'
            path='/'
            />

            <CardItem
            src="images/grantbanner.png"
            text="Testing2"
            label='Grant2'
            path='/'
            />

            <CardItem
            src="images/grantbanner.png"
            text="testing3"
            label='Grant3'
            path='/'
            />



          </ul>
        </div>
      </div>
    </div>
    )
}

export default Cards

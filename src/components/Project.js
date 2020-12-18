import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './Project.css';

function Project() {
  return (
    <div className="container">
      <div className="row projects">
        <div className="col-5">
          <img src="images/facilita1.png" className="proimg" alt="fc1"/>
        </div>
        <div className="project_description col-7">
          <h2>FaciLita</h2>
          <img src="images/code.png" alt="code" className="code" />
          <p>FaciLita is an event management tool that helps organizers manage questions
          and comments. The app gathers data from users with accounts, allowing them to analyze statistics
          in order to create more relevant events in the future. Attendees can join events via a code,
          allowing them to chat, ask questions, and leave feedback. Questions use an upvote system,
          assisting event organizers in knowing the most important questions to answer.

          This project was created over a two-week span in a team of three including myself.</p>
        </div>
      </div>
    </div>




  )
};

export default Project;

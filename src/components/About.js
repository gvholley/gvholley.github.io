import React from 'react';
import { Container } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import './About.css';


function About() {
  return (
<div className="container about-container">
<h1 className="skill_header">Skills</h1>
  <div className="row about">
    <div className="col-xs-12 col-sm-6 col-md-3 about_desc">
      <div className="card about_card">
        <img src="images/fe.png" alt="picture description" width="100"/>
        <h2>Front End</h2>
        <p>HTML/CSS, JavaScript, and React. I love making sites look amazing.</p>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 about_desc">
      <div class="card">
    <img src="images/be.png" alt="picture description" width="100"/>
    <h2>Back End</h2>
    <p>Ruby on Rails, PostgresQL, AWS, Firebase, and constantly growing.</p>
</div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-3 about_desc">
      <div class="card">
    <img src="images/ux.png" alt="picture description" width="100"/>
    <h2>UX/UI</h2>
    <p>I aim to make sites visually interesting and user friendly.</p>
</div>
    </div>

  </div>
</div>

  );
}

export default About;

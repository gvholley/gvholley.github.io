import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <h1>Grant Holley</h1>
      <p>Portfolio</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline"
        buttonSize="btn--large">
        GET STARTED
        </Button>

        <Button className="btns" buttonStyle="btn--primary"
        buttonSize="btn--large">
        NEW BUTTON
        </Button>
      </div>
    </div>
  )
}

export default Hero;

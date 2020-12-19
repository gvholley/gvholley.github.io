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
          <p>Manage questions and comments during live events. Data is gathered from users, allowing
          event planners to make informed decisions.</p>
        </div>
          <div className="projectbtn">
        <a href="https://faci-lita.herokuapp.com/" class="btn btn-site">View Site</a>
          </div>
      </div>



      <div className="row projects">
        <div className="col-5">
          <img src="images/facilita1.png" className="proimg" alt="fc1"/>
        </div>
        <div className="project_description col-7">
          <h2>FaciLita</h2>
          <img src="images/code.png" alt="code" className="code" />
          <p>Manage questions and comments during live events. Data is gathered from users, allowing
          event planners to make informed decisions.</p>
        </div>
          <div className="projectbtn">
        <a href="https://faci-lita.herokuapp.com/" class="btn btn-site">View Site</a>
          </div>
      </div>





    </div>




  )
};

export default Project;

import React from 'react';
import { Container } from 'react-bootstrap';
import './Project.css';

function Project() {
  return (
    <div className="container">
      <h1 className="project_header">My Favorite Projects</h1>
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
          <img src="images/devtav2.png" className="proimg" alt="fc1"/>
        </div>
        <div className="project_description col-7">
          <h2>Dev-Tavern</h2>
          <img src="images/code.png" alt="code" className="code" />
          <p>Create profile pages for your projects to recruit developers and collaborators.
          Developers can search for projects that meet their skills</p>
        </div>
          <div className="projectbtn">
        <a href="http://dev-tavern.herokuapp.com/" class="btn btn-site">View Site</a>
          </div>
      </div>

      <div className="row projects">
        <div className="col-5">
          <img src="images/bako1.png" className="proimg" alt="fc1"/>
        </div>
        <div className="project_description col-7">
          <h2>GAMEBAKO</h2>
          <img src="images/code.png" alt="code" className="code" />
          <p>Search through thousands of games to make your gaming library.
          Add or remove them from your profile, and view other user's games.</p>
        </div>
          <div className="projectbtn">
        <a href="https://gamebako.herokuapp.com/" class="btn btn-site">View Site</a>
          </div>
      </div>

      <div className="row projects">
        <div className="col-5">
          <img src="images/wl1.png" className="proimg" alt="fc1"/>
        </div>
        <div className="project_description col-7">
          <h2>Watch Later</h2>
          <img src="images/reactcode.png" alt="code" className="code" />
          <p>Search through movies and add them to your watchlist
          for later. Your choices save, and you can remove movies after viewing them.</p>
        </div>
          <div className="projectbtn">
        <a href="https://gvholley.github.io/watchlater/" class="btn btn-site">View Site</a>
          </div>
      </div>

      <div className="row projects">
        <div className="col-5">
          <img src="images/pawnpin1.png" className="proimg" alt="fc1"/>
        </div>
        <div className="project_description col-7">
          <h2>PawnPin</h2>
          <img src="images/code.png" alt="code" className="code" />
          <p>Share your favorite images and websites by posting them to a digital
          pinboard. Click on a picture to learn more details and see the source.</p>
        </div>
          <div className="projectbtn">
        <a href="https://pawnpin.herokuapp.com/" class="btn btn-site">View Site</a>
          </div>
      </div>

      <div className="row projects">
        <div className="col-5">
          <img src="images/wawrite1.png" className="proimg" alt="fc1"/>
        </div>
        <div className="project_description col-7">
          <h2>Wa Write</h2>
          <img src="images/code.png" alt="code" className="code" />
          <p>Shop for Japanese stationery on this eCommerce store. Wa Write is
          integrated with Stripe for real time credit card payments.</p>
        </div>
          <div className="projectbtn">
        <a href="https://wawrite.herokuapp.com/" class="btn btn-site">View Site</a>
          </div>
      </div>

      <div className="row projects">
        <div className="col-5">
          <img src="images/ec1.png" className="proimg" alt="fc1"/>
        </div>
        <div className="project_description col-7">
          <h2>Edo Cocktails</h2>
          <img src="images/code.png" alt="code" className="code" />
          <p>Customize unique cocktails by adding ingredients along with doses. Upload images to show
          off your creations to others.</p>
        </div>
          <div className="projectbtn">
        <a href="http://edococktails.herokuapp.com/" class="btn btn-site">View Site</a>
          </div>
      </div>

      <div className="row projects">
        <div className="col-5">
          <img src="images/gbpx2.png" className="proimg" alt="fc1"/>
        </div>
        <div className="project_description col-7">
          <h2>GBPX</h2>
          <img src="images/code.png" alt="code" className="code" />
          <p>A visual Pokemon dictionary highlighting the first 251 creatures. Flip
          cards to see their in game pixel art and special ability.</p>
        </div>
          <div className="projectbtn">
        <a href="https://gbpx.herokuapp.com/" class="btn btn-site">View Site</a>
          </div>
      </div>


    </div>




  )
};

export default Project;

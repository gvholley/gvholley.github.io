import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Hero from '../Hero';
import Cards from '../Cards';
import Footer from '../Footer';
import ShowcaseCardDemo from '../Matcard';
import About from '../About';
import Project from '../Project';


function Home() {
  return (
    <React.Fragment>

      <Navbar />
      <Hero />
      <Project />
      <Footer />

    </React.Fragment>
  );
}

export default Home;

import React from 'react';
import '../../App.css';
import Hero from '../Hero';
import Cards from '../Cards';
import Footer from '../Footer';
import ShowcaseCardDemo from '../Matcard';


function Home() {
  return (
    <React.Fragment>

      <Hero />
      <Cards />
      <Footer />

    </React.Fragment>
  );
}

export default Home;

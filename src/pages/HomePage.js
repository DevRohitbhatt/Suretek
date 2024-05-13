import React from 'react';
import Layout from './../components/Layout';
import '../scss/pages/HomePage.scss';

const HomePage = () => {
  return (
    <Layout>
      <div className="home-page">
        <h2 className="heading mb-2">Don't Just Dream, Achieve!</h2>
        <p className="paragraph">eaconomy™ is your access to the right leadership, technology and strategies to help you design the future you want. 
          Whether it is learning how to make more money in your current situation, or learning how to free up more of your time, eaconomy™ is the solution!</p>
        

        <div className="frame-div center">
          <iframe src="https://player.vimeo.com/video/400030031?h=2403acffc4" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" data-ready="true"></iframe>
        </div>

        <hr className="gn-line mb-3" />
        <hr className="gn-line mb-3" />


        <p className="pg-make">MAKE 2024 A YEAR OF GROWTH</p>
        

      </div>
    </Layout>
  );
};

export default HomePage;

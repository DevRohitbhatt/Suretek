import React from 'react';
import Layout from './../components/Layout';
import { Grid } from '@mui/material';
import '../scss/pages/Eminus.scss';

const Eminus = () => {
  return (
    <Layout className="full-width-layout">
      <div className="eminus-page">
       
        <div className="banner center">
            <div className='img-div'><img src='https://cdn.raveretailer.com/1C4E04E133/2021/11/images/GSR_61a4b16a344671878861638186874.png'/></div>
            <div className='txt-div'><h2>START LETTING YOUR MONEY WORK FOR YOU<br/>BY LEVERAGING OUR SIMPLE TECHNOLOGY</h2></div>
            <div className='banner-buy-now'><a href="/enrollment">BUY NOW</a></div>        
        </div>

        <div className='content-container primary-width'>
            <Grid container >                        
                <Grid item xs={12} md={6} className='grid-lf'>
                    <div><img src="https://cdn.raveretailer.com/1C4E04E133/2021/11/images/GSR_61a4b6526462d5053471638188130.png"/></div>              
                </Grid>
                <Grid item xs={12} md={6} className='grid-rg'>
                    <h1><strong>Eminus Pro Trader Ideas</strong></h1>
                    <p>Imagine being able to see a professional trader mark up a chart and send you a picture of what they are thinking for a potential trade setup. That’s Eminus. We connect you with our pro traders and let them share with you potential trade ideas. They send out a massive message with a chart drawn up and you can decide if it’s something worth looking into.</p>         
                    
                    <h2><strong>KEY BENEFITS</strong></h2>
                    <ul>
                        <li>• Copy, Paste, & Potentially Profit</li>
                        <li>• Save Time Scanning The Markets</li>
                        <li>• Get Insights From Top Traders Around The World</li>
                        <li>• Get Insights On Automation</li>
                        <li>• Get Trade Ideas And Take Trades Directly On Your Mobile Phone</li>
                    </ul>
                
                </Grid>
            </Grid>
        </div>


        <div className='feature-outer'>
            <div className='primary-width'>
                <Grid container >                        
                    <Grid item xs={12} sm={3} md={3} className='feature'>
                        <div className='circle-inner'>
                            <div className='circle-div'>
                                <div className='circle-inner-div'>
                                    <img src="https://cdn.raveretailer.com/1C4E04E133/2021/11/images/GSR_61a5eb7cca2d21627091638267276.png"/>
                                    <h3>COPY US</h3>
                                </div>
                            </div>
                        </div>              
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} className='feature'>
                        <div className='circle-inner'>
                            <div className='circle-div'>
                                <div className='circle-inner-div'>
                                    <img src="https://cdn.raveretailer.com/1C4E04E133/2021/11/images/GSR_61a5eb76b47b02034671638267270.png"/>
                                    <h3>TAKES 30 SECS</h3>
                                </div>
                            </div>
                        </div>              
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} className='feature'>
                        <div className='circle-inner'>
                            <div className='circle-div'>
                                <div className='circle-inner-div'>
                                    <img src="https://cdn.raveretailer.com/1C4E04E133/2021/11/images/GSR_61a5eb78d713b5263491638267272.png"/>
                                    <h3>MARKET FORCASTS</h3>
                                </div>
                            </div>
                        </div>              
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} className='feature'>
                        <div className='circle-inner'>
                            <div className='circle-div'>
                                <div className='circle-inner-div'>
                                    <img src="https://cdn.raveretailer.com/1C4E04E133/2021/11/images/GSR_61a5eb7b11f272379271638267275.png"/>
                                    <h3>RECEIVE AN ALERT ON YOUR PHONE</h3>
                                </div>
                            </div>
                        </div>              
                    </Grid>
                </Grid>
            </div>
        </div>



      </div>
    </Layout>
  );
};

export default Eminus;
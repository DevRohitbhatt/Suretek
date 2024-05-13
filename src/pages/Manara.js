import React from 'react';
import Layout from './../components/Layout';
import { Grid } from '@mui/material';
import '../scss/pages/Manara.scss';

const Manara = () => {
  return (
    <Layout className="full-width-layout">
      <div className="manara-page">
       
        <div className="banner center">
            <div className='img-div'><img src='https://cdn.raveretailer.com/1C4E04E133/2021/12/images/GSR_61b1ada0e240b7761301639037872.png'/></div>
            <div className='txt-div'><h2>THE ULTIMATE A.I. MANUAL TRADING SOFTWARE<br/>THAT GIVES YOU THE ABILITY TO MINIMIZE YOUR RISK</h2></div>
            <div className='banner-buy-now'><a href="/enrollment">BUY NOW</a></div>        
        </div>

        <div className='content-container primary-width'>
            <Grid container >                        
                <Grid item xs={12} md={6} className='grid-lf'>
                    <div><img src="https://cdn.raveretailer.com/1C4E04E133/2021/12/images/GSR_61b1c7dabb29b2394191639044586.png"/></div>              
                </Grid>
                <Grid item xs={12} md={6} className='grid-rg'>
                    <h1><strong>Manara</strong></h1>
                    <p>Artificial Intelligence is disrupting the trading industry. You can leverage this dynamic A.I. software by choosing the trading pair of your choice, technical analysis pattern , and timeframe. Then allow Manara™ to do what it does best and scan the market place with no emotion, just a pure machine you can leverage that does all the complicated stuff. Once it finds a setup it will give you the risk to reward ratio and then you will ultimately decide if you want to enter the trade or not.</p>         
                    <h2><strong>KEY BENEFITS</strong></h2>

                    <ul>
                        <li>• Web Based Tool</li>
                        <li>• Works With Any Trading Style</li>
                        <li>• Save Time Scanning The Markets</li>
                        <li>• Get Insights On Automation</li>
                        <li>• Get Trade Ideas And Take Trades Directly On Your Mobile Phone, Tablet, or Computer</li>
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
                                    <img src="https://cdn.raveretailer.com/1C4E04E133/2021/12/images/GSR_61b1ca1c85580925251639045164.png"/>
                                    <h3>A.I. POWERED</h3>
                                </div>
                            </div>
                        </div>              
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} className='feature'>
                        <div className='circle-inner'>
                            <div className='circle-div'>
                                <div className='circle-inner-div'>
                                    <img src="https://cdn.raveretailer.com/1C4E04E133/2021/12/images/GSR_61b1ca1ee7dcb7680761639045166.png"/>
                                    <h3>NO EMOTION</h3>
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

export default Manara;
import React from 'react';
import WithoutHeaderLayout from './../components/WithoutHeaderLayout';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import '../scss/pages/EnrollmentKit.scss';


export default function EnrollmentKit(){

    const navigate = useNavigate();

    const fnNavigate = () => {
        navigate("/addons");
    }

    return(
        <WithoutHeaderLayout>
            <div className="enrollment-kit-page">
                <div className="center"><img src="https://cdn.raveretailer.com/1C4E04E133/2023/07/images/GSR_64ac0ee918ea32843031689001209.png" className="logo-2"/></div>


                <div className="top-bar">
                    <div className="circle-div first-circle">
                        <span className="circle"></span>
                        <span className="txt-span">SIGN UP</span>
                    </div>

                    <div className="circle-div second-circle">
                        <span className="circle active"></span>
                        <span className="txt-span">ENROLLMENT KITS</span>
                    </div>

                    <div className="circle-div third-circle">
                        <span className="circle"></span>
                        <span className="txt-span">REVIEW</span>
                    </div>                
                </div>

                <h2 className="title-h2 mt-10 mb-5">ENROLLMENT KITS</h2>

                <p className="center mb-2"><a href="/addons"  className='magenta'>Continue</a></p>


                <div className="kits-div">
                
                
                    <Grid container className="kit mb-2">
                        <Grid item xs={6} md={6} >
                            <label className="mb-2">ELITE PACK</label>
                        </Grid>

                        <Grid item xs={6} md={6} >
                            <p className="align-right mb-2">$149.00</p>
                        </Grid>

                        <Grid item xs={3} md={3} className="left-grid">
                             
                            <div>
                                <img src="https://cdn.raveretailer.com/1C4E04E133/2023/11/images/1000x1000/GSR_655755d4d08d18009751700226020.png"/>
                            </div>
                        </Grid>
                        <Grid item xs={9} md={9} className="right-grid">                            
                            <p className="pg mb-2"><strong>Eaconomy Calibrate Academy :</strong> ECA is our full forex academy with live trading sissions and group coaching(Available in English, Spanish & Arabic)</p>
                            <p className="pg mb-2"><strong>Eminus :</strong> Pro trader ideas copy, paste and potentials profit</p>
                            <p className="pg mb-2"><strong>Manara : </strong> Dynamic artifical intelligence-powered forex and cryptocurrency alerts</p>
                            <p className="pg mb-2"><strong>Hercules : </strong> The ultimete dollar cost average strategy for purchasing cryptocurrency at the lowest low. By leveraging artificial intiligence that scans and analyzes past and current market data.</p>
                            <p className="pg mb-2"><strong>Coinzoom : </strong> Crypto wallet</p>
                            <p className="pg mb-2"><strong>*First month is $149 and then $99 every month forward</strong></p>

                            <div className="align-right">
                                <button className="theme-btn">Add to Cart <ArrowRightAltIcon/></button>
                            </div>
                        </Grid>
                    </Grid>


                
                    <Grid container className="kit mb-2">

                        <Grid item xs={6} md={6}>
                            <label className="mb-2">DEFIVRSE</label> 
                        </Grid>

                        <Grid item xs={6} md={6}>
                            <p className="align-right mb-2">$149.00</p>
                        </Grid>


                        <Grid item xs={3} md={3} className="left-grid">
                            
                            <div>
                                <img src="https://cdn.raveretailer.com/1C4E04E133/2023/12/images/1000x1000/GSR_6572bf08973af8696161702022424.jpg"/>
                            </div>
                        </Grid>
                        <Grid item xs={9} md={9} className="right-grid">
                            
                            <p className="pg mb-2"><strong>Expert Ideas and Strategies:</strong> Access a treasure trove of expert insights, ideas, and strategies that will empower you to make informed decisions and navigate the crypto markets with confidence.</p>
                            <p className="pg mb-2"><strong>Chart Analysis & Drawings:</strong> Learn the art of chart analysis and technical drawing. Understand how to interpret price trends, patterns, and indicators to make well-timed trading decisions.</p>
                            <p className="pg mb-2"><strong>Livestreaming Education & Updates: </strong>  Stay ahead of the curve with live educational sessions and real-time updates from seasoned crypto professionals. Participate, ask questions, and keep your finger on the pulse of the crypto space.</p>
                            <div className="align-right">
                                <button className="theme-btn">Add to Cart <ArrowRightAltIcon/></button>
                            </div>
                        </Grid>
                    </Grid>
                
                    <Grid container className="kit mb-2">

                        <Grid item xs={6} md={6}>
                            <label className="mb-2">ELITE PRO PACK</label> 
                        </Grid>

                        <Grid item xs={6} md={6} >
                            <p className="align-right mb-2">$235.00</p>
                        </Grid>


                        <Grid item xs={3} md={3} className="left-grid">
                            
                            <div>
                                <img src="https://cdn.raveretailer.com/1C4E04E133/2023/11/images/1000x1000/GSR_655755d4d08d18009751700226020.png"/>
                            </div>
                        </Grid>
                        <Grid item xs={9} md={9} className="right-grid">                            
                            <p className="pg mb-2"><strong>Eaconomy Calibrate Academy:</strong> ECA is our full forex academy with live trading sissions and group coaching(Available in English, Spanish & Arabic)</p>
                            <p className="pg mb-2"><strong>Eminus:</strong> Pro trader ideas copy, paste and potentials profit</p>
                            <p className="pg mb-2"><strong>Manara: </strong> Dynamic artifical intelligence-powered forex and cryptocurrency alerts</p>
                            <p className="pg mb-2"><strong>Hercules: </strong> The ultimete dollar cost average strategy for purchasing cryptocurrency at the lowest low. By leveraging artificial intiligence that scans and analyzes past and current market data.</p>
                            <p className="pg mb-2"><strong>Coinzoom: </strong> Crypto wallet</p>
                            <p className="pg mb-2"><strong>Skie: </strong> Free Cloud VPS</p>
                            <p className="pg mb-2"><strong>Aithena : </strong> A fierce warrior goddess that will battle for every profitable trade. Using our proprietary A.I. Algorithm she will find you the best trade possible while focusing on capital preservation and growth.</p>
                            <p className="pg mb-2"><strong>*$235 first month and then $149 every month forward</strong></p>

                            <div className="align-right">
                                <button className="theme-btn">Add to Cart <ArrowRightAltIcon/></button>
                            </div>
                        </Grid>
                    </Grid>
                
                

                </div>

                <p className="center mt-4 mb-10"><a href="/addons"  className='magenta'>Continue</a></p>



            </div>
        </WithoutHeaderLayout>
    );


}
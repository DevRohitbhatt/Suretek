import { Grid } from '@mui/material';
import React from 'react';
import Layout from './../components/Layout';
import '../scss/pages/WhyEaconomy.scss';

export default function WhyEaconomy() {
    return (
        <Layout>
            <div className='why-eaconomy-page'>
                <Grid container>

                    <Grid item xs={12} className='logo-grid'>
                        <img src="https://cdn.raveretailer.com/1C4E04E133/2021/10/images/GSR_61574ee8b8aae2233121633115384.png" alt='logo'/>
                        <p>
                            <span>
                                <span>eaconomy</span>
                            </span><br />
                            <em><span><strong><span>Life. Elevated.</span></strong></span></em>
                        </p>
                    </Grid>

                    <Grid item xs={12} className='title-grid'>
                        <p><span><strong>Who is eaconomy™?</strong></span></p>
                    </Grid>

                    <Grid item xs={12}>
                        <div className='content-grid'>
                            <div><img src="https://cdn.raveretailer.com/1C4E04E133/2021/10/images/GSR_61574fd2030b42669641633115618.png" alt='whyEaconomy' /></div>
                            <p><span>We are a technology company with a passion and focused interest in innovations and education that will benefit people today and for years to come. Skills learned in trading and wealth management can be passed on from generation to generation and provide additional financial security in families around the world.</span></p>
                            <p><span>The company is comprised of experienced professionals in the IT, financial, media, personal development and marketing industries. We are more than a company selling a product or a service, we are a community in which we want to see people grow, develop and achieve dreams and goals that they thought were not possible.</span></p>
                            <p><span>We are based in California and yet operate globally with affiliates in over 50 countries. We do operate as a direct marketing company, relying on the talents and skills of our affiliates to share the company’s vision, and rewarding affiliates for their leadership and efforts.</span></p>
                        </div>
                        
                    </Grid>
                    
                </Grid>
            </div>
        </Layout>
    );
}

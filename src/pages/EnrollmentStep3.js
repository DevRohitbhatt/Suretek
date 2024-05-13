import React from 'react';
import WithoutHeaderLayout from './../components/WithoutHeaderLayout';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Month, Day, Year, Country, State} from '../components/Select';
import '../scss/pages/EnrollmentStep3.scss';


export default function EnrollmentStep3(){

    const navigate = useNavigate();

    const fnNavigate = () => {
        navigate("/enrollment-kit");
    }

    const InputText = (props) => <input type={props.type?props.type:'text'} name={props.name} placeholder={props.placeholder} className="inp-text"/>
    

    return(
        <WithoutHeaderLayout>
            <div className="enrollment-step3-page">
                <div><img src="https://cdn.raveretailer.com/1C4E04E133/2023/07/images/GSR_64ac0ee918ea32843031689001209.png" className="logo-2"/></div>


                <div className="top-bar">
                    <div className="circle-div first-circle">
                        <span className="circle active"></span>
                        <span className="txt-span">SIGN UP</span>
                    </div>

                    <div className="circle-div second-circle">
                        <span className="circle"></span>
                        <span className="txt-span">ENROLLMENT KITS</span>
                    </div>

                    <div className="circle-div third-circle">
                        <span className="circle"></span>
                        <span className="txt-span">REVIEW</span>
                    </div>                
                </div>

                <h2 className="title-h2 mt-10 mb-3">UPGRADE</h2>

                <h4 className="title-h4 mb-3">You are upgrading from Pre-Enroll to Affiliate</h4>


                <div className="sign-div">
                    <form onSubmit={fnNavigate}>

                        <div className='info-div'>
                            <p>Your Email: testing12345@gmail.com</p>
                            <p>Enroller: Julio M Lama</p>
                        </div>

                    <Grid container spacing={{ xs: 2, sm: 4, md: 4 }}>
                        
                            
                            <Grid item xs={12} md={6}>
                                <Grid container>
                                    <Grid item xs={6} md={6}>
                                        <span className="span-link">https://eaconomy.com/</span>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <InputText name="username" placeholder="Your Unique Username"/>
                                    </Grid>
                                </Grid>
                                <small className="block align-left">(One You Will Share With Others You Refer)</small>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Grid container>
                                    <Grid item xs={12} md={4}>
                                        <Month name="" cn="month"/>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Day name="" cn="day"/>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Year name="" cn="year"/>
                                    </Grid>
                                </Grid>
                                <small className="block align-left">(Enter Birthday)</small>
                            </Grid>
                        
                            <Grid item xs={12} md={12}>
                                <h3 className="right-line"><span>Billing Address</span><span className="line"></span></h3>  
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <InputText name="address" placeholder="Address"/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <InputText name="address2" placeholder="Address Line 2"/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputText name="city" placeholder="City"/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <InputText name="zip" placeholder="Zip"/>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Country name="country" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <State name="state" />
                            </Grid>
                            
                            <Grid item xs={12} md={12}>
                                <InputText name="phone" placeholder="Phone"/>
                                <small className="block align-left">Please include your country code (+XXX) with your phone number</small>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <label className="block align-left mb-2">
                                    <input type="checkbox"/> <small>I would like to receive emails and sms messages from Eaconomy.</small>
                                </label>
                                <label className="block align-left mb-3">
                                    <input type="checkbox"/> <small>I agree to all contracts including but not limited User Agreement, Terms & Conditions, and Policies & Procedures.</small>
                                </label>
                                <div className="mb-2">
                                    Enroller: Julio M Lama (juliomlama) - <a href='' className='magenta'>Change</a>
                                </div>
                                <button className="btn-next">Next <ArrowRightAltIcon/> </button>
                            </Grid>

                        </Grid>

                    </form>
                </div>





            </div>
        </WithoutHeaderLayout>
    );


}
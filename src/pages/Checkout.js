import React from 'react';
import Layout from './../components/Layout';
import '../scss/pages/Checkout.scss';
import { Grid } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useState } from "react";
import { Month, Day, Year, Country, State} from '../components/Select';

const Checkout = () => {


const [isChange, setIsChange] = useState(false);
const [newAddress, setNewAddress] = useState(false);


const fnChange = () => {
    setIsChange(true);
}


const fnNewAddress = () => {
    setIsChange(false);
    setNewAddress(true);
}



  return (
    <Layout>
        <div className="checkout-page">
            <div className='primary-width'>
                <h3 className='page-title'>Checkout</h3>

                <div className='checkout'>

                    <Grid container  className='grid-row'>                        
                        <Grid item xs={12} md={6} className='shipping'>
                            <div className={`shipping-address ${newAddress?'ds-none':''}`}  >
                                <h4>Shipping address</h4>
                                <p>Test Test</p>
                                <p>123 Main Street</p>
                                <p>Anytown</p>
                                <p>Anytown 12345</p>
                                <p>USA</p>
                                <a href='#' className='change' onClick={fnChange}>Change</a>
                            </div>



                            <div className={`new-address ${newAddress?'':'ds-none'}`}>
                                <h4>Shipping address</h4>
                                <form>
                                    <Grid container className="form-contaner">
                                        <Grid item xs={12} md={6} className='lgrid'>
                                            <input type='text' className="inp-text  mb-2" placeholder='First Name'/>
                                        </Grid>
                                        <Grid item xs={12} md={6} className='rgrid'>
                                            <input type='text' className="inp-text mb-2" placeholder='Last Name'/>
                                        </Grid>

                                        <Grid item xs={12} md={12} >
                                            <Country name="country" />
                                        </Grid>

                                        <Grid item xs={12} md={12} >
                                            <input type='text' className="inp-text mb-2" placeholder='Address'/>
                                        </Grid>

                                        <Grid item xs={12} md={12} >
                                            <input type='text' className="inp-text mb-2" placeholder='Apartment, suite, etc, (optional) '/>
                                        </Grid>

                                        <Grid item xs={12} md={12} >
                                            <input type='text' className="inp-text mb-2" placeholder='Town/City'/>
                                        </Grid>

                                        <Grid item xs={12} md={6} className='lgrid'>
                                            <State name="state" />
                                        </Grid>
                                        <Grid item xs={12} md={6} className='rgrid'>
                                            <input type='text' className="inp-text mb-2" placeholder='Zip code'/>
                                        </Grid>

                                        <Grid item xs={12} md={6} >
                                            <input type="checkbox"/> <label>Set as default</label>
                                        </Grid>
                                        <Grid item xs={12} md={6} >
                                        <div className="align-right">
                                            <button className="theme-btn">Save <ArrowRightAltIcon/></button>
                                        </div>
                                        </Grid>




                                    </Grid>
                                </form>
                                <a href='#' className='change' >Change</a>
                            </div>


                            <div className={`address-contaner ${isChange?'':'ds-none'}`}>
                                <div className='saved-address'>
                                    <h5>Test Test</h5>
                                    <p>123 Main Street</p>
                                    <p>Anytown</p>
                                    <p>Anytown 12345</p>
                                    <p>USA</p>
                                    <div className='btn-div'>
                                        <button className='remove-btn'>Remove</button>
                                        <button className='use-btn'>Use this address</button>
                                    </div>

                                    <span className='location-icon'><LocationOnOutlinedIcon/></span>
                                    <button className='default-btn'>Default</button>
                                </div>

                                <button className='new-address' onClick={fnNewAddress}>Add New Address</button>


                            </div>

                            <div className='shipping-methods'>
                                <h4>Shipping Methods</h4>
                                <div className='shipping-method'>
                                    <input type="radio" />
                                    <label>Standard Shipping</label>
                                </div>
                                <div className='message'>
                                    <p>My gift message to you (optional)</p>
                                    <textarea></textarea>
                                    <p>0/400</p>
                                </div>
                            </div>


                            <div className='payment-info'>
                                <h4>Payment Info</h4>
                                <div className='payments'>
                                    <button className='add-card'>Add Card</button>
                                    <div className='payment-methods'>
                                        <div className='payment-method'>
                                            <input type="radio" />
                                            <CreditCardIcon/>
                                            <label>Commission Wallet</label>
                                        </div>
                                        <div className='payment-method'>
                                            <input type="radio" />
                                            <CreditCardIcon/>
                                            <label>Credits Wallet</label>
                                        </div>
                                        <div className='payment-method'>
                                            <input type="radio" />
                                            <CreditCardIcon/>
                                            <label>Pay with crypto</label>
                                        </div>
                                    </div>

                                    <div className="process-payment">
                                        <button className="theme-btn">PROCESS PAYMENT <ArrowRightAltIcon/></button>
                                    </div>
                                </div>
                            </div>


                        </Grid>
                        <Grid item xs={12} md={6} className='checkout-summary'>
                            <div className='summary'>
                                <h4>Today's Order Summary</h4>
                                            
                                <div class="item-sub-total">
                                    <p>Item Sub Total</p>
                                    <p className="total">$0.00</p>
                                </div>
                                        
                                <div class="cart-totals">
                                    <p>Total</p>
                                    <p className="total">$0.00</p>
                                </div>

                                <div className="coupon-btn">
                                    <input type='text' placeholder='Coupon Code'/>
                                    <button className="theme-btn">Apply <ArrowRightAltIcon/></button>
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

export default Checkout;
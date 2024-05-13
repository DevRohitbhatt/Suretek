import React from 'react';
import Layout from './../components/Layout';
import '../scss/pages/ShoppingCart.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {

    const navigate = useNavigate();
    const fnNavigate = () => {
        navigate("/checkout");
    }



  return (
    <Layout>
        <div className="shopping-cart-page">
            <div className='primary-width'>
                <div className='breadcrumb-contaner'>
                    <div>
                        <h3>Cart</h3>
                    </div>
                    <div className="breadcrumb-div">
                        <ul className="breadcrumb">
                            <li>Home</li>
                            <li><ArrowForwardIosIcon/></li>
                            <li><a href="#"><span>Shopping Cart</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='primary-width cart-contaner'>

            <Grid container >                        
                <Grid item xs={12} md={8} className='cart-product'>
                    <div class="header-title">
                            <h3 className='pd-h3'>Product Details</h3>
                            <h3 className='qnt-h3'>Quantity</h3>
                            <h3 className='total-h3'>Total</h3>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className='cart-summary'>
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

                        <div className="checkout-btn">
                            <button className="theme-btn" onClick={fnNavigate}>Proceed To Checkout <span className='sep'></span> <ShoppingCartOutlinedIcon/></button>
                        </div>


                    </div>
                </Grid>
            </Grid>

            </div>


        </div>
    </Layout>
  );
};

export default ShoppingCart;

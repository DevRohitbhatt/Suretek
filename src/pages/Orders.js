import React, { useState } from "react";
import MyAccount from "../components/MyAccount";
import SearchIcon from "@mui/icons-material/Search";
import "../scss/pages/orders.scss";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PrintIcon from "@mui/icons-material/Print";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function Orders() {

    // function collapse
    const[visible, setVisible] = useState(false);

  function Card({ orderNo, quantity, time, status,price }) {
    return (
      <div class="card-container">
        <div class="card-row" onClick={(event)=>setVisible(!visible)}>
          <div class="row-left">
            <ShoppingBagIcon />
            <div class="order-details">
              <h4>Order {orderNo}</h4>
              <p>
                {quantity} Item - {time}
              </p>
            </div>
          </div>
          <div class="payment">
            <div>
              <PrintIcon />
              <span>${price}</span>
            </div>
            <p>Payment {status}</p>
          </div>
        </div>
        <div class="collapse" style={visible ? {display : 'block'} : {display : 'none'}} >
            <div class="row-1">
                <div class="left">
                    <div class="img">
                        <img src="https://cdn.raveretailer.com/1C4E04E133/2022/06/images/1000x1000/GSR_62b6a142379023865131656139602.png" />
                    </div>
                    <p>A.I. Software Pack</p>
                </div>
                <div class="right">
                    <label>${price}</label>
                    <label>X {quantity}</label>
                </div>
            </div>
            <div class="row-2">
                <div class="top">
                    <strong>SubTotal</strong>
                    <span>${price}</span>
                </div>
                <div class="bottom">
                    <label>Discounts</label>
                    <span>$0</span>
                </div>
            </div>
            <div class="row-3">
                <div class="top">
                    <label>Shipping Charges</label>
                    <span>$0</span>
                </div>
                <div class="bottom">
                    <label>Tax</label>
                    <span>$0</span>
                </div>
            </div>
            <div class="row-4">
                <div class="top">
                    <strong>Total</strong>
                    <span>${price}</span>
                </div>
            </div>
            <div class="row-5">
                <div class="top">
                    <strong>Status</strong>
                    <span>Payemnt {status}</span>
                </div>
                <div class="bottom">
                    <strong>Order Date</strong>
                    <span>{time}</span>
                </div>
            </div>
            <div class="row-6">
                <strong>Shipping Address</strong>
                <div class="address-box">
                    <LocationOnOutlinedIcon/>
                    <div class="address">
                        <h6>house no-512</h6>
                        <p>noida</p>
                        <p>noida, 7 110053</p>
                        <p>IN</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  function Content() {
    return (
      <div class="content-container">
        <div class="header">
          <label>Search:</label>
          <div class="search-box">
            <input type="text" placeholder="Search Order(s)" />
            <SearchIcon />
          </div>
        </div>
        <Card
          orderNo="#577936"
          quantity="1"
          time="Mar 26, 2024 03:02:am"
          price="150"
          status="Declined"
        />
        <Card
          orderNo="#577936"
          quantity="1"
          time="Mar 26, 2024 03:02:am"
          price="150"
          status="Declined"
        />
      </div>
    );
  }

  return (
    <div>
      <MyAccount content={<Content />} page="Orders" />
    </div>
  );
}

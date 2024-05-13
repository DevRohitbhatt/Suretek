import React from "react";
import "../scss/pages/review.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import WithoutHeaderLayout from './../components/WithoutHeaderLayout';

export default function () {

  function Row({left,right}) {
    return (
      <div class="row">
        <div class="left-row">
          <strong class="left-row-strong">{left}</strong>
        </div>
        <div class="right-row">
          <span class="right-row-span">{right}</span>
        </div>
      </div>
    );
  }

  return (
    <WithoutHeaderLayout>
    <div class="review-page">
      <div className="center">
        <img
          src="https://cdn.raveretailer.com/1C4E04E133/2023/07/images/GSR_64ac0ee918ea32843031689001209.png"
          className="logo-2"
        />
      </div>

      <div className="top-bar">
        <div className="circle-div first-circle">
          <span className="circle"></span>
          <span className="txt-span">SIGN UP</span>
        </div>

        <div className="circle-div second-circle">
          <span className="circle"></span>
          <span className="txt-span">ENROLLMENT KITS</span>
        </div>

        <div className="circle-div third-circle">
          <span className="circle active"></span>
          <span className="txt-span">REVIEW</span>
        </div>
      </div>

      {/* review page */}
      <div class="review">
        <h3 class="title">REVIEW</h3>
        <div class="reviewCard">
          <div class="left-reviewCard">
            <Row left="Email" right="nokoy46640@nimadir.com" />
            <Row left="First Name" right="Mukund" />
            <Row left="Last Name" right="Testing" />
            <Row left="Referral Code" right="mukundtesting" />
            <Row left="Date of Birth" right="10/25/2001" />
            <Row left="Primary Address" right="house no-512 noida" />
            <Row left="City" right="noida" />
            <Row left="State" right="7" />
            <Row left="Zip" right="110053" />
            <Row left="Country" right="India" />
          </div>
          <div class="right-reviewCard">
            <div class="pricing-box">
              <div class="pricing-name">
                <b>ENROLLMENT KITS</b>
              </div>
              <div class="pricing-footer">
                <div class="pricing-footer-left">A.I. Software Pack</div>
                <div class="pricing-footer-right">
                  <label>$150.00</label>
                  <a>
                    <DeleteIcon style={{fontSize : '12px'}} />
                  </a>
                </div>
              </div>
            </div>
            <div class="pricing-box">
              <div class="pricing-name">
                <b>SUMMARY</b>
                
              </div>
              <div class="pricing-tax">
                <label class="left-label">Sub Total : </label>
                <label class="right-label">$150.00</label> <br />
                <label class="left-label">Tax : </label>
                <label class="right-label">$0.00</label> <br />
                <label class="left-label">Shipping : </label>
                <label class="right-label">$0.00</label> <br /> <br />
                <label class="left-label">Total : </label>
                <label class="right-label">$150.00</label>
              </div>
            </div>
            <div class="pricing-box">
              <div class="pricing-name">
                <b>COUPON</b>
              </div>
              <div class="form-group">
                <input placeholder="Coupon Code"></input>
                <button>
                  <label>Apply</label> <ArrowRightAltIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="review-footer">
          <div class="shipping-methods">
            <h2>Shipping Methods</h2>
            <div class="method">
              <input type="radio" checked="checked" class="radio" />
              <label>Standard Shipping</label>
            </div>
          </div>
          <div class="payment-methods">
            <h2>Payment Methods</h2>
            <div class="addCard">
              <a>Add Card</a>
            </div>
            <div class="payment-card">
              <div class="card">
                <input type="radio" name="payment-option" class="radio" />
                <h6>Commission Wallet -</h6>
              </div>
              <div class="card">
                <input type="radio" name="payment-option" class="radio" />
                <h6>Credits Wallet -</h6>
              </div>
              <div class="card">
                <input type="radio" name="payment-option" class="radio" />
                <h6>Pay with crypto</h6>
              </div>
            </div>
            <div class="processPayment">
              <button>
                <h6 class="btnP">PROCESS PAYMENT</h6> <ArrowRightAltIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </WithoutHeaderLayout>
  );
}

import React, { useState } from "react";
import MyAccount from "../components/MyAccount";
import "../scss/pages/PaymentMethods.scss";
import countries from "../countries.json";
// icons
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

export default function PaymentMethods() {
  // for country selection
  const [countryName, setCountryName] = useState("");
  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  function handleCountry(e) {
    e.preventDefault();
    console.log(e.target.value);
    setCountryName(e.target.value);
    setSelectedCity("");
    setCityList(countries[e.target.value]);
  }

  // cardInformation
  const [cardDetails, setCardDetails] = useState([
    {
      id: "1",
      cardType: "Commission Wallet",
      cardNo: "**** **** ****",
      amount: "null",
    },
    {
      id: "2",
      cardType: "Credits Wallet",
      cardNo: "**** **** ****",
      amount: "null",
    },
  ]);

  //   Alert for Card Delete
  function CardDelete(index) {
    const confirmBox = window.confirm("Are you sure you want to remove card ?");
    if (confirmBox === true) {
      //   handleDeleteCrumb(bookmark);
      setCardDetails(
        cardDetails.filter((card) => {
          if (index !== card.id) {
            return card;
          }
        })
      );
      console.log("confirmed");
    }
    console.log(index);
  }

  // paymentCard
  function PaymentsCard() {
    return cardDetails.map((card, index) => {
      return (
        <div class="paymentsCard" key={index}>
          <div class="details">
            <CreditCardOutlinedIcon />
            {card.cardType}
            {card.cardNo}
            {card.amount}
          </div>

          <div class="actions">
            <span class="card-default">
              <label>Default | </label>
            </span>
            <span class="card-remove">
              <a
                href="javascript:void(0)"
                class="delete-card"
                onClick={() => CardDelete(card.id)}
              >
                Delete
              </a>
            </span>
          </div>
        </div>
      );
    });
  }

  function Content() {
    return (
      <div class="paymentMethods-container">
        <div class="header">
          <h3>Payment Methods</h3>
        </div>
        <div class="paymentsCard-container">
          <PaymentsCard />
          <button>
            <h6 class="btnP">Add Card</h6>
          </button>
        </div>
        <div class="form-container">
          <form onClick={(e)=> e.preventDefault()}>
            <div class="header">
              <h3>Card Information</h3>
            </div>
            <div class="row-1">
              <div class="input-box">
                <label for="firstName">First Name</label>
                <input
                  class="input-full"
                  type="text"
                  name="firstName"
                  id="firstName"
                />
              </div>
              <div class="input-box">
                <label for="lastName">Last Name</label>
                <input
                  class="input-full"
                  type="text"
                  name="lastName"
                  id="lastName"
                />
              </div>
            </div>
            <div class="row-2">
              <div class="input-box">
                <label for="cardNumber">Card Number</label>
                <div class="cardNumber-box">
                  <input
                    class="input-full"
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                  />
                  <span>
                    <CreditCardOutlinedIcon />
                  </span>
                </div>
              </div>
            </div>
            <div class="row-3">
              <div class="input-box">
                <label>Expiration Date</label>
                <select class="input-full">
                  <option>01-January</option>
                  <option>02-February</option>
                  <option>03-March</option>
                  <option>04-April</option>
                  <option>05-May</option>
                  <option>06-June</option>
                  <option>07-July</option>
                  <option>08-August</option>
                  <option>09-September</option>
                  <option>10-October</option>
                  <option>11-November</option>
                  <option>12-December</option>
                </select>
              </div>
              <div class="input-box">
                <label>Year</label>
                <select class="input-full">
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                  <option>2032</option>
                  <option>2033</option>
                </select>
              </div>
              <div class="input-box">
                <label for="lastName">CVV</label>
                <input
                  class="input-full"
                  type="text"
                  name="lastName"
                  id="lastName"
                  maxLength="6"
                />
              </div>
            </div>
            <div class="row-4">
              <img
                src="https://eaconomy.corpadmin.directscale.com/images/visa-card-icon.png"
                alt="Visa"
              />
              <img
                src="https://eaconomy.corpadmin.directscale.com/images/master-card-icon.png"
                alt="MasterCard"
              />
              <img
                src="https://eaconomy.corpadmin.directscale.com/images/discover-card-icon.png"
                alt="Discover"
              />
              <img
                src="https://eaconomy.corpadmin.directscale.com/images/american-express-card-icon.png"
                alt="American Express"
              />
            </div>
            <div class="header">
              <h3>Card Billing Info</h3>
            </div>
            <div class="alert-box">
              <p>
                Please ensure that when entering your billing information, you
                enter it <strong>EXACTLY</strong> as it was recorded with your
                card's issuing bank.
              </p>
            </div>
            <div class="row-5">
              <div class="input-box">
                <label>Country</label>
                <select class="input-full" onChange={handleCountry}>
                  <option value="India">{"--Select Country--"}</option>
                  {Object.keys(countries).map((country) => {
                    return country === countryName ? (
                      <option selected value={country}>
                        {country}
                      </option>
                    ) : (
                      <option value={country}>{country}</option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div class="row-6">
              <div class="input-box">
                <label>Billing Address</label>
                <input
                  class="input-full"
                  type="text"
                  placeholder="Address Line 1"
                />
                <input
                  class="input-full"
                  type="text"
                  placeholder="Address Line 2"
                />
              </div>
            </div>
            <div class="row-7">
              <div class="input-box">
                <label>City</label>
                <select
                  id="input-half"
                  class="input-full"
                  onChange={(e) => {
                    setSelectedCity(e.target.value);
                  }}
                >
                  <option value={""}>{"--Select City--"}</option>
                  {cityList.map((cty) => {
                    return cty === selectedCity ? (
                      <option selected value={cty}>
                        {cty}
                      </option>
                    ) : (
                      <option value={cty}>{cty}</option>
                    );
                  })}
                </select>
              </div>
              <div class="input-box">
                <label>State</label>
                <input class="input-full" type="text" placeholder="State" />
              </div>
              <div class="input-box">
                <label>Postal Code</label>
                <input class="input-full" type="text" maxLength="6" placeholder="Postal Code" />
              </div>
            </div>
            <div class="row-8">
              <div class="input-box">
                <label>Phone</label>
                <input class="input-full" type="text" maxLength="10" placeholder="Phone" />
              </div>
            </div>
            <div class="row-9">
              <button>
                <h6 class="btnP">Save Card</h6>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <MyAccount content={<Content />} page="Payment methods" />
    </div>
  );
}

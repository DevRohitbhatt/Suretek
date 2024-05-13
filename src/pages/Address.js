import React, { useEffect, useState } from "react";
import MyAccount from "../components/MyAccount";
import "../scss/pages/Address.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import countries from "../countries.json";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function Address() {
  // hide edit section
  const[displayEdit, setDisplayEdit] = useState(true);
  const [countryName, setCountryName] = useState('');
  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  function handleCountry(e) {
    e.preventDefault();
    console.log(e.target.value);
    setCountryName(e.target.value);
    setSelectedCity('');
    setCityList(countries[e.target.value]);
  }

  function Input({ state, name, id }) {
    const [val, setVal] = React.useState(state);
    function handleChange(event) {
      event.preventDefault();
      setVal(event.target.value);
    }
    return (
      <input
        type="text"
        placeholder={name}
        onChange={handleChange}
        value={val}
        class="input-full"
        id={id}
      />
    );
  }
  function Content() {
    return (
      <div class="address-container">
        <div class="header">
          <h3>Billing Address</h3>
        </div>
        <div class="content-section">
          <div class="address-container">
            <div class="left">
              <div class="address-box">
                <LocationOnOutlinedIcon />
                <div class="address">
                  <h6>Mukund Testing</h6>
                  <p>house no-512</p>
                  <p>noida</p>
                  <p>noida, 7 110053</p>
                  <p>IN</p>
                </div>
              </div>
            </div>
            <div class="right">
              <a onClick={() => {setDisplayEdit(false)}}>Edit</a>
            </div>
          </div>
          <div class="form-container" id={displayEdit ? 'hide' : ''}>
            <form>
              <div class="row-1">
                <Input id="input-half" state="Mukund" name="First Name" />
                <Input id="input-half" state="Testing" name="Last Name" />
              </div>
              <div class="row-2">
                <select class="input-full" onChange={handleCountry}>
                  <option value='India' >{'--Select Country--'}</option>
                  {Object.keys(countries).map((country) => {
                    return country === countryName ? <option selected value={country}>{country}</option> :
                     <option value={country}>{country}</option>;
                  })}
                </select>
              </div>
              <div class="row-3">
                <Input state="noida" name="Town / City" />
              </div>
              <div class="row-4">
                <Input state="noida" name="Apartment, suite, etc. (optional)" />
              </div>
              <div class="row-5">
                <Input state="noida" name="Town / City" />
              </div>
              <div class="row-6">
                {/* <select id="input-half" class="input-full">
                  <option>{countryName}</option> */}
                <select id="input-half" class="input-full" onChange={(e) => {setSelectedCity(e.target.value)}}>
                  <option value={''}>{'--Select City--'}</option>
                  {cityList.map((cty) => {
                    return cty === selectedCity ? <option selected value={cty}>{cty}</option> :
                     <option value={cty}>{cty}</option>;
                  })}
                </select>
                <Input id="input-half" state="110053" name="Zip code" />
              </div>
              <div class="row-7">
                <button onClick={()=>setDisplayEdit(false)} >Close</button>
                <button>
                  <label>Update Address</label> <ArrowRightAltIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <MyAccount content={<Content />} page="Addresses" />
    </div>
  );
}
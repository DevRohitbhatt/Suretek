import React from "react";
import MyAccount from "../components/MyAccount";
import "../scss/pages/Information.scss";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

export default function Information() {
  function Group({ label, dataFor, value }) {
    return (
      <div class="form-group">
        <label for={dataFor}>{label}</label>
        <input name={dataFor} type="text" readOnly value={value} />
      </div>
    );
  }

  function Content() {
    return (
      <div class="information-container">
        <div class="header">
          <h3>My Information</h3>
        </div>
        <div class="form-container">
          <div class="left">
            <div class="col">
              <Group label="First name:" dataFor="first_name" value="Mukund" />
              <Group label="Last name:" dataFor="last_name" value="Testing" />
            </div>
            <div class="col col-2">
              <Group label="Email" dataFor="email" value="123@example.com" />
              <div class="birthday">
                <label for="birthday">Birthday</label>
                <div>
                  <select id="birthday-month" name="birthday-month" disabled>
                    <option value="01">Jan</option>
                    <option value="02">Feb</option>
                    <option value="03">Mar</option>
                    <option value="04">Apr</option>
                    <option value="05">May</option>
                    <option value="06">Jun</option>
                    <option value="07">Jul</option>
                    <option value="08">Aug</option>
                    <option value="09">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                  </select>
                  <select id="birthday-day" name="birthday-day" disabled>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                  <select id="birthday-year" name="birthday-year" disabled>
                    <option value="2022">2024</option>
                    <option value="2022">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col col-3">
              <Group
                label="Primary Phone"
                dataFor="primary_phone"
                value="+91364456255"
              />
              <Group
                label="Secondary Phone"
                dataFor="secondary_phone"
                value="Secondary Phone"
              />
            </div>
          </div>
          <div class="right">
            <img src="https://eaconomy.corpadmin.directscale.com//BackOffice/ProfileImage?id=201053" />
            <div class="pic-input">
              <input type="file" accept="image/*" />
              <label>
                <CameraAltOutlinedIcon />
              </label>
            </div>
          </div>
        </div>
        <div class="form-group last">
          <label for="password">Password:</label>
          &nbsp;&nbsp; - &nbsp;&nbsp;
          <a href="#" class="send_reset_password_email">
            Change Password
          </a>
        </div>
        <button>Update</button>
      </div>
    );
  }

  return (
    <div>
      <MyAccount content={<Content />} page="Information" />
    </div>
  );
}

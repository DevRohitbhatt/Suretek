import React from "react";
import Layout from "./Layout";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../scss/pages/my-account.scss";
// icons
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

export const ListItem = ({link, icon, category }) => {
  return (
    <li class="list-item">
      <a href={link}>
        {icon}
        <span>{category}</span>
      </a>
    </li>
  );
}

export default function MyAccount({content, page}) {
  

  return (
    <Layout>
      <div class="my-account">
        <div class="account-heading">
          <h3>My Profile</h3>
          <div class="page-path">
            <ul>
              <li>Home</li>
              <li>
                <ArrowForwardIosIcon style={{ fontSize: "10px" }} />
              </li>
              <li>My Profile</li>
              <li>{ page ? <ArrowForwardIosIcon style={{ fontSize: "10px" }} /> : "" }</li>
              <li>{ page ? page : "" }</li>
            </ul>
          </div>
        </div>

        <div class="main-section">
          <div class="side-bar">
            <ul className="side-bar-list">
              <li>
                <a href="/my-account/profile">
                  <AccountCircleOutlinedIcon />
                  <span>
                    Profile <small>(470ED)</small>
                  </span>
                </a>
                <div class="ml-3">
                  <small>Pre-Enroll</small>
                </div>
              </li>
              <ListItem link="/my-account/orders" icon={<ShoppingCartOutlinedIcon/>} category="Orders" />
              <ListItem link="/my-account/subscriptions" icon={<EmailOutlinedIcon/>} category="Autoship" />
              <ListItem link="/my-account/profile-edit" icon={<SettingsOutlinedIcon/>} category="Information" />
              <ListItem link="/my-account/address" icon={<ContactMailOutlinedIcon/>} category="Addresses" />
              <ListItem link="/my-account/payment" icon={<CreditCardOutlinedIcon/>} category="Payment Methods" />
            </ul>
          </div>
          <div class="content-container">{content}</div>
        </div>
      </div>
    </Layout>
  );
}

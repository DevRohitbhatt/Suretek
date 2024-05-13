import React from 'react'
import MyAccount from '../components/MyAccount'
import { ListItem } from '../components/MyAccount'
import "../scss/pages/profile.scss";

// icons
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

export default function Profile() {

    function Content(){
        return (
            <div class="content-container">
              <ListItem link="/my-account/orders"  icon={<ShoppingCartOutlinedIcon />} category="My Orders" />
              <ListItem link="/my-account/subscriptions" icon={<EmailOutlinedIcon/>} category="My Autoship" />
              <ListItem link="/my-account/profile-edit" icon={<SettingsOutlinedIcon/>} category="My Information" />
              <ListItem link="/my-account/address" icon={<ContactMailOutlinedIcon/>} category="Addresses" />
              <ListItem link="/my-account/payment" icon={<CreditCardOutlinedIcon/>} category="Payment Methods" />
            </div>
        )
    }


  return (
    <div><MyAccount content={<Content/>} /></div>
  )
}

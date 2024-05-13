import React from 'react'
import MyAccount from "../components/MyAccount";
import "../scss/pages/Subscriptions.scss";


export default function Subscriptions() {

    function Content(){
        return(
            <div class="autoship-container">
                <div class="heading">
                    <h3>Autoship</h3>
                </div>
                <div class="product">
                    <h3>No Autoship</h3>
                    <p>You don't have any Autoship</p>
                    <a>Shop Now</a>
                </div>
            </div>
        )
    }

  return (
    <div>
      <MyAccount content={<Content />} page="Autoship" />
    </div>
  )
}

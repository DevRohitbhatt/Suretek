import React from 'react';
import Layout from './../components/Layout';
import '../scss/pages/RiskWarning.scss';

const RiskWarning = () => {

   
  return (
    <Layout>
        <div className="risk-warning-page">
            <div className='content-div'>
                <h2>Risk Warning</h2>               
                
                <p><span >Before you enter foreign exchange and stock markets, you have to remember that trading currencies and other investment products is trading in nature and always involves a considerable risk. As a result of various financial fluctuations, you may not only significantly increase your capital, but also lose it completely.</span></p>
                <p><span >Therefore, our clients have to assure eaconomy™ that they understand all the possible consequences of such risks, they know all the specifics, rules and regulations governing the use of investment products, including corporate events, resulting in the change of underlying assets. Client understands that there are special risks and features that affect prices, exchange rates and investment products.</span></p>
                <p><span >These risks include decrease in liquidity, price change, high volatility and circumstances beyond control. Before you open an account with us, make sure to study in detail the user agreement, as well as the basic principles and rules of the financial markets.</span></p>
                <p><span >eaconomy™ is not liable for any damages that occurred as a result of government restrictions, regulations of foreign exchange or stock markets, military actions, suspension of trading and other circumstances beyond control.</span></p>

            </div>

        </div>
    </Layout>
  );
};

export default RiskWarning;

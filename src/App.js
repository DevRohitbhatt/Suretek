import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhyEaconomy from './pages/why_Eaconomy';
import JoinNow from './pages/JoinNow';
import Enroll from './pages/Enroll';
import Signup from './pages/Signup';
import EnrollmentKit from './pages/EnrollmentKit';
import AddOns from './pages/AddOns';
import Manara from './pages/Manara';
import Eminus from './pages/Eminus';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import Review from './pages/Review';
import MyAccount from './components/MyAccount';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Subscriptions from './pages/Subscriptions';
import Information from './pages/Information';
import UserAgreement from './pages/UserAgreement';
import RiskWarning from './pages/RiskWarning';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SpamPolicy from './pages/SpamPolicy';
import Dmca from './pages/Dmca';
import Address from './pages/Address';
import EnrollmentStep3 from './pages/EnrollmentStep3';
import PaymentMethods from './pages/PaymentMethods';



const App = () => {
  return (
    <Router>  
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-eaconomy" element={<WhyEaconomy />} />
          <Route path="/join-now" element={<JoinNow />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/enrollment-kit" element={<EnrollmentKit />} />
          <Route path="/addons" element={<AddOns />} />
          <Route path="/manara" element={<Manara />} />
          <Route path="/eminus" element={<Eminus />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/review" element={<Review />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-account/profile" element={<Profile />} />
          <Route path="/my-account/orders" element={<Orders />} />
          <Route path="/my-account/subscriptions" element={<Subscriptions />} />
          <Route path="/my-account/profile-edit" element={<Information />} />
          <Route path="/my-account/address" element={<Address />} />
          <Route path="/user-agreement" element={<UserAgreement />} />
          <Route path="/risk-warning" element={<RiskWarning />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/eaconomy-privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/spam-policy" element={<SpamPolicy />} />
          <Route path="/dmca" element={<Dmca />} />
          <Route path="/enrollment/step-3" element={<EnrollmentStep3 />} />
          <Route path="/my-account/payment" element={<PaymentMethods />} />
          {/* Add more routes for other pages */}
        </Routes>
    </Router>
  );
};

export default App;

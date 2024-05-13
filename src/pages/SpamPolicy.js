import React from 'react';
import Layout from './../components/Layout';
import '../scss/pages/SpamPolicy.scss';

const SpamPolicy = () => {

   
  return (
    <Layout>
        <div className="spam-policy-page">
            <div className='content-div'>
                <h2>Spam Policy</h2>               
                
                
                <p><strong><u><span >What is spam?</span></u></strong></p>
                <p><span >E-mail that is not wanted: e-mail that is sent to large numbers of people and that consists mostly of advertising. Here is a link to the FTC and the CAN-SPAM Act of 2003: <a href="https://www.ftc.gov/tips-advice/business-center/guidance/can-spam-act-compliance-guide-business" target="_blank">Can-Spam Act Compliance Guide</a></span></p>
                <p><strong><u><span >Automated spam filtering</span></u></strong></p>
                <p><span >The eaconomy™ messaging systems automatically scan all incoming email and other messages, and filter-out messages that appear to be spam.</span></p>
                <p><strong><u><span >Problems with spam filtering</span></u></strong></p>
                <p><span >No message filtering system is 100% accurate, and from time to time legitimate messages will be filtered-out by eaconomy™. If you believe this has happened to a message you have sent, please advise the message recipient by another means. You can reduce the risk of a message being caught by the spam filters by sending the message in plain text (i.e. no HTML), removing any attachments, and ensuring that your messages are scanned for malware before dispatch. You can use this service: <a href="https://www.mail-tester.com/" target="_blank">Mail Tester</a></span></p>
                <p><strong><u><span >User Spam</span></u></strong></p>
                <p><span >eaconomy™ provides a facility that enables users to send email messages/private messages to others. Users must not use this facility to send unsolicited, bulk or indiscriminate messages, whether or not for a commercial purposes. Full terms and conditions concerning the use of the facility are set out in our User Agreement and Terms and Conditions.</span></p>
                <p><strong><u><span >Receipt of unwanted messages from eaconomy™</span></u></strong></p>
                <p><span >In the unlikely event that you receive any message from eaconomy™ or sent using the eaconomy™ system, that may be considered to be spam, please contact eaconomy™ using the details below and the matter will be investigated.</span></p>
                <p><strong><u><span >Changes to this anti-spam policy</span></u></strong></p>
                <p><span >eaconomy™ may amend this anti-spam policy at any time by publishing a new version on the company website.</span></p>
                <p><strong><u><span >Contact us</span></u></strong></p>
                <p><span >Should you have any questions about this anti-spam policy, please contact eaconomy™ at </span><a href="support@eaconomy.io" target="_blank"><span >support@eaconomy.io</span></a></p>

                 
               
            </div>

        </div>
    </Layout>
  );
};

export default SpamPolicy;

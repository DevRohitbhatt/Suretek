import React from 'react';
import Layout from './../components/Layout';
import '../scss/pages/Dmca.scss';

const Dmca = () => {

   
  return (
    <Layout>
        <div className="dmca-page">
            <div className='content-div'>
                <h2>DMCA</h2>               
                
                
                <p><strong><u><span >NOTICE AND PROCEDURE FOR MAKING CLAIMS OF COPYRIGHT INFRINGEMENT</span></u></strong></p>
                <p><span >Pursuant to Title 17, United States Code, Section 512(c)(2), all notifications of claimed copyright infringement on the eaconomy.com (" eaconomy") public website or help desk should be sent ONLY to our Designated Agent.</span></p>
                <p><span >NOTE: The Following Information is provided solely for notifying eaconomy that your copyrighted material may have been infringed.</span></p>
                <p><span className='caution-txt'>We caution you that under federal law, if you knowingly misrepresent that online material is infringing, you may be subject to heavy civil penalties. These include monetary damages, court costs, and attorney fees incurred by us, by any copyright owner, or by any copyright owner's licensee that is injured as a result of our relying upon your misrepresentation. You may also be subject to criminal prosecution for perjury. Do not send any inquiries unrelated to copyright infringement (e.g., requests for technical assistance or customer service, reports of e-mail abuse, etc.) to the contact listed below. You will not receive a response if sent to that contact.</span></p>
                <p><span >Written notification must be submitted to the following Designated Agent:</span></p>
                <p><span >eaconomy™</span></p>
                <p><span >ATTN: Legal Department</span></p>
                <p><span >E-mail: legal@eaconomy.io</span></p>
                <p><span >IMPORTANT NOTE: IN THE EVENT YOU SEND US A NOTICE OF ANY KIND VIA EMAIL AND DO NOT RECEIVE A RESPONSE FROM US, PLEASE SUBMIT A DUPLICATE COPY VIA PAPER. DUE TO THE VAGARIES OF THE INTERNET, AND EMAIL COMMUNICATION IN PARTICULAR, INCLUDING WITHOUT LIMITATION THE BURDENS OF SPAM AND THE OCCASIONAL, UNINTENDED EFFECTS OF SPAM FILTERS, SENDING AN ALTERNATE FORM OF NOTICE (VIA PAPER), WILL HELP ASSURE THAT YOUR NOTICE WILL BE RECEIVED BY US AND ACTED ON IN A TIMELY MANNER.</span></p>
                <p><span >Under Title 17, United States Code, Section 512(c)(3)(A), the Notification of Claimed Infringement must include ALL of the following:</span></p>
                <ul className='outer-lists'>
                    <li className='outer-list'><span >Physical or electronic signature of a person authorized to act on behalf of the copyright owner.</span></li>
                    <li className='outer-list'><span >Identification of the copyrighted work claimed to have been infringed upon or a representative list if multiple works are involved.</span></li>
                    <li className='outer-list'><span >Identification of the material that is claimed to be infringing that should be removed or access to disabled and information reasonably sufficient to enable the online service provider to locate the material (usually a URL to the relevant page).</span></li>
                    <li className='outer-list'><span >Information reasonably sufficient to allow the online service provider to contact the complaining party (address, phone number, e-mail address).</span></li>
                    <li className='outer-list'><span >Statement that the complaining party has "a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent or the law."</span></li>
                    <li className='outer-list'><span >Statement that the information in the notice is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the copyright owner.</span></li>
                    <li className='outer-list'><span >Upon receipt of notification of a claimed infringement, eaconomy will respond expeditiously to remove, or disable access to, the material that is claimed to be infringing or to be the subject of infringing activity, regardless of whether the material or activity is ultimately determined to be infringing; if selective action is not possible, eaconomy will terminate the alleged infringer's access to their account.</span></li>
                </ul>
                <p><span >eaconomy will also take reasonable steps to promptly notify the alleged infringer in writing of the claim against him or her, and that it has removed or disabled access to the material (see Sections 512(c)(1)(C) and (g) of the DMCA).</span></p>
                <p><span >Upon receipt of notice from eaconomy that a claim of infringement has been made and/or that the material has been removed or that access to it has been disabled, the Subscriber may provide a Counter Notification.</span></p>
                <p><span >To be effective, a Counter Notification must meet ALL of the following requirements:</span></p>
                <ul className='outer-lists'>
                    <li className='outer-list'><span >It must be a written communication;</span></li>
                    <li className='outer-list'><span >It must be sent to the Service Provider's Designated Agent;</span></li>
                    <li className='outer-list'><span >It must include the following:</span></li>
                    <ul className='inner-lists'>
                        <li><span >A physical or electronic signature of the Subscriber;</span></li>
                        <li><span >Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access to it was disabled</span></li>
                        <li><span >A statement, under penalty of perjury, that the Subscriber has a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled;</span></li>
                        <li><span >The Subscriber's name, address, and telephone number, and a statement that the Subscriber consents to the jurisdiction of Federal District Court for the judicial district in which the Subscriber's address is located, or if the Subscriber's address is outside of the United States, for any judicial district in which the Service Provider may be found, and that the Subscriber will accept service of process from the person who provided notification or an agent of such person.</span></li>
                    </ul>
                </ul>
                <p><span >Upon receipt of a Counter Notification from the Subscriber containing the information as outlined above, eaconomy will:</span></p>
                <ul className='outer-lists'>
                    <li className='outer-list'><span >Promptly provide the Complaining Party with a copy of the Counter Notification</span></li>
                    <li className='outer-list'><span >Inform the Complaining Party that it will replace the removed material or cease disabling access to it within ten (10) business days following receipt of the Counter Notice;</span></li>
                    <li className='outer-list'><span >Replace the removed material or cease disabling access to the material in not less than ten (10), nor more than fourteen (14), business days following receipt of the Counter Notice, provided Service Provider's Designated Agent has not received notice from the Complaining Party that an action has been filed seeking a court order to restrain Subscriber from engaging in infringing activity relating to the material on Service Provider's network or system.</span></li>
                </ul>
                <p><span className='caution-txt'>CAUTION: Pursuant to Title 17, Section 512(f) of the United States Code, any person who knowingly materially misrepresents that material or activity is infringing, or that material or activity was removed or disabled by mistake or misidentification, shall be liable for any damages, including costs and attorney's fees, incurred by the alleged infringer, by any copyright owner or copyright owner’s authorized licensee, or by a service provider, who is injured by such misrepresentation, as the result of the service provider relying upon such misrepresentation in removing or disabling access to the material or activity claimed to be infringing, or in replacing the removed material or ceasing to disable access to it.</span></p>
                
            
               
            </div>

        </div>
    </Layout>
  );
};

export default Dmca;

import React from 'react';
import WithoutHeaderLayout from './../components/WithoutHeaderLayout';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import '../scss/pages/Enroll.scss';


export default function Enroll(){

    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const fnSetEmail =(event)=>{
        setEmail(event.target.value);
    }

    const fnNavigate = () => {
        navigate("/signup?email="+email);
    }

  
    

    return(
        <WithoutHeaderLayout>
            <div className="enroll-page">
                <div><img src="https://cdn.raveretailer.com/1C4E04E133/2023/07/images/GSR_64ac0ee918ea32843031689001209.png"  className="logo-2"/></div>

                <form onSubmit={fnNavigate}>
                    <h3 className="heading-3">Enter your email address</h3>            
                    <input type="text" placeholder="Enter your email address" className="referral-inp" onChange={fnSetEmail}/>
                    <button className="btn-started">Get Started <ArrowRightAltIcon/> </button>
                </form>

            </div>
        </WithoutHeaderLayout>
    );
}
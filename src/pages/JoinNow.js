import React from 'react';
import WithoutHeaderLayout from './../components/WithoutHeaderLayout';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import '../scss/pages/JoinNow.scss';


export default function JoinNow(){

    const navigate = useNavigate();

    const [code, setCode] = useState('');

    const fnChangeText =(event)=>{
        setCode(event.target.value);
    }

    const fnEnroll = () => {
        navigate("/enroll");
    }
    

    return(
        <WithoutHeaderLayout>
            <div className="join-now-page">
                <div><img src="https://cdn.raveretailer.com/1C4E04E133/2023/07/images/GSR_64ac0ee918ea32843031689001209.png" className="logo-2"/></div>

                <form action="/enrollment" onSubmit={fnEnroll}>
                    <h2 className="heading-2">WELCOME</h2>
                    <p className="para-graph">Enter the referral code of the advocate who referred you:</p>
                    <input type="text" placeholder="Enroller's Referral Code" className="referral-inp" onChange={fnChangeText}/>
                    <button className="btn-started">Get Started <ArrowRightAltIcon/> </button>
                </form>

            </div>
        </WithoutHeaderLayout>
    );
}
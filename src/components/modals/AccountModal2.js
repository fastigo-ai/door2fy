import React, { useState, useRef} from 'react';
import firebase from './utils/firebasi';

const AccountModal = ({ onClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaRef = useRef(null);

    const handleSendOtp = () => {

        if(recaptchaRef.current){
            recaptchaRef.current.innerHTML = '<div id="recaptcha-container"></div>';
        }
        const verifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
     size : 'invisible',});

     firebase.auth().signInWithPhoneNumber(phoneNumber, verifier)
     .then(confirmationResult => {
         setVerificationId(confirmationResult.verificationId);
         alert('OTP sent successfully!');
     }).catch(error => {
        console.log(error);
    });
    };
    return(
        <div className='fixed top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-4 z-10 rounded shadow-lg'>
            <h1>Phone OTP</h1>
            <div></div>
            <input type="tel"
            placeholder="+911234567890"
            value= {phoneNumber} 
            onChange={e => setPhoneNumber(e.target.value)}/>
            <button onClick={handleSendOtp}>Send Otp</button>
        </div>
    )
};

export default AccountModal;
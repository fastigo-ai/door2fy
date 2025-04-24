import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { auth } from "./utils/firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithCredential,
  PhoneAuthProvider,
} from "firebase/auth";

const AccountModal = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setupRecaptcha();
    }
  }, [isOpen]);

  const setupRecaptcha = () => {
    if (!auth) {
        console.error("Firebase Auth is not initialized");
        return;
      }
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {},
        auth
      );
      window.recaptchaVerifier.render();
      console.log(window.recaptchaVerifier);
    }
  };

  const sendOtp = async () => {
    if (!phoneNumber) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    try {
        console.log(window.recaptchaVerifier);
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      setVerificationId(confirmationResult.verificationId);
      setMessage("OTP sent successfully.");
    } catch (error) {
      console.error(error);
      setMessage("Failed to send OTP. Try again.");
    }
  };

  const verifyOtp = async () => {
    if (!otp || !verificationId) return;

    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      const userCredential = await signInWithCredential(auth, credential);
      console.log("User signed in:", userCredential.user);
      setMessage("Phone number verified successfully.");
    } catch (error) {
      console.error("Invalid OTP:", error);
      setMessage("Invalid OTP. Please try again.");
    }
  };

  const handleClose = () => {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }
    document.getElementById("recaptcha-container").innerHTML = "";

    setPhoneNumber("");
    setOtp("");
    setVerificationId(null);
    setMessage("");

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-[25%] inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded-lg w-full max-w-sm shadow-xl">
        <h2 className="text-xl font-bold mb-4">Phone Authentication</h2>

        <label className="block mb-2">
          Phone Number:
          <PhoneInput
            defaultCountry="IN"
            value={phoneNumber}
            onChange={setPhoneNumber}
            className="border p-2 w-full rounded mt-1"
            placeholder="Enter phone number"
          />
        </label>

        <div id="recaptcha-container" className="my-4 flex justify-center" />

        <button
          onClick={sendOtp}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full mb-4"
        >
          Send OTP
        </button>

        <label className="block mb-2">
          OTP:
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border p-2 w-full rounded"
            placeholder="Enter OTP"
          />
        </label>

        <button
          onClick={verifyOtp}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full mb-4"
        >
          Verify OTP
        </button>

        {message && (
          <div className="text-sm text-center text-gray-700">{message}</div>
        )}

        <button
          onClick={handleClose}
          className="text-sm text-gray-500 underline mt-4 block mx-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AccountModal;

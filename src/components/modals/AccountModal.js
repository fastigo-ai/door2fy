import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "./utils/firebase"; // Adjust the import path as necessary

const AccountModal = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  

  //  useEffect(() => {
  //     if (isOpen) {
  //       setUpRecaptcha();
  //     }
  //   }, [isOpen]);
  
  useEffect(() => {
    const verifiedStatus = localStorage.getItem("isVerified") === "true";
    setIsVerified(verifiedStatus);
  }, []);



  const setUpRecaptcha = () => {
    try {
      // If reCAPTCHA is already initialized, reset it
      if (window.recaptchaVerifier) {
        console.log("Resetting existing reCAPTCHA...");
        window.recaptchaVerifier.clear(); // Clears the existing instance
        document.getElementById("recaptcha-container").innerHTML = ""; // Removes existing reCAPTCHA
      }
  
      // Recreate a new instance
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        // size: "invisible",
        // callback: () => {
        //   console.log("reCAPTCHA verified successfully");
        // },
        // "expired-callback": () => {
        //   console.warn("reCAPTCHA expired. Resetting...");
        //   setUpRecaptcha(); // Reset on expiration
        // },
      });
  
      window.recaptchaVerifier.render().catch((error) => {
        console.error("reCAPTCHA render error:", error);
      });
    } catch (error) {
      console.error("reCAPTCHA setup error:", error);
    }
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\+[1-9]\d{10,14}$/;
    return phoneRegex.test(phone);
  };



  const sendOTP = async () => {
    console.log(phoneNumber);
    if (!validatePhoneNumber(phoneNumber)) {
      setMessage(
        "Please enter a valid phone number in international format (e.g., +1234567890)"
      );
      return;
    }
  
    setLoading(true);
    setMessage("");
  
    try {
      // Set up recaptcha only here
    if (!window.recaptchaVerifier) {
      setUpRecaptcha();
    }
      const appVerifier = window.recaptchaVerifier;

      // await appVerifier.verify();
  
      if (!appVerifier) {
        throw new Error(
          "reCAPTCHA not initialized. Please refresh and try again."
        );
      }
      console.log("Using reCAPTCHA verifier:", window.recaptchaVerifier);
  
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      setVerificationId(confirmationResult.verificationId);
      setMessage("OTP sent successfully!");
    } catch (error) {
      console.error("Send OTP error:", error);
      setMessage(error.message || "Error sending OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  const verifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      setMessage("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);
      setIsVerified(true);
      localStorage.setItem("isVerified", "true"); // Persist verification status
      localStorage.setItem("userPhoneNumber", phoneNumber); // Persist verification status
      setMessage("Phone number verified successfully!");
    } catch (error) {
      console.error("Verify OTP error:", error);
      setMessage(error.message || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear(); // Clear reCAPTCHA
      document.getElementById("recaptcha-container").innerHTML = ""; // Remove any rendered reCAPTCHA
    }
    setPhoneNumber("");
    setOtp("");
    setVerificationId(null);
    setMessage("");
    onClose();
  };
  

  return (
   <>
  {/* Backdrop */}
  <div
    className="fixed inset-0 bg-black bg-opacity-50 z-10"
    onClick={handleClose}
  ></div>

  {/* Modal shell like CartModal */}
  <div
    className="fixed bottom-0 md:top-[75px] md:right-1 z-50 md:z-20 w-full h-auto md:h-fit md:w-[420px] bg-white rounded-lg shadow-lg flex flex-col overflow-y-auto font-sora p-4"
    style={{ maxHeight: "90vh" }}
    onClick={(e) => e.stopPropagation()}
  >
    {/* Header */}
    <div className="flex justify-between items-center border-b pb-2">
      <h2 className="text-2xl font-semibold text-gray-800">Sign in with your phone</h2>
      <button
        className="text-gray-500 hover:text-gray-700"
        onClick={handleClose}
        disabled={loading}
        aria-label="Close modal"
      >
        <FaTimes size={20} />
      </button>
    </div>

    {/* Logo */}
    <div className="flex justify-center items-center mt-4 px-4">
      <img
        src="/assets/images/Logo-removebg-preview.png"
        alt="Door2fy Logo"
        className="w-48 h-16 object-cover"
      />
    </div>

    {/* Body */}
    <div className="flex flex-col items-center justify-center mt-6 px-6 pb-6 w-full">
      {!isVerified ? (
        <>
          {!verificationId ? (
            <div className="w-full">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                  Phone Number
                </label>
                <PhoneInput
                  defaultCountry="IN"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(value) => setPhoneNumber(value || "")}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  disabled={loading}
                />
                <div id="recaptcha-container" className="mt-2"></div>
              </div>
              <button
                className={`w-full py-2 rounded-lg text-white transition-colors ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-cyan-600 hover:bg-cyan-700"
                }`}
                onClick={sendOTP}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </div>
          ) : (
            <div className="w-full">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">
                  Enter OTP
                </label>
                <input
                  type="text"
                  placeholder="Enter your 6 digit OTP"
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  maxLength={6}
                  disabled={loading}
                />
              </div>
              <button
                className={`w-full py-2 rounded-lg text-white transition-colors ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
                onClick={verifyOTP}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold text-green-600">Welcome!</h2>
          <p className="text-gray-600">
            Your phone number has been successfully verified.
          </p>
        </div>
      )}
      {message && (
        <p
          className={`mt-4 text-center text-sm ${
            message.toLowerCase().includes("success")
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  </div>
</>

  );
};

export default AccountModal;
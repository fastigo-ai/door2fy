import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { initOTPless } from "./utils/initOTPless"; // Import OTPless function

const AccountModal = ({ onClose }) => {
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const verifiedStatus = localStorage.getItem("isVerified") === "true";
    setIsVerified(verifiedStatus);

    if (!verifiedStatus) {
      // Initialize OTPless only if the user is not verified
      initOTPless(handleOTPlessLogin);
    }
  }, []);

  const handleOTPlessLogin = (otplessUser) => {
    console.log("User Logged In:", otplessUser);
    localStorage.setItem("isVerified", "true");
    localStorage.setItem("userPhoneNumber", otplessUser.mobile);
    setIsVerified(true);
    setMessage("Phone number verified successfully!");

    // 🔥 Remove the OTPless login page dynamically
    const otplessContainer = document.getElementById("otpless-login-page");
    if (otplessContainer) {
      otplessContainer.innerHTML = ""; // Clear the div
    }
  };

  const handleClose = () => {
    setMessage("");
    onClose();
  };

  return (
    <div className="font-sora">
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={handleClose}
      ></div>

      <div
        className="fixed bottom-0 md:top-[75px] md:right-1 z-50 md:z-20 w-full h-auto md:h-fit md:w-fit bg-white rounded-t-lg sm:rounded-lg shadow-lg p-6 overflow-y-auto"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-lg font-semibold">Sign in with OTPless</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <FaTimes size={20} />
          </button>
        </div>

        {isVerified ? (
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-600 my-8">Welcome!</h2>
            <p className="text-gray-600">Your phone number has been successfully verified.</p>
          </div>
        ) : (
          <div id="otpless-login-page" style={{
            
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)"}}></div> 
        )}

        {message && (
          <p className={`mt-4 text-center text-sm ${message.includes("successfully") ? "text-green-600" : "text-red-500"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AccountModal;

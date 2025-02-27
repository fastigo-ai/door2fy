import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../../config/firebase-config";

const AccountModal = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  // console.log(isVerified);
  // Load verification state from localStorage when component mounts
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
        size: "invisible",
        callback: () => {
          console.log("reCAPTCHA verified successfully");
        },
        "expired-callback": () => {
          console.warn("reCAPTCHA expired. Resetting...");
          setUpRecaptcha(); // Reset on expiration
        },
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
    if (!validatePhoneNumber(phoneNumber)) {
      setMessage(
        "Please enter a valid phone number in international format (e.g., +1234567890)"
      );
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      setUpRecaptcha(); // Always reset reCAPTCHA before use
      const appVerifier = window.recaptchaVerifier;

      if (!appVerifier) {
        throw new Error(
          "reCAPTCHA not initialized. Please refresh and try again."
        );
      }

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
      window.recaptchaVerifier = null;
      document.getElementById("recaptcha-container").innerHTML = ""; // Remove any rendered reCAPTCHA
    }
    setPhoneNumber("");
    setOtp("");
    setVerificationId(null);
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
        className="fixed bottom-0 md:top-[75px] md:right-1 z-50 md:z-20 w-full h-auto md:h-fit md:w-96 bg-white rounded-t-lg sm:rounded-lg shadow-lg p-6 overflow-y-auto"
        style={{ maxHeight: "90vh" }} // Ensures scrollability when clipped
        onClick={(e) => e.stopPropagation()} // Prevents closing on clicking inside modal
      >
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-lg font-semibold">Sign in with your phone</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
            disabled={loading}
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div id="recaptcha-container"></div>

        {!isVerified ? (
          <>
            {!verificationId ? (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm mb-2">
                    Phone Number (International format)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1234567890"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    disabled={loading}
                  />
                </div>
                <button
                  className={`w-full py-2 rounded-lg ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-cyan-600 hover:bg-cyan-700"
                  } text-white transition-colors`}
                  onClick={sendOTP}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send OTP"}
                </button>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm mb-2">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    placeholder="123456"
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
                  className={`w-full py-2 rounded-lg ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  } text-white transition-colors`}
                  onClick={verifyOTP}
                  disabled={loading}
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold text-green-600">Welcome!</h2>
            <p className="text-gray-600">
              Your phone number has been successfully verified.
            </p>
          </div>
        )}

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("successfully")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AccountModal;

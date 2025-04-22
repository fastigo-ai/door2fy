import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../contexts/CartContext";
import Navbar from "../../components/Navigation/Navbar";
import { TbArrowBackUp } from "react-icons/tb";
import Loader from "../../components/modals/Loader/loader"; 

const PrivacyPolicy = () => {
    const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const handlePageLoad = () => {
            setLoading(false);
          };
        
          if (document.readyState === "complete") {
            handlePageLoad(); // Page is already loaded
          } else {
            window.addEventListener("load", handlePageLoad);
          }
        
          return () => window.removeEventListener("load", handlePageLoad);
        }, []);

  return (
    <>
    <Loader loading={loading} />
      {!loading && (
        <>
      <Navbar
              toggleCart={() => setIsCartOpen(!isCartOpen)}
              cartItemCount={cartItems.length}
            />

      <div className="flex items-center justify-center my-10">
              <img src="/assets/images/icons1.png" alt="" />
              <button
                className="absolute left-4 flex top-4 md:hidden text-black mr-4 text-3xl"
                onClick={() => window.history.back()}
              >
                <TbArrowBackUp />
              </button>
            </div>

      <div className="max-w-5xl mx-auto mt-24 p-6 bg-gray-100 rounded-lg text-left font-sans">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
        <p>Effective Date: 26 Feb 2025</p>
        <p>Last Updated: 26 Feb 2025</p>

        {/* <p className="mt-4">At Door2fy, accessible through www.door2fy.com and our mobile application, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your information when you use our website and mobile app. By accessing or using our services, you agree to the terms of this policy.</p> */}

        {/* Information We Collect */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Information We Collect</h2>
          <p className="mb-4">We may collect the following information:</p>
          <ol className="list-decimal space-y-4 ml-4">
            <li>
              <h3 className="text-xl font-semibold text-gray-600">Personal Information</h3>
              <p>Name, email address, phone number, and other details you provide during registration or account setup.</p>
              <p>Payment information (processed securely through third-party gateways).</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-gray-600">Usage Information</h3>
              <p>Device information (e.g., mobile device ID, operating system, browser type).</p>
              <p>Log data, including IP address, app usage statistics, and interactions with our services.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-gray-600">Location Data</h3>
              <p>Approximate or precise location data when enabled on your device for better service delivery (e.g., location-specific recommendations).</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-gray-600">Cookies & Tracking Technologies</h3>
              <p>Cookies on the website and mobile app to enhance user experience and for analytics.</p>
            </li>
          </ol>
        </section>

        {/* How We Use Your Information */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use your data to:</p>
          <ol className="list-disc list-inside space-y-2 ml-4">
            <li>Provide and improve our services on both the website and mobile app.
            </li>
            <li>Facilitate account management, order processing, and customer support.
            </li>
            <li>Send you updates, promotions, or notifications based on your preferences.
            </li>
            <li>Analyze user behavior to improve app and website performance.
            </li>
          </ol>
        </section>

        {/* Share your information */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Sharing your information</h2>
          <p className="mb-4">We only share your data in the following cases:</p>
          <ol className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><b>Service Providers:</b> Third-party providers for hosting, payment processing, analytics, and app functionality.

            </li>
            <li><b>Legal Requirements:</b> Compliance with legal obligations or in response to lawful requests.
            </li>
          </ol>
          <p className="mb-4">We do not sell your personal data.</p>
        </section>

        {/* Data Security */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Data Security</h2>
          <p>Your data is stored securely using encryption and access control measures. While we strive to protect your information, no system can be guaranteed 100% secure.</p>
        </section>

        {/* Your Rights */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Access, modify, or delete your personal data.</li>
            <li>Opt-out of promotional communications via the "unsubscribe" link or app settings.</li>
            <li>Request a copy of the data we hold about you.</li>
          </ul>
          <p className="mt-4">
            For assistance, contact{" "}
            <a href="mailto:support@door2fy.com" className="text-blue-500 underline">
              support@door2fy.com
            </a>
          </p>
        </section>

        {/* App-service permissions */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">App-Specific Permissions</h2>
          <p className="mb-4">The Door2fy app may request the following permissions:</p>
          <ol className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><b>Location Access:</b> For location-based services (optional).
            </li>
            <li><b>Camera/Media Access:</b> For uploading photos or documents if required.
            </li>
            <li><b>Push Notifications:</b> To send you updates and alerts (can be disabled in settings).
            </li>
          </ol>
          <p className="mb-4">You can control these permissions in your device settings.</p>
        </section>

        {/* Cookies and Analytics */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Cookies and Analytics</h2>
          <p>We use cookies and third-party analytics tools like Google Analytics to monitor website and app usage. You can manage cookies through your browser or app settings.</p>
        </section>

        {/* Changes to This Policy */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Changes to This Policy</h2>
          <p>We may update this policy periodically. Changes will be reflected on this page with the updated effective date.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
          <p>For any questions, reach out to:</p>
          <address className="mt-2">
            Fastigo Technology Pvt Ltd <br />
            Email:{" "}
            <a href="mailto:support@door2fy.com" className="text-blue-500 underline">
              support@door2fy.com
            </a>{" "}
            <br />
            Website:{" "}
            <a href="https://www.door2fy.com" className="text-blue-500 underline">
              www.door2fy.com
            </a>
          </address>
        </section>
      </div>

      <Footer />
      </>
      )}
    </>
  );
};

export default PrivacyPolicy;

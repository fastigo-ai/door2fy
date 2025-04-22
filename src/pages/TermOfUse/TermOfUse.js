import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../contexts/CartContext";
import { TbArrowBackUp } from "react-icons/tb";
import Loader from "../../components/modals/Loader/loader"; 

const TermsOfUse = () => {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

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
      <Navbar toggleCart={toggleCart} cartItemCount={cartItems.length} />

      <div className="flex items-center justify-center my-10">
        <img src="/assets/images/icons1.png" alt="" />
        <button
          className="absolute left-4 flex top-4 md:hidden text-black mr-4 text-3xl"
          onClick={() => window.history.back()}
        >
          <TbArrowBackUp />
        </button>
      </div>

      <div className="max-w-5xl mx-auto mt-24 p-6 bg-white border border-gray-300 rounded-lg shadow-lg text-left">
        <h1 className="text-3xl font-bold text-left text-gray-800 mb-6">
          Terms & Conditions
        </h1>
        <p className="mb-8">Effective Date: 26 Feb 2025</p>

        <p className="mb-8">
          Welcome to Door2fy! By using our services, you agree to the following
          terms and conditions. Please read them carefully.
        </p>
        {/* Section: Definitions */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4">
            1. DEFINITIONS
          </h2>
          <ul className="list-disc ml-4">
            <li className="text-gray-700 text-justify leading-relaxed">
              "Company," "We," "Us," or "Our" refers to Door2fy.{" "}
            </li>
            <li className="text-gray-700 text-justify leading-relaxed">
              "User," "You," or "Your" refers to any individual or entity using
              our services.{" "}
            </li>
            <li className="text-gray-700 text-justify leading-relaxed">
              "Service" refers to the IT support, hardware support, software
              solutions, and technical assistance provided by Door2fy.{" "}
            </li>
          </ul>
        </section>

        {/* Section: Service Scope */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4">
            2. SERVICE SCOPE
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            We provide the following services:
          </p>

          <ul className="list-disc ml-4">
            <li className="text-gray-700 text-justify leading-relaxed">
              <b>Remote IT Support</b> – Software troubleshooting, cybersecurity
              services, and cloud
            </li>
            <li className="text-gray-700 text-justify leading-relaxed">
              <b>Hardware Support</b> – Diagnosis, configuration, repair, and
              installation of networking devices, servers, and IT
              infrastructure.{" "}
            </li>
            <li className="text-gray-700 text-justify leading-relaxed">
              <b>Technical Consultation</b> – Advisory on IT solutions and
              optimizations.{" "}
            </li>
            <li className="text-gray-700 text-justify leading-relaxed">
              <b>On-Site & Remote Assistance</b> – Support available based on
              the service package.{" "}
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-black  py-4">
            Service Limitations:
          </h3>
          <ul className="list-disc ml-4">
            <li>
              Hardware repair and replacement are subject to availability and
              warranty terms.
            </li>
            <li>
              Any third-party hardware or software issues are not covered unless
              agreed upon in writing.
            </li>
            <li>
              We are not responsible for data loss during hardware repairs or
              troubleshooting.
            </li>
          </ul>
        </section>
        {/* Section: User Responsibilities */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4">
            3. USER RESPONSIBILITIES
          </h2>

          <ul className="list-disc ml-4">
            <li className="text-gray-700 text-justify leading-relaxed">
              You must provide accurate and complete information for
              troubleshooting and service delivery.
            </li>
            <li className="text-gray-700 text-justify leading-relaxed">
              You agree to use our services <b>lawfully</b> and <b>ethically</b>
              .
            </li>
            <li className="text-gray-700 text-justify leading-relaxed">
              You must ensure that you have the necessary <b>permissions</b> for
              any software, systems, or data shared with us.
            </li>
          </ul>
        </section>

        {/* Section: Refund & On-Site Support Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4">
            4. REFUND & ON-SITE SUPPORT POLICY
          </h2>
          <ol>
            <li>
              <h3 className="text-xl font-semibold text-black  py-4">
                4.1. Remote Support Failure Handling
              </h3>
              <ul className="list-disc ml-4">
                <li>
                  If an issue{" "}
                  <b>cannot be resolved remotely, no refund will be provided</b>
                  .
                </li>
                <li>
                  Instead, we will offer an <b>on-site support option</b>{" "}
                  (additional charges apply).
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-black  py-4">
                4.2. On-Site Support Charges
              </h3>
              <ul className="list-disc ml-4">
                <li>
                  On-site visit charges will be <b>separately applicable</b>{" "}
                  based on location and issue complexity.
                </li>
                <li>
                  Charges will be <b>shared with the client in advance</b>, and
                  confirmation will be required before dispatching an engineer.
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-black  py-4">
                4.3. Refund Policy
              </h3>
              <ul className="list-disc ml-4">
                <li>
                  Refund will be issued{" "}
                  <b>only if Door2fy fails to resolve the issue</b> and the
                  client refuses an on-site visit.
                </li>
                <li>
                  If the issue is due to{" "}
                  <b>third-party software/hardware limitations</b>, refund{" "}
                  <b>will not be applicable.</b>
                </li>
                <li>
                  If a client{" "}
                  <b>
                    cancels the request after service initiation, no refund will
                    be provided.
                  </b>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-black  py-4">
                4.4. Escalation & Resolution Timeline
              </h3>
              <ul className="list-disc ml-4">
                <li>
                  If remote troubleshooting does not resolve the issue, the
                  client must <b>submit an escalation request.</b>
                </li>
                <li>
                  Our team will analyze the issue and provide the best possible
                  solution within <b>24-48 hours.</b>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-black  py-4">
                4.5. Hardware Replacement Cases
              </h3>
              <ul className="list-disc ml-4">
                <li>
                  If an issue is caused by <b>hardware failure</b> or{" "}
                  <b>
                    third-party vendor limitations, Door2fy is not responsible.
                  </b>
                </li>
                <li>
                  In such cases, customers must contact the{" "}
                  <b>vendor or manufacturer.</b>
                </li>
              </ul>
            </li>
          </ol>
        </section>

        {/* Section: Confidentiality & Data Security*/}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4">
            5. CONFIDENTIALITY & DATA SECURITY
          </h2>

          <ul className="list-disc ml-4">
            <li className="text-gray-700 text-justify leading-relaxed">
              We respect your privacy and take reasonable measures to protect
              your data.
            </li>
            <li className="text-gray-700 text-justify leading-relaxed">
              We do not share your information with third parties without your
              consent, except as required by law.
            </li>
            <li className="text-gray-700 text-justify leading-relaxed">
              Users are responsible for taking backups before requesting
              hardware or software changes.
            </li>
          </ul>
        </section>
        {/* Section: Limitation of Liability*/}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4">
            6. LIMITATION OF LIABILITY
          </h2>

          <ul className="list-disc ml-4">
            <li className="text-gray-700 text-justify leading-relaxed">
              We are not responsible for <b>data loss</b>, system failures, or
              damages resulting from third-party software or external
              cyberattacks.
            </li>
            <li className="text-gray-700 text-justify leading-relaxed">
              Any hardware issues arising due to manufacturing defects will be
              the responsibility of the respective brand or vendor.
            </li>
            <li className="text-gray-700 text-justify leading-relaxed">
              Our total liability under any claim shall not exceed the amount
              paid for the service.
            </li>
          </ul>
        </section>
        {/* Section: Warranty & Support*/}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4">
            7. WARRANTY & SUPPORT
          </h2>

          <ul className="list-disc ml-4">
            <li className="text-gray-700 text-justify leading-relaxed">
            Hardware warranty will be as per the manufacturer's policy.
            </li>
            <li className="text-gray-700 text-justify leading-relaxed">
            Post-installation support is available only for the agreed duration.
            </li>
          </ul>
        </section>

        {/* Section: Termination of Service*/}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4">
            8. TERMINATION OF SERVICE
          </h2>

          <ul className="list-disc ml-4">
            <li className="text-gray-700 text-justify leading-relaxed">
            We reserve the right to <b>terminate</b> or <b>suspend</b> services if a user violates any terms.
            </li>
            <li className="text-gray-700 text-justify leading-relaxed">
            You may discontinue using our services at any time.
            </li>
            
          </ul>
        </section>
        {/* Section: Changes to Terms*/}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4">
            9. CHANGES TO TERMS
          </h2>

          <ul className="list-disc ml-4">
            <li className="text-gray-700 text-justify leading-relaxed">
            We may update these Terms & Conditions from time to time. Any changes will be posted on our website.
            </li>
          </ul>
        </section>
        {/* Section: Governing Law*/}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b-2 border-black pb-2 mb-4">
            10. GOVERNING LAW
          </h2>

          <ul className="list-disc ml-4">
            <li className="text-gray-700 text-justify leading-relaxed">
            These terms shall be governed by the laws of India, and any disputes shall be resolved in the courts of New Delhi, Delhi India
            </li>
           
          </ul>
        </section>

        <p>For any queries, contact us at <a href="mailto:support@door2fy.com" className="text-cyan-600 hover:underline">support@door2fy.com</a></p>
      </div>

      <Footer />
      </>
      )}
    </>
  );
};

export default TermsOfUse;

import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import { useCart } from "../../contexts/CartContext";
import { TbArrowBackUp } from "react-icons/tb";
import Loader from "../../components/modals/Loader/loader"; 

const AntiDiscriminationPolicy = () => {
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

      <div className="max-w-4xl mx-auto mt-24 px-6 py-8 bg-white shadow-lg rounded-lg font-sora">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Anti-Discrimination Policy
        </h1>

        {/* Section 1: Purpose */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-black border-b-2 border-black pb-2">
            Purpose
          </h2>
          <p className="text-gray-600 mt-3 text-justify">
            At <b>Door2fy</b>, we are committed to fostering an inclusive,
            respectful, and equitable environment for all. Discrimination in any
            form is strictly prohibited, ensuring that all individuals are
            treated with fairness and dignity.
          </p>
        </section>

        {/* Section 2: Scope */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-black border-b-2 border-black pb-2">
            Scope
          </h2>
          <p className="text-gray-600 mt-3 text-justify">
            This policy applies to all employees, contractors, freelancers, and
            interns. All customers, vendors, and business partners interacting
            with our company. Any setting related to company operations,
            including physical workplaces, virtual platforms, client sites, and
            work-related social events.
          </p>
        </section>

        {/* Section 3: Prohibited Discrimination */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-black border-b-2 border-black pb-2">
            Prohibited Discrimination
          </h2>
          <p className="text-gray-600 mt-3 text-justify">
            Discrimination based on any of the following characteristics is
            strictly prohibited: Race, color, ethnicity, or nationality Gender,
            gender identity, or gender expression, Sexual orientation, Age,
            Religion or beliefs Disability, medical condition, or genetic
            information, Marital status, pregnancy, or parental status,
            Socioeconomic background, Any other characteristic protected by
            applicable laws.
          </p>
        </section>
        {/* Section 4: Workplace Conduct & Expectations */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-black border-b-2 border-black pb-2">
            Workplace Conduct & Expectations
          </h2>
          <p className="text-gray-600 mt-3 text-justify">
            All employees and stakeholders must treat each other with respect
            and professionalism.
          </p>
          <p className="text-gray-600 mt-3 text-justify">
            Harassment, bias, stereotyping, or unfair treatment based on any
            protected characteristic will not be tolerated.
          </p>
          <p className="text-gray-600 mt-3 text-justify">
            Recruitment, promotions, compensation, and other employment
            decisions must be made based on merit and qualifications, not
            personal biases.
          </p>
          <p className="text-gray-600 mt-3 text-justify">
            A zero-tolerance approach will be taken against any form of
            discrimination, harassment, or retaliation.
          </p>
        </section>

        {/* Section 5: Reporting & Complaint Process */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-black border-b-2 border-black pb-2">
            Reporting & Complaint Process
          </h2>
          <p className="text-gray-600 mt-3 text-justify">
            If you experience or witness discrimination, you are encouraged to
            report it immediately through one of the following channels:{" "}
            <ol className="list-disc list-inside space-y-2 ml-4">
                <li>Directly to HR or a designated compliance officer.</li>
                <li>Via the company's confidential reporting system (if available).</li>
                <li>By contacting 
                    <a
              href="mailto:support@door2fy.com"
              className="text-blue-500 font-medium"
            >
              support@door2fy.com
            </a> for assistance.</li>
            </ol>
            
          </p>
        </section>

        {/* Section 6: Consequences of Violations */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-black border-b-2 border-black pb-2">
            Consequences of Violations
          </h2>
          <p className="text-gray-600 mt-3 text-justify">
          Any employee or stakeholder found violating this policy may face consequences, including but not limited to:</p>
          <ol className="list-disc list-inside space-y-2 ml-4">
                <li>Warnings or mandatory training</li>
                <li>Suspension</li>
                <li>Termination of employment or contract</li>
                <li>Legal action, if applicable</li>
            </ol>
        </section>

        {/* Section 7: Commitment to Diversity */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-black border-b-2 border-black pb-2">
            Commitment to Diversity & Inclusion
          </h2>
          <p className="text-gray-600 mt-3 text-justify">
          We are dedicated to promoting diversity, equity, and inclusion (DEI) through:
          </p>
          <ol className="list-disc list-inside space-y-2 ml-4">
                <li>Regular anti-discrimination training for employees.</li>
                <li>Policies that ensure fair hiring, promotions, and compensation.</li>
                <li>Continuous evaluation and improvement of workplace policies and culture.</li>
            </ol>
        </section>

        {/* Section 8: Legal Compliance */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-black border-b-2 border-black pb-2">
            Legal Compliance
          </h2>
          <p className="text-gray-600 mt-3 text-justify">
          This policy aligns with all applicable local, national, and international anti-discrimination laws and will be updated periodically to reflect legal changes and best practices.
          </p>
          <p className="text-gray-600 mt-3 text-justify">
          By working with      <a
              href="mailto:support@door2fy.com"
              className="text-blue-500 font-medium"
            >
              support@door2fy.com
            </a>, all employees, customers, and partners agree to uphold this policy and contribute to a discrimination-free environment.       </p>
        </section>
      </div>

      {/* Footer */}
      <Footer />
      </>
      )}
    </>
  );
};

export default AntiDiscriminationPolicy;

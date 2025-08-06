import React, { useState } from "react";
import { FaCreditCard, FaArrowLeft } from "react-icons/fa";

const PaymentStep = ({ nextStep, prevStep, setIsPaid }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [error, setError] = useState("");

  const handlePay = () => {
    if (!cardHolder || !cardNumber || !expiry || !cvv) {
      setError("Please fill in all the fields.");
      return;
    }

    setError("");
    setIsPaid(true);
    nextStep();
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
        <FaCreditCard /> Payment Details
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 text-start">
            Card Holder Name
          </label>
          <input
            type="text"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 text-start">
            Card Number
          </label>
          <input
            type="text"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="XXXX XXXX XXXX XXXX"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1 text-start">
              Expiry Date
            </label>
            <input
              type="text"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700 mb-1 text-start">
              CVV
            </label>
            <input
              type="password"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="•••"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>

        {error && (
          <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
        )}
      </div>

      <div className="flex justify-between items-center pt-4 border-t mt-6">
        <button
          onClick={prevStep}
          className="flex items-center text-sm text-blue-600 hover:underline"
        >
          <FaArrowLeft className="mr-1" /> Back
        </button>
        <button
          onClick={handlePay}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
        >
          Pay ₹2,499
        </button>
      </div>
    </div>
  );
};

export default PaymentStep;

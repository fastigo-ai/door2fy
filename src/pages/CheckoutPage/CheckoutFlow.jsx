import React, { useState, useEffect } from "react";
import CartStep from "./CartStep";
import PaymentStep from "./PaymentStep";
import ConfirmationStep from "./ConfirmationStep";

const CheckoutFlow = () => {
  const [step, setStep] = useState(1); // 1 = cart, 2 = payment, 3 = confirmation
  const [isPaid, setIsPaid] = useState(false);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // If payment completes, ensure we move to confirmation
  useEffect(() => {
    if (isPaid) {
      setStep(3);
    }
  }, [isPaid]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner with background overlay */}
      <div
        className="relative h-96 flex items-center justify-center text-white"
        style={{
          // backgroundImage: `url("https://i.postimg.cc/rsd5p8dX/doodle-background-296efd59-1.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
           backgroundColor: "#06b6d4",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="text-3xl font-semibold font-sans">Your Cart</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-32 z-10 relative">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {step === 1 && <CartStep nextStep={nextStep} />}
          {step === 2 && (
            <PaymentStep
              nextStep={nextStep}
              prevStep={prevStep}
              setIsPaid={setIsPaid}
            />
          )}
          {step === 3 && <ConfirmationStep isPaid={isPaid} />}
        </div>
      </div>
    </div>
  );
};

export default CheckoutFlow;

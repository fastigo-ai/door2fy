import React from "react";
import { CheckCircle2 } from "lucide-react";

const ConfirmationStep = ({ isPaid }) => {
  return (
    <div className="text-center">
      {isPaid ? (
        <>
          <CheckCircle2 className="text-green-500 w-16 h-16 mx-auto" />
          <h2 className="text-2xl font-bold mt-4">Order Confirmed!</h2>
          <p className="text-gray-600">Thank you for your purchase. A confirmation email has been sent.</p>
        </>
      ) : (
        <p className="text-red-500">Payment failed or not completed.</p>
      )}
    </div>
  );
};

export default ConfirmationStep;

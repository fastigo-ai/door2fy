import React, { useState, useEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { useLocation, useNavigate, Link } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");
  const [cartItems, setCartItems] = useState([]);
  const [slotDetails, setSlotDetails] = useState({
    date: "",
    timeSlot: "",
  });
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    pincode: "",
    cityState: "",
    address: "",
    landmark: "",
  });

  // Initialize data based on navigation source
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const bookingDetails = location.state?.bookingDetails;
    console.log(bookingDetails);
    if (bookingDetails) {
      // Coming from BookingModal
      setCartItems([
        {
          name: bookingDetails.name,
          price: bookingDetails.price,
          quantity: 1,
          serviceType: bookingDetails.category,
        },
      ]);
      setSlotDetails({
        date: bookingDetails.date,
        timeSlot: bookingDetails.timeSlot,
      });
    } else {
      // Coming from CartModal
      setCartItems(storedCartItems);
    }
  }, [location]);
  // console.log(cartItems);
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  

  const handleSubmit = async () => {
    const payload = {
      cartItems,
      customerDetails,
      slotDetails,
      totalAmount: calculateTotal(),
    };

    try {
      const response = await fetch("https://formspree.io/f/mjkvkbze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Order submitted successfully!");
        navigate("/");
      }
    } catch (error) {
      alert("Failed to submit order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sora">
      <button
        className="absolute left-4 flex top-4 text-black mr-4 text-3xl"
        onClick={() => navigate(-1)}
      >
        <TbArrowBackUp />
      </button>
      {/* Header Section */}
      <div className="bg-cyan-500 p-4 pb-32 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-8 text-white">
            <div className="text-2xl font-semibold">Checkout</div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        {/* Order Summary Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">{item.serviceType}</p>
                </div>
                <p className="font-medium">₹{item.price * item.quantity}</p>
              </div>
            ))}
            <div className="flex justify-between items-center pt-4 font-bold">
              <span>Total Amount</span>
              <span>₹{calculateTotal()}</span>
            </div>
          </div>
        </div>

        {/* Customer Details Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-left">
          <h2 className="text-xl font-bold mb-4">Customer Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(customerDetails).map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type={key === "email" ? "email" : "text"}
                  value={value}
                  onChange={(e) =>
                    setCustomerDetails((prev) => ({
                      ...prev,
                      [key]: e.target.value,
                    }))
                  }
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slot Details */}
        {!location.state?.bookingDetails && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Service Slot</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  value={slotDetails.date}
                  onChange={(e) =>
                    setSlotDetails((prev) => ({
                      ...prev,
                      date: e.target.value,
                    }))
                  }
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Time Slot
                </label>
                <div className="flex space-x-2">
                  {["10am-12pm", "12pm-2pm", "2pm-4pm", "4pm-6pm"].map(
                    (slot) => (
                      <button
                        key={slot}
                        value={slot}
                        onClick={() =>
                          setSlotDetails((prev) => ({
                            ...prev,
                            timeSlot: slot,
                          }))
                        }
                        className={`px-2 py-2 rounded-md border-2 ${
                          slotDetails.timeSlot === slot
                            ? "bg-cyan-500 text-white border-cyan-700"
                            : "bg-white text-black border-grey-300"
                        } focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                      >
                        {slot}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Terms and Submit */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-yellow-400 flex items-center justify-center rounded">
                <span className="text-black">✓</span>
              </div>
              <p className="text-sm text-gray-600">
                By proceeding, you agree to the{" "}
                <Link to="/terms" className="text-cyan-600 hover:underline">
                  Terms of Service
                </Link>
              </p>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full md:w-auto px-8 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors"
            >
              Complete Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

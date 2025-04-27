import React, { useState, useEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useLocationContext } from "../../contexts/LocationContext";
import Loader from "../../components/modals/Loader/loader"; 

const CheckoutPage = () => {
  const locationBook = useLocation();
  const { location } = useLocationContext();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");
  const [cartItems, setCartItems] = useState([]);
  const [customerErrors, setCustomerErrors] = useState({});
  const [errors, setErrors] = useState({
    customer: "",
    slot: "",
    cart: ""
  });
  const [slotDetails, setSlotDetails] = useState({
    date: "",
    timeSlot: "",
  });
  const postal_code = location.address_components.find((component) =>
    component.types.includes("postal_code")
  )?.long_name || "";
  const phone = localStorage.getItem("userPhoneNumber");
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: phone,
    pincode: postal_code,
    city: location.title,
    address: location.description,
    landmark: "",
  });

  const [savedCustomerDetails, setSavedCustomerDetails] = useState([]);
  const [showAddNewForm, setShowAddNewForm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

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

  
  // Initialize data based on navigation source
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const bookingDetails = locationBook.state?.bookingDetails;
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

    // Retrieve customer details from session storage
    const storedCustomerDetails =
      JSON.parse(sessionStorage.getItem("customerDetails")) || [];
    setSavedCustomerDetails(storedCustomerDetails);
  }, [locationBook]);
  // console.log(cartItems);
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleAddNewCustomer = () => {
    const errors = {};

  // Validate required fields (landmark is optional)
  if (!customerDetails.name) errors.name = "Name is required.";
  if (!customerDetails.email) errors.email = "Email is required.";
  if (!customerDetails.phone) errors.phone = "Phone is required.";
  if (!customerDetails.pincode) errors.pincode = "Pincode is required.";
  if (!customerDetails.city) errors.city = "City is required.";
  if (!customerDetails.address) errors.address = "Address is required.";

  // If there are errors, show them and stop
  if (Object.keys(errors).length > 0) {
    setCustomerErrors(errors);
    return;
  }
    setSavedCustomerDetails((prevDetails) => {
      const newDetails = [...prevDetails, customerDetails];
      sessionStorage.setItem("customerDetails", JSON.stringify(newDetails));
      return newDetails;
    });
    setCustomerDetails({
      name: "",
      email: "",
      phone: "",
      pincode: postal_code,
      city: location.title,
      address: location.description,
      landmark: "",
    });
    setShowAddNewForm(false);
  };

  const handleCustomerSelection = (index) => {
    setSelectedCustomer(index);
  };

  const handleEditCustomerDetails = (index) => {
    const customer = savedCustomerDetails[index];
    setCustomerDetails(customer);
    setShowAddNewForm(true);
    // Remove the edited customer from the list temporarily
    const updatedDetails = savedCustomerDetails.filter((_, i) => i !== index);
    sessionStorage.setItem("customerDetails", JSON.stringify(updatedDetails));
    setSavedCustomerDetails(updatedDetails);
  };

  const handleSubmit = async () => {
    // Ensure customerDetails is populated
    let hasError = false;
  const newErrors = { customer: "", slot: "", cart: "" };

  if (selectedCustomer === null) {
    newErrors.customer = "Please select a customer.";
    hasError = true;
  }

  if (cartItems.length === 0) {
    newErrors.cart = "Your cart is empty. Please add items.";
    hasError = true;
  }

  if (!slotDetails.date || !slotDetails.timeSlot) {
    newErrors.slot = "Please select a slot.";
    hasError = true;
  }

  setErrors(newErrors);

  if (hasError) {
    return; // stop submission
  }
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const amount = calculateTotal() * 100; // in paisa
    const options = {
      key: "rzp_live_ZGueWawRAvrjTV", // ✅ Replace with your Razorpay Key
      amount: amount,
      currency: "INR",
      name: "Door2Fy",
      description: "Service Payment",
      handler: async function (response) {
        const selectedCustomerDetails = savedCustomerDetails[selectedCustomer];
        const payload = {
          cartItems,
          customerDetails: selectedCustomerDetails,
          slotDetails,
          totalAmount: calculateTotal(),
          razorpay_payment_id: response.razorpay_payment_id,
        };

        try {
          const apiRes = await fetch("https://formspree.io/f/movvpewj", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (apiRes.ok) {
            alert("Payment Successful & Order Submitted!");
            navigate("/");
          } else {
            alert("Order submission failed. Try again.");
          }
        } catch (err) {
          console.error(err);
          alert("Something went wrong. Try again.");
        }
      },
      prefill: {
        name: customerDetails.name,
        email: customerDetails.email,
        contact: customerDetails.phone,
      },
      notes: {
        address: customerDetails.address,
      },
      theme: {
        color: "#06b6d4",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const timeSlots = [
    { label: "10am-12pm", time: "10:00" },
    { label: "12pm-2pm", time: "12:00" },
    { label: "2pm-4pm", time: "14:00" },
    { label: "4pm-6pm", time: "16:00" },
  ];

  const isSlotDisabled = (slotTime) => {
    if (!slotDetails.date) {
      return true; // Disable all slots if no date is selected
    }
  
    const now = new Date();
    const slotDateTime = new Date(slotDetails.date);
  
    if (isNaN(slotDateTime.getTime())) {
      return true; // Disable if selectedDate is invalid
    }
  
    const [hour, minute] = slotTime.split(":").map(Number);
    slotDateTime.setHours(hour, minute, 0, 0);
  
    return slotDateTime <= now; // Disable if the slot is in the past
  };

  return (
    <div className="max-h-screen bg-gray-50 font-sora">
      <Loader loading={loading} />
      {!loading && (
        <>
      <button
        className="absolute left-4 flex top-4 text-black mr-4 text-3xl"
        onClick={() => navigate(-1)}
      >
        <TbArrowBackUp />
      </button>
      {/* Header Section */}
      <div className="bg-cyan-500 p-4 pb-32 ">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center space-x-8 text-white">
            <div className="text-2xl font-semibold">Checkout</div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
        {/* Order Summary Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="text-left">
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
          {errors.cart && (
  <p className="text-red-500 text-sm mt-1">{errors.cart}</p>
)}
        </div>
        
        {/* Customer Details Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-left">
          <h2 className="text-xl font-bold mb-4">Customer Details</h2>

          {/* Customer Details List */}
          <div className="space-y-4">
            {savedCustomerDetails.length === 0 ? (
              <p>No details available.</p>
            ) : (
              savedCustomerDetails.map((detail, index) => (
                <div key={index} className="">
                  <div className="flex">
                    <input
                      type="checkbox"
                      checked={selectedCustomer === index}
                      onChange={() => handleCustomerSelection(index)}
                    />

                    <div className="ml-3">
                      <p>
                        {detail.name} - {detail.email}
                      </p>
                      <p className="text-xs">
                        {detail.phone}, {detail.address}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleEditCustomerDetails(index)}
                    className="text-cyan-600 hover:underline ml-6"
                  >
                    Edit
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Add New Customer Button */}
          <button
            onClick={() => setShowAddNewForm(!showAddNewForm)}
            className="mt-4 text-cyan-600 hover:underline"
          >
            {showAddNewForm ? "Cancel" : "Add New Customer"}
          </button>

          {/* Add New Customer Form */}
          {showAddNewForm && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {Object.entries(customerDetails).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    type={key === "email" ? "email" : "text"}
                    value={value}
                    onChange={(e) =>{
                      setCustomerDetails((prev) => ({
                        ...prev,
                        [key]: e.target.value,
                      }));
                      setCustomerErrors((prevErrors) => ({
                        ...prevErrors,
                        [key]: "", // Clear error on change
                      }));
                    }}
                    className={`w-full p-2 border rounded-md focus:ring-2 ${
                      customerErrors[key] ? "border-red-500" : "border-gray-300 focus:ring-cyan-500"
                    }`}
                  />
                  {customerErrors[key] && (
          <p className="text-red-500 text-xs mt-1">{customerErrors[key]}</p>
        )}
                </div>
              ))}
            </div>
          )}

          {showAddNewForm && (
            <button
              onClick={handleAddNewCustomer}
              className="w-full mt-4 px-8 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors"
            >
              Save Details
            </button>
          )}
          {errors.customer && (
  <p className="text-red-500 text-sm mt-1">{errors.customer}</p>
)}
        </div>
        

        {/* Slot Details */}
        {!locationBook.state?.bookingDetails && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Service Slot</h2>
            <div className="space-y-6">
              {/* Select Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: 5 }, (_, i) => {
                    const today = new Date();
                    today.setDate(today.getDate() + i);
                    const formattedDate = today.toISOString().split("T")[0];
                    const month = today.toLocaleDateString("en-US", {
                      month: "short",
                    });
                    const day = today.getDate();
                    const weekday = today.toLocaleDateString("en-US", {
                      weekday: "short",
                    });

                    return (
                      <button
                        key={i}
                        className={`py-2 px-4 rounded-md border ${
                          slotDetails.date === formattedDate
                            ? "border-black bg-cyan-500 text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}
                        onClick={() =>
                          setSlotDetails((prev) => ({
                            ...prev,
                            date: formattedDate,
                          }))
                        }
                      >
                        <div className="flex flex-col items-center">
                          <span className="font-semibold">{`${month}, ${day}`}</span>
                          <span className="text-sm text-gray-600">
                            {weekday}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Select Time Slot */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Time Slot
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      className={`py-2 px-4 rounded-md border ${
                        isSlotDisabled(slot.time)
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : slotDetails.timeSlot === slot.label
                          ? "border-black bg-cyan-500 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                      onClick={() =>
                        !isSlotDisabled(slot.time) &&
                        setSlotDetails((prev) => ({
                          ...prev,
                          timeSlot: slot.label, // Set only the label or time as a string
                        }))
                      }
                      disabled={isSlotDisabled(slot.time)}
                    >
                      {slot.label}{" "}
                      {/* Correctly render the label of the slot */}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {errors.slot && (
  <p className="text-red-500 text-sm mt-1">{errors.slot}</p>
)}
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
              // disabled={
              //   selectedCustomer === null ||
              //   !slotDetails.date ||
              //   !slotDetails.timeSlot||
              //   cartItems.length === 0
              // }
              className={`w-full md:w-auto px-8 py-3  text-white rounded-full bg-cyan-700 transition-colors`}
            >
              Complete Order
            </button>
          </div>
        </div>
      </div>
      </>
      )}
    </div>
  );
};

export default CheckoutPage;

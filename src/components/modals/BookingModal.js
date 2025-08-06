import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AccountModal from "./AccountModal";

const BookingModal = ({ onClose, onVerify }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [dateOptions, setDateOptions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Generate 5 dates starting from today
    const today = new Date();
    const dates = Array.from({ length: 5 }, (_, i) => {
      const date = new Date();
      date.setDate(today.getDate() + i);
      return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    });
    setDateOptions(dates);
  }, []);

  const handleCheckout = () => {
    const isVerified = localStorage.getItem("isVerified");
    if (isVerified) {
      navigate("/checkout", {
        state: {
          bookingDetails: {
            name: selectedItem.itemName,
            price: selectedItem.itemPrice,
            category: selectedCategory,
            date: selectedDate,
            timeSlot: selectedTimeSlot,
          },
        },
      });
    } else {
      onVerify();
    }
  };

  const timeSlots = [
    { label: "10am-12pm", time: "10:00" },
    { label: "12pm-2pm", time: "12:00" },
    { label: "2pm-4pm", time: "14:00" },
    { label: "4pm-6pm", time: "16:00" },
  ];

  const isSlotDisabled = (slotTime) => {
    if (!selectedDate) {
      // If no date is selected, disable all slots
      return true;
    }

    const now = new Date();
    const slotDateTime = new Date(selectedDate);

    if (isNaN(slotDateTime.getTime())) {
      console.log("Invalid selected date:", selectedDate);
      return true; // Disable if selectedDate is invalid
    }

    const [hour, minute] = slotTime.split(":").map(Number);
    slotDateTime.setHours(hour, minute, 0, 0); // Set the time for the selected date
    console.log(slotDateTime);
    console.log(now);

    return slotDateTime <= now; // Disable if the slot is in the past
  };

  const categories = [
    {
      name: "Macbook Support",
      items: [
        {
          itemName: "Not Sure About the Problem",
          itemDescription: "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 99,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Excel Not Working",
          itemDescription:
            "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 199,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Laptop Hanging or Freezing",
          itemDescription:
            "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 199,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "MacBook Starting Slowly",
          itemDescription:
            "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 199,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Wi-Fi Not Connecting",
          itemDescription: "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 199,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "MacOS Updates Not Installing",
          itemDescription: "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 199,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Software Not Opening or Crashing",
          itemDescription: "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 119,
          itemImage: "/assets/images/Login.webp",
        },
      ],
    },
    {
      name: "Windows Support",
      items: [
        {
          itemName: "Not Sure About the Problem",
          itemDescription: "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 99,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Excel Not Working",
          itemDescription:
            "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 99,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Laptop Hanging or Freezing",
          itemDescription:
            "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 99,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Windows Starting Slowly",
          itemDescription:
            "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 199,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Wi-Fi Not Connecting",
          itemDescription: "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 99,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Windows Updates Not Installing",
          itemDescription: "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 119,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Software Not Opening or Crashing",
          itemDescription: "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 99,
          itemImage: "/assets/images/Login.webp",
        },
      ],
    },
    {
      name: "Desktop Support",
      items: [
        {
          itemName: "Not Sure About the Problem",
          itemDescription: "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 99,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Excel Not Working",
          itemDescription:
            "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 99,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Laptop Hanging or Freezing",
          itemDescription:
            "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 99,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Windows Starting Slowly",
          itemDescription:
            "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 199,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Wi-Fi Not Connecting",
          itemDescription: "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 99,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Windows Updates Not Installing",
          itemDescription: "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 119,
          itemImage: "/assets/images/Login.webp",
        },
        {
          itemName: "Software Not Opening or Crashing",
          itemDescription: "Our experts will diagnose the problem and provide the best possible solution",
          itemPrice: 99,
          itemImage: "/assets/images/Login.webp",
        },
      ],
    },
    // {
    //   name: "Printer Support",
    //   items: [
    //     {
    //       itemName: "Not sure of the issue - Other issue",
    //       itemDescription:
    //         "We handle everything! Select this if you are not sure of the issue",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //     {
    //       itemName: "Windows 10, 11 Licence",
    //       itemDescription:
    //         "We provide a licence for your Windows PC or Laptop. Licence valid for 1 year",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //     {
    //       itemName: "Windows Driver Related issue",
    //       itemDescription:
    //         "We fix all driver-related issues in just a few minutes",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //     {
    //       itemName: "MS Office related issue",
    //       itemDescription:
    //         "We handle everything! Select this if you are not sure of the issue",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //     {
    //       itemName: "Windows Password issue",
    //       itemDescription:
    //         "We handle everything! Select this if you are not sure of the issue",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //   ],
    // },
    // {
    //   name: "Coding Support",
    //   items: [
    //     {
    //       itemName: "Not sure of the issue - Other issue",
    //       itemDescription:
    //         "We handle everything! Select this if you are not sure of the issue",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //     {
    //       itemName: "Windows 10, 11 Licence",
    //       itemDescription:
    //         "We provide a licence for your Windows PC or Laptop. Licence valid for 1 year",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //     {
    //       itemName: "Windows Driver Related issue",
    //       itemDescription:
    //         "We fix all driver-related issues in just a few minutes",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //     {
    //       itemName: "MS Office related issue",
    //       itemDescription:
    //         "We handle everything! Select this if you are not sure of the issue",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //     {
    //       itemName: "Windows Password issue",
    //       itemDescription:
    //         "We handle everything! Select this if you are not sure of the issue",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //   ],
    // },
    // {
    //   name: "Service Support",
    //   items: [
    //     {
    //       itemName: "Not sure of the issue - Other issue",
    //       itemDescription:
    //         "We handle everything! Select this if you are not sure of the issue",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //     {
    //       itemName: "Windows 10, 11 Licence",
    //       itemDescription:
    //         "We provide a licence for your Windows PC or Laptop. Licence valid for 1 year",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //     {
    //       itemName: "Windows Driver Related issue",
    //       itemDescription:
    //         "We fix all driver-related issues in just a few minutes",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //     {
    //       itemName: "MS Office related issue",
    //       itemDescription:
    //         "We handle everything! Select this if you are not sure of the issue",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //     {
    //       itemName: "Windows Password issue",
    //       itemDescription:
    //         "We handle everything! Select this if you are not sure of the issue",
    //       itemPrice: 99,
    //       itemImage: "/assets/images/Login.webp",
    //     },
    //   ],
    // },
  ];

  const handleCategoryChange = (e) => {
    const category = categories.find((cat) => cat.name === e.target.value);
    setSelectedCategory(category.name);
    setSelectedItem(""); // Reset selected item
  };

  // Function to handle item selection
  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const isCheckoutDisabled =
    !selectedDate || !selectedTimeSlot || !selectedCategory || !selectedItem;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed bottom-0 md:top-[75px] md:right-1 w-full h-auto md:h-fit md:w-96 bg-white rounded-lg shadow-lg p-6 z-50 md:z-20 font-sora overflow-y-auto"
       style={{ maxHeight: "90vh" }} // Ensures scrollability when clipped
       onClick={(e) => e.stopPropagation()} // Prevents closing on clicking inside modal
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Book an Appointment
          </h2>
          <button className="text-gray-500 text-xl" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 mt-6">
          
          {/* Select Date */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Select Date
            </label>
            <div className="grid grid-cols-5 gap-2">
              {dateOptions.map((date, index) => {
                const formattedDate = new Date(date);
                const month = formattedDate.toLocaleDateString("en-US", {
                  month: "short",
                }); // e.g., "Jan"
                const day = formattedDate.getDate(); // e.g., 26
                const weekday = formattedDate.toLocaleDateString("en-US", {
                  weekday: "short",
                }); // e.g., "Sat"

                return (
                  <button
                    key={index}
                    className={`py-2 px-4 rounded-md border ${
                      selectedDate === date
                        ? "border-black bg-cyan-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    <div className="flex flex-col items-center">
                      <span className="font-semibold">{`${month}, ${day}`}</span>
                      <span className="text-sm text-gray-600">{weekday}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Select Time Slot */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Select Time Slot
            </label>
            <div className="grid grid-cols-2 gap-4">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 rounded-md border ${
                    isSlotDisabled(slot.time)
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : selectedTimeSlot === slot.label
                      ? "border-black bg-cyan-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                  disabled={isSlotDisabled(slot.time)}
                  onClick={() => setSelectedTimeSlot(slot.label)}
                >
                  {slot.label}
                </button>
              ))}
            </div>
          </div>

          {/* Select Category */}
          <div>
            <label className="block text-gray-700 text-left text-sm font-medium mb-2">
              Select Category
            </label>
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="">-- Select Category --</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Select Item */}
          {selectedCategory && (
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2 text-left">
                Select Item
              </label>
              <select
                value={selectedItem ? selectedItem.itemName : ""}
                onChange={(e) => {
                  const item = categories
                    .find((cat) => cat.name === selectedCategory)
                    ?.items.find((i) => i.itemName === e.target.value);
                  handleItemSelect(item);
                }}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                <option value="">-- Select Item --</option>
                {categories
                  .find((cat) => cat.name === selectedCategory)
                  ?.items.map((item, index) => (
                    <option key={index} value={item.itemName}>
                      {item.itemName}
                    </option>
                  ))}
              </select>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">
          {/* Price */}
          <div className="text-lg font-semibold text-gray-800">
            {selectedItem ? (
              <>
                <p>Price: ₹{selectedItem.itemPrice}</p>
              </>
            ) : (
              <></>
            )}
          </div>

          {/* Checkout Button */}
          <button
            className={`w-1/3 text-white font-bold py-3 rounded-full ${
              isCheckoutDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-cyan-600 hover:bg-cyan-700"
            }`}
            disabled={isCheckoutDisabled}
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AccountModal from "./AccountModal";

const BookingModal = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState("");

  const navigate = useNavigate();
  const handleCheckout = () => {
    const isVerified = localStorage.getItem("isVerified");
     if(isVerified) {
    navigate("/checkout", {
      state: {
        bookingDetails: {
          name: selectedItem.itemName,
          price: selectedItem.itemPrice,
          category: selectedCategory,
          date: selectedDate,
          timeSlot: selectedTimeSlot
        }
      }
    });
     }
     else{
      <><AccountModal/></>
     }
  };

  const timeSlots = ["10am-12pm", "12pm-2pm", "2pm-4pm", "4pm-6pm"];
  const categories = [
    {
        name: "Macbook Support",
        items: [
          {
            itemName: "React Native code issue",
            itemDescription: "Recognizing React Native’s Framework",
            itemPrice: 299,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "JAVA related issue",
            itemDescription:
              "Memory management, code verbosity, and handling multi-threading effectively",
            itemPrice: 299,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Python related issue",
            itemDescription:
              "Developing websites and software, task automation, data analysis, and data visualization",
            itemPrice: 299,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Laravel related issue",
            itemDescription:
              "Architectural concepts, code writing style, object maps, file/directory layouts, and request life cycle",
            itemPrice: 299,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Docker related issue",
            itemDescription: "Container-related issue",
            itemPrice: 299,
            itemImage: "/assets/images/Login.webp"
          }
        ]
      },
      {
        name: "Windows Support",
        items: [
          {
            itemName: "Not sure of the issue - Other issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows 10, 11 Licence",
            itemDescription:
              "We provide a licence for your Windows PC or Laptop. Licence valid for 1 year",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows Driver Related issue",
            itemDescription: "We fix all driver-related issues in just a few minutes",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "MS Office related issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows Password issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          }
        ]
      },
      {
        name: "Desktop Support",
        items: [
          {
            itemName: "Not sure of the issue - Other issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows 10, 11 Licence",
            itemDescription:
              "We provide a licence for your Windows PC or Laptop. Licence valid for 1 year",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows Driver Related issue",
            itemDescription: "We fix all driver-related issues in just a few minutes",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "MS Office related issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows Password issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          }
        ]
      },
      {
        name: "Printer Support",
        items: [
          {
            itemName: "Not sure of the issue - Other issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows 10, 11 Licence",
            itemDescription:
              "We provide a licence for your Windows PC or Laptop. Licence valid for 1 year",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows Driver Related issue",
            itemDescription: "We fix all driver-related issues in just a few minutes",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "MS Office related issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows Password issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          }
        ]
      },
      {
        name: "Coding Support",
        items: [
          {
            itemName: "Not sure of the issue - Other issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows 10, 11 Licence",
            itemDescription:
              "We provide a licence for your Windows PC or Laptop. Licence valid for 1 year",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows Driver Related issue",
            itemDescription: "We fix all driver-related issues in just a few minutes",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "MS Office related issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows Password issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          }
        ]
      },
      {
        name: "Service Support",
        items: [
          {
            itemName: "Not sure of the issue - Other issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows 10, 11 Licence",
            itemDescription:
              "We provide a licence for your Windows PC or Laptop. Licence valid for 1 year",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows Driver Related issue",
            itemDescription: "We fix all driver-related issues in just a few minutes",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "MS Office related issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          },
          {
            itemName: "Windows Password issue",
            itemDescription:
              "We handle everything! Select this if you are not sure of the issue",
            itemPrice: 99,
            itemImage: "/assets/images/Login.webp"
          }
        ]
      }
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

  const isCheckoutDisabled = !selectedDate || !selectedTimeSlot || !selectedCategory || !selectedItem;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed bottom-0 md:top-[75px] md:right-1 w-full h-auto md:h-fit md:w-96 bg-white rounded-lg shadow-lg p-6 z-50 font-sora overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Book an Appointment</h2>
          <button className="text-gray-500 text-xl" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 mt-6">
          {/* Select Date */}
          <div>
            <label className="block text-gray-700 text-sm text-left font-medium mb-2">Select Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>

          {/* Select Time Slot */}
          <div>
            <label className="block text-gray-700 text-left text-sm font-medium mb-2">Select Time Slot</label>
            <div className="grid grid-cols-2 gap-4">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  className={`py-2 px-4 rounded-md border ${
                    selectedTimeSlot === slot ? "border-black bg-cyan-500 border-2 text-white" : "bg-gray-100 text-gray-800"
                  } focus:outline-none`}
                  onClick={() => setSelectedTimeSlot(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* Select Category */}
          <div>
            <label className="block text-gray-700 text-left text-sm font-medium mb-2">Select Category</label>
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
        ) : (<></>)
        }
          </div>

          {/* Checkout Button */}
          <button
            className={`w-1/3 text-white font-bold py-3 rounded-full ${
              isCheckoutDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-cyan-600 hover:bg-cyan-700"
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

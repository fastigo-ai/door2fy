import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import { TbArrowBackUp } from "react-icons/tb";
import Navbar from "../../../components/Navigation/Navbar";
import Cart from "../../../components/modals/CartModal";
import Footer from "../../../components/Footer/Footer";
import { useCart } from "../../../contexts/CartContext";
import Notification from "../../../components/Notification/Notification";
import Confirmation from "../../../components/modals/Confirmation/ConfirmationModal";

const DesktopSupport = () => {
  const { cartItems, addToCart, removeFromCart, isServiceAdded } = useCart();
    const [activeServiceType, setActiveServiceType] = useState("BookingSupport");
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [notification, setNotification] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [pendingItem, setPendingItem] = useState(null);
  
    const handleServiceTypeChange = (type) => {
      setActiveServiceType(type);
    };
  
    const handleAddToCart = (service) => {
      const serviceWithType = {
        ...service,
        serviceType: activeServiceType,
        quantity: 1,
      };
      
      if (cartItems.length === 0) {
        addToCart(serviceWithType);
        setNotification(`Added ${service.name} to your cart!`);
      } else {
        setPendingItem(serviceWithType);
        setShowModal(true);
      }
      setTimeout(() => setNotification(null), 3000);
    };
  
    const confirmReplaceItem = () => {
      if (!pendingItem) return;
      addToCart(pendingItem);
      setPendingItem(null);
      setShowModal(false);
      setNotification("Item replaced in your cart!");
      setTimeout(() => setNotification(null), 3000);
    };
  
    const cancelReplaceItem = () => {
      setPendingItem(null);
      setShowModal(false);
    };
  
    const handleRemoveFromCart = (serviceName) => {
      removeFromCart(serviceName);
      setNotification(`${serviceName} removed from your cart.`);
      setTimeout(() => setNotification(null), 3000);
    };

  const services =
    activeServiceType === "BookingSupport"
      ? [
        {
            name: "Not sure for the issue other issue",
            description:
              "We handle everything!Selrct this if you are not sure of the issue ",
            price: 99,
            image: "/assets/images/Login.webp" 
          },
          {
            name: "Display Issue",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra",
            price: 199,
            image: "/assets/images/Login.webp" 
          },
          {
            name: "KeyBoard issue",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra",
            price: 149,
            image: "/assets/images/Login.webp" 
          },
          {
            name: "Touchpad issue",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra ",
            price: 149,
            image: "/assets/images/Login.webp" 
          },
          {
            name: "Charging/Power issue",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra ",
            price: 149,
            image: "/assets/images/Login.webp" 
          },
          {
            name: "Overheating issue",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra ",
            price: 599,
            image: "/assets/images/Login.webp" 
          },
          {
            name: "Software/OS related issue/System Formatting",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra ",
            price: 599,
            image: "/assets/images/Login.webp" 
          },
          {
            name: "Port issue",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra ",
            price: 599,
            image: "/assets/images/Login.webp" 
          },
          {
            name: "My system is slow/Hanging issue",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra ",
            price: 599,
            image: "/assets/images/Login.webp" 
          },
          {
            name: "Speaker/Camera/Internet issue",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra ",
            price: 199,
            image: "/assets/images/Login.webp" 
          },
          {
            name: "Physical damage",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra ",
            price: 599,
            image: "/assets/images/Login.webp" 
          },
          // Add other BookingSupport services
        ]
      : [
        {
            name: "I have a desktop",
            description:
              "We handle everything! Select this if you are not sure of the issue",
            price: 99,
            image: "/assets/images/Login.webp"
          },
          {
            name: "I have a windows laptop",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra",
            price: 99,
            image: "/assets/images/Login.webp"
          },
          {
            name: "I have a MacBook/Apple laptop",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra",
            price: 99,
            image: "/assets/images/Login.webp"
          },
          {
            name: "I have a print",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra",
            price: 99,
            image: "/assets/images/Login.webp"
          },
          // Add other QuickSupport services
        ];

  return (
    <div className="font-sans">
      {/* Navbar */}
      <Navbar toggleCart={() => setIsCartOpen(!isCartOpen)} cartItemCount={cartItems.length} />

      {/* Banner Section */}
      <div className=" flex items-center">
        <img src="/assets/images/icons1.png" alt="" srcset="" />
        <button className="absolute left-4 flex top-4 text-black mr-4 text-3xl  " onClick={() => window.history.back()}>
          <TbArrowBackUp/> 
          
        </button>
        
      </div>
      <h1 className="text-3xl text-cyan-700 font-sora font-bold py-4">Desktop Support</h1>
      {/* Buttons Section */}
      <div className="flex justify-start space-x-4 my-4 ml-4 font-sora">
        <button
          className={`px-4 py-2 rounded-md  ${
            activeServiceType === "BookingSupport"
              ? "bg-cyan-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleServiceTypeChange("BookingSupport")}
        >
          Booking Support
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeServiceType === "QuickSupport"
              ? "bg-cyan-500 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => handleServiceTypeChange("QuickSupport")}
        >
          Quick Support
        </button>
      </div>

      {/* Services List */}
      <div className="px-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center bg-white shadow-md rounded-md py-4 border-t-2"
          >
            <div className="text-left px-4 font-sora w-3/4">
              <h2 className="text-md font-bold mb-2">{service.name}</h2>
              <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
              <span className="text-md font-sora font-semibold text-black my-4 ">₹{service.price}</span>
              <Link
              to={`/itemPage/${service.name}`}
              state={{
                serviceData: service,
                similarItems: services,
              }}
              className="text-cyan-600 text-md font-semibold ml-4"
            >
              View Details
            </Link>
          </div>
          <div className="relative flex items-center justify-center w-1/4 mr-2">
            <img
              src={service.image}
              alt=""
              className="rounded-lg bg-cyan-400"
            />
            <button
              className={`absolute -bottom-4 px-2 pt-1 pb-[1px] rounded-md border-2 border-cyan-700 ${
                isServiceAdded(service.name)
                  ? "bg-white mx-auto"
                  : "bg-white mx-auto"
              } text-cyan-700`}
              onClick={() =>
                isServiceAdded(service.name)
                  ? handleRemoveFromCart(service.name)
                  : handleAddToCart(service)
              }
            >
              {isServiceAdded(service.name) ? "Remove" : "Add"}
            </button>
            </div>
          </div>
        ))}
      </div>

      {/* Left Side Content */}
      <div className="bg-gray-50 p-4 mt-6 font-sora">
      <h2 className="text-2xl text-cyan-700 font-semibold my-4 mb-6">Professional Engineer repair your laptop</h2>
        <ul className="space-y-4 mx-4 mb-8">
          <li className="flex items-center">
            <FaCheck className="text-green-500 mr-2" /> Smooth Speed and Performance
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green-500 mr-2" /> All Type of error solver
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green-500 mr-2" /> Data Protecion
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green-500 mr-2" /> Affordable prices
          </li>
        </ul>
        <h2 className="text-xl text-cyan-700 font-semibold my-4 mb-6">Ask your questions with our expert:</h2>
        <ul className="space-y-4 mx-4 mb-8">
        <li className="flex items-center">
            <FaCheck className="text-green-500 mr-2" /> High-Quality Service
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green-500 mr-2" /> Experienced Laptop Service Engineers
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green-500 mr-2" /> 1-Year warranty spare parts
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green-500 mr-2" /> Subscription Plans Available
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green-500 mr-2" /> 7-day warranty on service
          </li>
          </ul>
      </div>
      {notification && (
      <Notification
        message={notification}
        onClose={() => setNotification(null)}
      />
    )}

    {isCartOpen && (
      <Cart
        items={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClose={() => setIsCartOpen(false)}
      />
    )}

    {showModal && (
      <Confirmation
        message="Are you sure you want to replace the item inside the cart?"
        onConfirm={confirmReplaceItem}
        onCancel={cancelReplaceItem}
      />
    )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DesktopSupport;

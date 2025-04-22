import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import Cart from "../../../components/modals/CartModal";
import Footer from "../../../components/Footer/Footer";
import { useCart } from "../../../contexts/CartContext";
import Notification from "../../../components/Notification/Notification";
import Confirmation from "../../../components/modals/Confirmation/ConfirmationModal";
import Navbar from "../../../components/Navigation/Navbar";
import Loader from "../../../components/modals/Loader/loader";

const ServiceSupport = () => {
  const { cartItems, addToCart, removeFromCart, isServiceAdded } = useCart();
  const [activeServiceType, setActiveServiceType] = useState("BookingSupport");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [pendingItem, setPendingItem] = useState(null);

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


  const handleServiceTypeChange = (type) => {
    setActiveServiceType(type);
  };

  const handleAddToCart = (service) => {
    const serviceWithType = {
      ...service,
      serviceType: activeServiceType,
      category: "Service Support",
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
            name: "Windows service",
            description:
              "Memory optimisation, internal & external deep cleaning.\n Spare parts & repair cost extra if needed.",
            price: 599,
            image: "/assets/images/services/laptopsupport.jpg",
          },
          {
            name: "MacBook service",
            description:
              "Memory optimisation, internal & external deep cleaning.\n Spare parts & repair cost extra if needed",
            price: 699,
            image: "/assets/images/services/macbooksupport.jpg",
          },
          {
            name: "Desktop service",
            description:
              "Memory optimisation, internal & external deep cleaning.\n Spare parts & repair cost extra if needed",
            price: 599,
            image: "/assets/images/services/desktopsupport.jpg",
          },
          {
            name: "Gameing latop | desktop service",
            description:
              "Memory optimisation, internal & external deep cleaning.\n Spare parts & repair cost extra if needed",
            price: 799,
            image: "/assets/images/services/componentsupport.jpg",
          },
          // Add other BookingSupport services
        ]
      : [
          {
            name: "I have a desktop",
            description:
              "We handle everything! Select this if you are not sure of the issue",
            price: 99,
            image: "/assets/images/Desktop-HD.png",
          },
          {
            name: "I have a windows laptop",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra",
            price: 99,
            image: "/assets/images/Laptop-HD.png",
          },
          {
            name: "I have a MacBook | Apple laptop",
            description:
              "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra",
            price: 99,
            image: "/assets/images/services/macbooksupport.jpg",
          },
          // {
          //   name: "I have a print",
          //   description:
          //     "Visit charge of Rs 99 will be Wavied off in the final bill.. Spare Parts/ Service cost: Extra",
          //   price: 99,
          //   image: "/assets/images/Printer-HD.png",
          // },
          // Add other QuickSupport services
        ];

  return (
    <div className="font-sans">
      <Loader loading={loading} />
      {!loading && (
        <>
      <Navbar
        toggleCart={() => setIsCartOpen(!isCartOpen)}
        cartItemCount={cartItems.length}
      />

      <div className="flex items-center justify-center mt-10 md:my-10">
        <img src="/assets/images/Door2fyImage/Service-Banner/ServiceBanner440px225p.jpg" alt="" className="sm:h-[50vh]"/>
        <button
          className="absolute left-4 flex top-4 md:hidden text-black mr-4 text-3xl"
          onClick={() => window.history.back()}
        >
          <TbArrowBackUp />
        </button>
      </div>

      <h1 className="text-3xl text-cyan-700 font-sora font-bold py-4 md:py-8 md:bg-cyan-500 md:text-white">
        Service Support
      </h1>
      <div className="md:bg-cyan-500 md:h-[200px] md:relative z-0"></div>
      {/* Item List */}
      <div className="relative md:-mt-72 flex justify-center  ">
        <div className="flex flex-col md:w-3/4 md:my-24 md:shadow-lg">
          <div className="bg-white">
            <div className="flex justify-start md:justify-center space-x-4 my-4 md:my-10 ml-4 font-sora">
              <button
                className={`px-4 py-2 rounded-md ${
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

            <div className="px-2">
              <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:px-6">
                {services.map((service, index) => (
                  <>
                    {/* MobileViewOfCard */}
                    <div
                      key={index}
                      className="md:hidden flex items-center bg-white shadow-md rounded-md py-6 border-t-2"
                    >
                      <div className="text-left px-4 font-sora w-3/4">
                        <h2 className="text-md font-bold mb-2">
                          {service.name}
                        </h2>
                        <p className="text-gray-600 mb-3 text-sm">
                          {service.description}
                        </p>
                        <span className="text-md font-sora font-semibold text-black my-4">
                          ₹{service.price}
                        </span>
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

                    {/* DesktopViewOfCard */}
                    <div
                      key={index}
                      className="hidden md:block bg-white shadow-md rounded-md pb-6 border-t-2 font-sora"
                    >
                      <div className="flex flex-col items-center md:items-start">
                        <img
                          src={service.image}
                          alt=""
                          className="rounded-lg bg-cyan-400 w-full"
                        />
                        <div className="flex flex-col md:flex-row justify-between w-full px-4 mt-4">
                          <h2 className="text-lg font-bold mb-2 text-left">
                            {service.name}
                          </h2>
                          <button
                            className={`px-2 pt-1 pb-[1px] rounded-md border-2 h-10 border-cyan-700 ${
                              isServiceAdded(service.name)
                                ? "bg-white"
                                : "bg-white"
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
                        <p className="text-gray-600 my-3 text-sm px-4 text-left">
                          {service.description}
                        </p>
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
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center my-4">
          <div className=" p-4 mt-6 font-sora md:mt-0 md:w-1/2 ">
            <h2 className="text-2xl text-cyan-700 font-semibold my-4 mb-6">
              Professional Engineer repair your laptop
            </h2>
            <ul className="space-y-4 mx-4 mb-8">
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> Smooth Speed and
                Performance
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> All Type of error
                solver
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> Data Protection
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> Affordable prices
              </li>
            </ul>

            <h2 className="text-xl text-cyan-700 font-semibold my-4 mb-6">
              Ask your questions with our expert:
            </h2>
            <ul className="space-y-4 mx-4 mb-8">
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> High-Quality Service
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> Experienced Laptop
                Service Engineers
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> 1-Year warranty
                spare parts
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> Subscription Plans
                Available
              </li>
              <li className="flex items-center">
                <FaCheck className="text-green-500 mr-2" /> 7-day warranty on
                service
              </li>
            </ul>
          </div>
          </div>
        </div>
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

      <Footer />
      </>
      )}
    </div>
  );
};

export default ServiceSupport;

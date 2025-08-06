import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";
import Cart from "../../../components/modals/CartModal";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Notification from "../../../components/Notification/Notification";
import Confirmation from "../../../components/modals/Confirmation/ConfirmationModal";
import { useCart } from "../../../contexts/CartContext";
import Navbar from "../../../components/Navigation/Navbar";
import Loader from "../../../components/modals/Loader/loader"; 

const LaptopSupport = () => {
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
      category: "Laptop Support",
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
            name: "Display Issue",
            duration: "45 mins.",
            description:
              "Complete diagnosis to identify the issue before repair.\n Final repair cost will be shared after the diagnosis",
            price: 599,
            image: "/assets/images/Door2fyImage/Window-Support/DisplayIssue.jpg",
          },
          {
            name: "Keyboard issue",
            duration: "25 mins.",
            description:
              "Complete diagnosis to identify the issue before repair.\n Final repair cost will be shared after the diagnosis",
            price: 499,
            image: "/assets/images/Door2fyImage/Window-Support/KeyboardIssue.png",
          },
          {
            name: "Touchpad issue",
            duration: "40 mins.",
            description:
              "Complete diagnosis to identify the issue before repair.\n Final repair cost will be shared after the diagnosis",
            price: 499,
            image: "/assets/images/Door2fyImage/Window-Support/TouchpadIssue.avif",
          },
          {
            name: "Charging | Power issue",
            duration: "45 mins.",
            description:
              "Complete diagnosis to identify the issue before repair.\n Final repair cost will be shared after the diagnosis",
            price: 499,
            image: "/assets/images/Door2fyImage/Window-Support/ChargingPowerIssueLaptop.webp",
          },
          {
            name: "Overheating issue",
            duration: "45 mins.",
            description:
              "Complete diagnosis to identify the issue before repair.\n Final repair cost will be shared after the diagnosis",
            price: 499,
            image: "/assets/images/Door2fyImage/Window-Support/OverheatingIssue.jpeg",
          },
          {
            name: "Software | OS related issue | System Formatting",
            duration: "45 mins.",
            description:
              "Complete diagnosis to identify the issue before repair.\n Final repair cost will be shared after the diagnosis",
            price: 599,
            image: "/assets/images/Door2fyImage/Window-Support/SoftwareNotOpeningOrCrashing.png",
          },
          {
            name: "Port issue",
            duration: "30 mins.",
            description:
              "Complete diagnosis to identify the issue before repair.\n Final repair cost will be shared after the diagnosis",
            price: 299,
            image: "/assets/images/Door2fyImage/Window-Support/PortIssue.webp",
          },
          {
            name: "My system is slow | Hanging issue",
            duration: "50 mins.",
            description:
              "Complete diagnosis to identify the issue before repair.\n Final repair cost will be shared after the diagnosis",
            price: 599,
            image: "/assets/images/Door2fyImage/Window-Support/LaptopHangingOrFreezing.webp",
          },
          {
            name: "Speaker | Camera | Internet issue",
            duration: "30 mins.",
            description:
              "Complete diagnosis to identify the issue before repair.\n Final repair cost will be shared after the diagnosis",
            price: 199,
            image: "/assets/images/Door2fyImage/Window-Support/Wi-FiNotConnecting.avif",
          },
          {
            name: "Physical damage",
            duration: "90 mins.",
            description:
              "Complete diagnosis to identify the issue before repair.\n Final repair cost will be shared after the diagnosis",
            price: 599,
            image: "/assets/images/Door2fyImage/Window-Support/PhysicalDamage.png",
          },
          // {
          //   name: "Checking Payment",
          //   duration: "45 mins.",
          //   description:
          //     "Complete diagnosis to identify the issue before repair.\n Final repair cost will be shared after the diagnosis",
          //   price: 1,
          //   image: "/assets/images/Door2fyImage/Window-Support/DisplayIssue.jpg",
          // },
        
          // Add other BookingSupport services
        ]
      : [
          {
            name: "Not Sure About the Problem.",
            duration: "N/A",
            description:
              "Our experts will diagnose the problem and provide the best possible solution.",
            price: 99,
            image: "/assets/images/Door2fyImage/Windows-Quick-Support/NotSureAboutTheProblem.webp",
          },
          {
            name: "Excel Not Working.",
            duration: "5-10 mins.",
            description:
              "Our experts will diagnose the problem and provide the best possible solution.",
            price: 99,
            image: "/assets/images/Door2fyImage/Windows-Quick-Support/ExcelNotWorking.png",
          },
          {
            name: "Laptop Hanging or Freezing.",
            duration: "5-10 mins.",
            description:
              "Our experts will diagnose the problem and provide the best possible solution.",
            price: 99,
            image: "/assets/images/Door2fyImage/Windows-Quick-Support/LaptopHangingOrFreezing.webp",
          },
          {
            name: "Windows Starting Slowly.",
            duration: "5-10 mins.",
            description:
              "Our experts will diagnose the problem and provide the best possible solution.",
            price: 199,
            image: "/assets/images/Door2fyImage/Windows-Quick-Support/WindowsStartingSlowly.png",
          },
          {
            name: "Wi-Fi Not Connecting.",
            duration: "5-10 mins.",
            description:
              "Our experts will diagnose the problem and provide the best possible solution.",
            price: 99,
            image: "/assets/images/Door2fyImage/Windows-Quick-Support/Wi-FiNotConnecting.avif",
          },
          {
            name: "Windows Updates Not Installing.",
            duration: "5-10 mins.",
            description:
              "Our experts will diagnose the problem and provide the best possible solution.",
            price: 119,
            image: "/assets/images/Door2fyImage/Windows-Quick-Support/WindowsUpdatesNotInstalling.png",
          },
          {
            name: "Software Not Opening or Crashing.",
            duration: "5-10 mins.",
            description:
              "Our experts will diagnose the problem and provide the best possible solution.",
            price: 99,
            image: "/assets/images/Door2fyImage/Windows-Quick-Support/SoftwareNotOpeningOrCrashing.png",
          },
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
      <img src="/assets/images/Door2fyImage/Service-Banner/LaptopRepair.jpg" alt="" className="sm:h-[50vh]"/>
        <button
          className="absolute left-4 flex top-4 md:hidden text-black mr-4 text-3xl"
          onClick={() => window.history.back()}
        >
          <TbArrowBackUp />
        </button>
      </div>

      <h1 className="text-3xl text-cyan-700 font-sora font-bold py-4 md:py-8 md:bg-cyan-500 md:text-white">
        Laptop Support
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
                Windows Support
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
                        <p className="text-gray-600 mb-3 text-sm font-semibold px-4">
                          Duration: {service.duration}
                        </p>
                        <p
                          className="text-gray-600 mb-3 text-sm"
                          style={{ whiteSpace: "pre-line" }}
                        >
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
                        <p className="text-gray-600 mb-3 text-sm font-semibold px-4">
                          Duration: {service.duration}
                        </p>
                        <p
                          className="text-gray-600 my-3 text-sm px-4 text-left"
                          style={{ whiteSpace: "pre-line" }}
                        >
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
                How it works
              </h2>
              <ol className="space-y-4 mx-4 mb-8">
                <li className="flex items-top">
                  <FaCheck className="text-green-500 mr-2 w-10" />
                  <div className="text-left font-bold">
                    Check-up
                    <p className="font-normal text-sm">
                      The technician inspects your laptop & provides a diagnosis
                      with a repair quote.
                    </p>
                  </div>
                </li>
                <li className="flex items-top">
                  <FaCheck className="text-green-500 mr-2 w-10" />
                  <div className="text-left font-bold">
                    Sourcing spare parts (if required)
                    <p className="font-normal text-sm">
                      If needed, the technician will procure spare parts from
                      the local market.
                    </p>
                  </div>
                </li>
                <li className="flex items-top">
                  <FaCheck className="text-green-500 mr-2 w-10" />
                  <div className="text-left font-bold">
                    Repair
                    <p className="font-normal text-sm">
                      The technician hands over the hard disk for data safety &
                      completes the repair.
                    </p>
                  </div>
                </li>
                <li className="flex items-top">
                  <FaCheck className="text-green-500 mr-2 w-10" />
                  <div className="text-left font-bold">
                    Post Repair
                    <p className="font-normal text-sm">
                      The technician thoroughly cleans the area & surfaces after
                      the repair
                    </p>
                  </div>
                </li>
                <li className="flex items-top">
                  <FaCheck className="text-green-500 mr-2 w-10" />
                  <div className="text-left font-bold">
                   
                    Payment
                    <p className="font-normal text-sm">
                      
                      Pay the final repair amount, minus the booking fee already
                      paid
                    </p>
                  </div>
                </li>
              </ol>

              <h2 className="text-xl text-cyan-700 font-semibold my-4 mb-6">
                Please Note:
              </h2>
              <ul className="space-y-4 mx-4 mb-8">
                <li className="flex items-top  w-full">
                  <FaCheck className="text-green-500 mr-2 w-10" />
                  <div className="w-4/5 text-left">Check-up for
                  motherboard issue, the laptop will be taken to the repair
                  shop.</div> 
                </li>
                <li className="flex items-top w-full">
                  <FaCheck className="text-green-500 mr-2 w-10" /> 
                  <div className="w-4/5 text-left">The repair quote
                  will be provided after the check-up.</div>
                </li>
                <li className="flex items-top w-full">
                  <FaCheck className="text-green-500 mr-2 w-10" /> 
                  <div className="w-4/5 text-left">Visitation charges
                  will be adjusted in the final quote.</div>
                </li>
                <li className="flex items-top w-full ">
                  <FaCheck className="text-green-500 mr-2 w-10" /> 
                  <div className="w-4/5 text-left">We don't repair
                  commercial appliances.</div>
                </li>
                
              </ul>
            </div>
          </div>
          {/* <div className="flex justify-center my-4">
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
                  <FaCheck className="text-green-500 mr-2" /> High-Quality
                  Service
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
          </div> */}
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

export default LaptopSupport;

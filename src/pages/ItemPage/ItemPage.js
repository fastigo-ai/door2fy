import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import { useCart } from "../../contexts/CartContext";
import Navbar from "../../components/Navigation/Navbar";
import Footer from "../../components/Footer/Footer";
import Cart from "../../components/modals/CartModal";
import Notification from "../../components/Notification/Notification";
import Confirmation from "../../components/modals/Confirmation/ConfirmationModal";
import Loader from "../../components/modals/Loader/loader"; 

const ItemPage = () => {
  const { itemName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart, isServiceAdded } = useCart();

  const [serviceData, setServiceData] = useState(null);
  const [similarItems, setSimilarItems] = useState([]);
  const [pendingItem, setPendingItem] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [itemName]);

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

  
  useEffect(() => {
    // Get data from state or localStorage
    const data = location.state || JSON.parse(localStorage.getItem(itemName));

    if (data) {
      setServiceData(data.serviceData);
      setSimilarItems(data.similarItems || []);
      // Store in localStorage for persistence
      localStorage.setItem(itemName, JSON.stringify(data));
    } else {
      console.log("No data available for:", itemName);
    }
  }, [itemName, location.state]);

  const handleAddToCart = (service) => {
    if (!service) return;

    if (cartItems.length === 0) {
      addToCart({
        ...service,
        quantity: 1,
      });
      setNotification(`Added ${service.name} to your cart!`);
    } else {
      setPendingItem(service);
      setShowModal(true);
    }
    setTimeout(() => setNotification(null), 3000);
  };

  const confirmReplaceItem = () => {
    if (!pendingItem) return;
    addToCart({
      ...pendingItem,
      quantity: 1,
    });
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

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Loading...</h2>
          <p className="text-gray-600">
            Please wait while we fetch the service details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sora bg-gray-50 min-h-screen flex flex-col">
      <Loader loading={loading} />
      {!loading && (
        <>
      <Navbar
        toggleCart={() => setIsCartOpen(!isCartOpen)}
        cartItemCount={cartItems.length}
      />

      <button
        className="absolute left-4 flex top-4 md:hidden text-black mr-4 text-3xl"
        onClick={() => navigate(-1)}
      >
        <TbArrowBackUp />
      </button>

      <div className="container mx-auto flex flex-col items-center mt-14 md:mt-12">
        <div className="w-full max-w-2xl bg-gray-100 rounded-lg">
          <img
            src={serviceData.image || "/default-image.jpg"}
            alt={serviceData.name}
            className="w-full h-full object-cover rounded-md mt-6 bg-gray-100"
          />

          <div className="text-left py-6 mb-4">
            <h2 className="text-xl font-bold text-gray-800 px-6">
              {serviceData.name}
            </h2>
            <div className="text-xl font-semibold text-black px-6 pt-4">
              ₹{serviceData.price}
            </div>
            <button
              className={`mx-6 px-6 py-2 mt-4 ${
                isServiceAdded(serviceData.name)
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-cyan-500 hover:bg-cyan-600"
              } text-white font-semibold rounded-full transition-colors`}
              onClick={() =>
                isServiceAdded(serviceData.name)
                  ? handleRemoveFromCart(serviceData.name)
                  : handleAddToCart(serviceData)
              }
            >
              {isServiceAdded(serviceData.name)
                ? "Remove from Cart"
                : "Add to Cart"}
            </button>
          </div>

          <p className="bg-gray-100 text-xl text-gray-700 text-left font-semibold p-6">
            Description
          </p>
          <p className="text-gray-600 text-left text-sm px-6 pb-4 bg-gray-100">
            {serviceData.description}
          </p>
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

      {similarItems.length > 0 && (
        <div className="mx-auto pt-6 mt-8 ">
          <h3 className="text-2xl font-bold text-gray-700  bg-white py-4 md:py-10">
            Similar Items
          </h3>
          <div className="md:flex md:justify-center bg-white pb-6">
          <div className="px-2 md:w-3/4 ">
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:px-6">
              {similarItems.map((service, index) => (
                <>
                  {/* MobileViewOfCard */}
                  <div
                    key={index}
                    className="md:hidden flex items-center bg-white shadow-md rounded-md py-6 border-t-2"
                  >
                    <div className="text-left px-4 font-sora w-3/4">
                      <h2 className="text-md font-bold mb-2">{service.name}</h2>
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
                          similarItems: similarItems,
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
                          similarItems: similarItems,
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
        </div>
      )}

      <Footer />

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
      </>
      )}
    </div>
  );
};

export default ItemPage;

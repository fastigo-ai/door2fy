import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import RemoveItemModal from "./Confirmation/ConfirmationModal";
import AccountModal from "./AccountModal";
import { useCart } from "../../contexts/CartContext";
import Notification from "../Notification/Notification";

const CartModal = ({ onClose, onVerify }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const { cartItems, removeFromCart } = useCart();
  const [notification, setNotification] = useState(null);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemTotal = item.quantity * item.price;
      return total + (itemTotal || 0); // Fallback to 0 if quantity or price is undefined
    }, 0);
  };

  const navigate = useNavigate();
  const handleCheckout = () => {

    const isVerified = localStorage.getItem("isVerified");
     if(isVerified){
      if((cartItems.length>0)){
        navigate("/checkout");
      }else{
        setNotification("Your cart is empty. Please add items to your cart before proceeding to checkout.");
      }
        
     } else {
        onVerify();
     }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedItem) {
      removeFromCart(selectedItem.name);
    }
    setNotification(`${selectedItem.name} removed from your cart.`);
    setIsModalOpen(false);
    setSelectedItem(null);
     // Close cart modal if no items are left
  if (cartItems.length === 1) { // Because removeFromCart runs asynchronously
    onClose();
  }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
    <div
    className="fixed inset-0 bg-black bg-opacity-50   z-10"
    onClick={onClose}
        ></div>
        
      <div className="fixed bottom-0 md:top-[75px] md:right-1 z-50 md:z-20 w-full h-auto md:h-fit md:w-96 bg-white rounded-lg shadow-lg flex flex-col overflow-y-auto"
      style={{ maxHeight: "90vh" }} // Ensures scrollability when clipped
      onClick={(e) => e.stopPropagation()} // Prevents closing on clicking inside modal
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-semibold">Items in your cart</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            <FaTimes size={20} />
          </button>
        </div>

        {/* Items List */}
        {cartItems.length === 0 ? (
          <div className="p-6 text-center text-gray-600">
            <p>Your cart is empty!</p>
            <p>You have not added any products to your cart so far.</p>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-4 font-sora">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-3 last:border-none"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <img src={item.image} alt="" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-gray-500 text-xs">Quantity: {item.quantity} </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <p className="text-sm font-semibold">₹{item.price}</p>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => openModal(item)}
                  >
                    <MdDelete size={30} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Total and Checkout */}
        <div className="border-t p-4 flex justify-between font-sora">
          <div className="flex justify-between items-center">
            <p className="text-md font-medium mr-2">Total:</p>
            <p className="text-lg font-semibold">₹{calculateTotal()}</p>
          </div>
          <button
            className={`${
                cartItems.length === 0
                  ? "bg-gray-400 "
                  : "bg-cyan-600"
              }
            w-1/3 bg-cyan-600 text-white font-bold py-3 rounded-full hover:bg-cyan-800 `}
            onClick={handleCheckout}
          >
            CHECKOUT
          </button>
        </div>
      </div>
      
      {notification && (
        <Notification
          message={notification}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Remove Item Modal */}
      {isModalOpen && (
        <RemoveItemModal
          message="Are you sure you want to remove this item from the cart?"
          onConfirm={confirmDelete}
          onCancel={closeModal}
        />
      )}

    </>
  );
  
};

export default CartModal;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiHome9Line, RiBookletLine, RiShoppingCart2Line } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import BookingModal from "../modals/BookingModal";
import CategoriesModal from "../modals/CategoriesModal";
import AccountModal from "../modals/AccountModal";
import CartModal from "../modals/CartModal";
import { useCart } from "../../contexts/CartContext";

export default function BottomNavbar({toggleCart}) {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null); // Track which modal is open
  const { cartItems } = useCart();
  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-center font-sora">
        <div className="fixed bottom-12 w-[90%] bg-white shadow-lg rounded-3xl border-t border-gray-200 z-30">
          <div className="flex justify-between items-center px-3 py-2 mx-3">
            {/* Home */}
            <Link
              className="flex flex-col items-center cursor-pointer"
              to="/"
            >
              <RiHome9Line className="text-3xl text-cyan-600" />
              <span className="text-xs text-black">Home</span>
            </Link>
            {/* Booking */}
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => openModal("booking")}
            >
              <RiBookletLine className="text-3xl text-cyan-600" />
              <span className="text-xs text-black">Booking</span>
            </div>
            {/* Categories */}
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => openModal("categories")}
            >
              <BiCategory className="text-3xl text-cyan-600" />
              <span className="text-xs text-black">Categories</span>
            </div>
            {/* Account */}
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => openModal("account")}
            >
              <MdOutlineAccountCircle className="text-3xl text-cyan-600" />
              <span className="text-xs text-black">Account</span>
            </div>
            {/* Cart */}
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={()=> openModal("cart") || toggleCart}
            >
              <RiShoppingCart2Line className="text-3xl text-cyan-600" />
              {cartItems.length > 0 && (
            <span className="absolute -top-1 right-4 bg-red-500 text-white text-xs rounded-full px-2 py-1">
              {cartItems.length}
            </span>
          )}
              <span className="text-xs text-black">Cart</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeModal === "booking" && <BookingModal onClose={closeModal} />}
      {activeModal === "categories" && <CategoriesModal onClose={closeModal} />}
      {activeModal === "account" && <AccountModal onClose={closeModal} />}
      {activeModal === "cart" && <CartModal onClose={closeModal} />}
    </>
  );
}

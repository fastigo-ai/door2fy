import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  RiHome9Line,
  RiBookletLine,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import BookingModal from "../modals/BookingModal";
import CategoriesModal from "../modals/CategoriesModal";
import AccountModal from "../modals/AccountModal";
import CartModal from "../modals/CartModal";
import Location from "../Location/Location";
import { useCart } from "../../contexts/CartContext";
import { GoLocation } from "react-icons/go";

export default function BottomNavbar({ toggleCart }) {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null); // Track which modal is open
  const { cartItems } = useCart();
  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <div className="hidden md:flex fixed top-0 left-0 w-full bg-white font-sora border-gray-200 z-30">
        <div className="flex items-center justify-between w-full px-6 py-4">
          {/* Left Section: Logo and Location */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-cyan-600">
              <img
                src="/assets/images/Logo-removebg-preview.png"
                alt="Door2fy Logo"
                className="w-32 h-10 object-cover"
              />
            </Link>
            <GoLocation className="text-cyan-700 text-2xl lg:ml-10 md:mr-2" />
            {/* Location Component */}
            <div className="hidden md:block">
              <Location />
            </div>
          </div>

          {/* Right Section: Navigation Options */}
          <div className="flex items-center space-x-8 text-lg font-medium text-cyan-700">
            <Link to="/" className="hover:text-cyan-600 transition">
              Home
            </Link>
            <button
              onClick={() => openModal("booking")}
              className="hover:text-cyan-600 transition"
            >
              Booking
            </button>
            <button
              onClick={() => openModal("categories")}
              className="hover:text-cyan-600 transition"
            >
              Categories
            </button>
            <button
              onClick={() => openModal("account")}
              className="hover:text-cyan-600 transition"
            >
              <MdOutlineAccountCircle className="text-3xl text-cyan-700" />
            </button>
            <button
              onClick={() => openModal("cart") || toggleCart}
              className="relative hover:text-cyan-600 transition"
            >
              <RiShoppingCart2Line className="text-3xl text-cyan-700" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-white text-sm rounded-full px-2">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="flex md:hidden justify-center font-sora">
        <div className="fixed bottom-6 w-[90%] bg-white shadow-lg rounded-3xl border-t border-gray-200 z-30">
          <div className="flex justify-between items-center px-3 py-2 mx-3">
            {/* Home */}
            <Link className="flex flex-col items-center cursor-pointer" to="/">
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
              onClick={() => openModal("cart") || toggleCart}
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
      {activeModal === "booking" && (
        <BookingModal
          onClose={closeModal}
          onVerify={() => {
            closeModal();
            openModal("account");
          }}
        />
      )}
      {activeModal === "categories" && <CategoriesModal onClose={closeModal} />}
      {activeModal === "account" && <AccountModal onClose={closeModal} />}
      {activeModal === "cart" && (
        <CartModal
          onClose={closeModal}
          onVerify={() => {
            closeModal();
            openModal("account");
          }}
        />
      )}
    </>
  );
}

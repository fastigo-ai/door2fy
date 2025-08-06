import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [addedServices, setAddedServices] = useState(new Set());

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
    setAddedServices(new Set(storedItems.map(item => item.name)));
  }, []);

  const removeFromCart = (serviceName) => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
    setAddedServices(prev => {
      const updatedSet = new Set(prev);
      updatedSet.delete(serviceName);
      return updatedSet;
    });
  };

  const addToCart = (service) => {
    const serviceWithType = {
      ...service,
      quantity: 1,
    };
    setCartItems([serviceWithType]);
    localStorage.setItem("cartItems", JSON.stringify([serviceWithType]));
    setAddedServices(new Set([service.name]));
  };

  const isServiceAdded = (serviceName) => {
    return addedServices.has(serviceName);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addedServices,
      removeFromCart,
      addToCart,
      isServiceAdded
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
import React, { createContext, useContext, useState, ReactNode } from "react";
import { IGameCards } from "../../../../../../models/GameCardsModels";

interface CartContextType {
  cart: IGameCards[];
  addToCart: (item: IGameCards) => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<IGameCards[]>([]);

  const addToCart = (item: IGameCards) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id.toString() !== id);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

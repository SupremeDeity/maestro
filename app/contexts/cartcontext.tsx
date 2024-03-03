"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export interface Item {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface CartItem {
  item: Item;
  count: number;
}

export const CartContext = createContext<{
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
}>({
  cart: [],
  setCart: () => {},
});

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const value = { cart, setCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

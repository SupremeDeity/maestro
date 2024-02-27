"use client";
import { useContext, useState } from "react";
import { toast } from "sonner";
import { CartContext, Item } from "../contexts/cartcontext";
import { MdAddShoppingCart } from "react-icons/md";
import { Minus } from "lucide-react";
import { BiMinus } from "react-icons/bi";

export function CartButton({ item }: { item: Item }) {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const undoAdd = () => {
    setCount((count) => count - 1);
    console.log("called");
    const decrementItem = cart.filter((cartItem) => {
      if (cartItem.item.id === item.id) {
        return count > 0 ? { ...cartItem, count: count } : false;
      }
      return true;
    });

    setCart(decrementItem);
  };

  const addtoCart = () => {
    const itemInCart = cart.find((value) => value.item.id === item.id);
    setCount((count) => count + 1);
    if (itemInCart) {
      const updatedCart = cart.map((val) => {
        if (val.item.id === itemInCart.item.id) {
          return { count: count, item };
        } else {
          return val;
        }
      });
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, { count: count, item }]);
    }
  };

  const onClick = (_: any) => {
    addtoCart();

    toast("Added item to cart", {
      action: {
        label: "Undo",
        onClick: undoAdd,
      },
    });
  };

  return (
    <div className="flex border border-slate-400 divide-slate-400 rounded divide-x overflow-hidden">
      <button
        className="flex items-center gap-x-2 text-slate-600  p-1 hover:bg-slate-200 hover:text-slate-950 transition-colors ease-in"
        onClick={onClick}
      >
        <MdAddShoppingCart className="text-xl" />
        {count > 0 && <span className="text-sm">{count}</span>}
      </button>
      {count > 0 && (
        <button
          className="text-slate-600 p-1 hover:bg-slate-200 hover:text-slate-950 transition-colors ease-in"
          onClick={undoAdd}
        >
          <BiMinus className="text-sm fill-red-600" />
        </button>
      )}
    </div>
  );
}

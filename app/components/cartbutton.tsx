"use client";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { CartContext, CartItem, Item } from "../contexts/cartcontext";
import { MdAddShoppingCart } from "react-icons/md";
import { BiMinus } from "react-icons/bi";

import { Loader2 } from "lucide-react";
import { Cart } from "./cart";

export function CartAddButton({
  item,
  showToast = true,
}: {
  item: CartItem;
  showToast?: boolean;
}) {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(item.count);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const itemInCart = cart.find((val) => val.item.id === item.item.id);
    if (itemInCart) setCount(itemInCart.count);
    else setCount(0);
  }, [cart, item.item.id]);

  if (!mounted) {
    return (
      <div>
        <Loader2 className="animate-spin sm:size-9 size-5 px-2 " />
      </div>
    );
  }

  const undoAdd = () => {
    const updatedCartItems = cart.reduce(
      (acc: CartItem[], cartItem: CartItem) => {
        if (cartItem.item.id === item.item.id) {
          const updatedCount = cartItem.count - 1;
          if (updatedCount > 0) {
            acc.push({ ...cartItem, count: updatedCount });
          }
        } else {
          acc.push(cartItem);
        }
        return acc;
      },
      []
    );

    setCart(updatedCartItems);
  };

  const addtoCart = () => {
    const itemInCart = cart.find((value) => value.item.id === item.item.id);
    if (itemInCart) {
      const updatedCart = cart.map((val) => {
        if (val.item.id === itemInCart.item.id) {
          return { count: val.count + 1, item: item.item };
        } else {
          return val;
        }
      });
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, { count: 1, item: item.item }]);
    }
  };

  const onClick = (showToast: boolean) => {
    addtoCart();
    if (showToast)
      toast("Added item to cart", {
        action: {
          label: "Undo",
          onClick: undoAdd,
        },
      });
  };

  return (
    <div className="flex border border-slate-300 divide-slate-300 rounded divide-x overflow-hidden">
      <button
        className="flex items-center gap-x-2 text-slate-600  p-1 hover:bg-slate-200 hover:text-slate-950 transition-colors ease-in"
        onClick={() => onClick(showToast)}
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

export function CartButton() {
  const { cart, setCart } = useContext(CartContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div>
        <Loader2 className="animate-spin h-9 w-9 px-2 " />
      </div>
    );
  }

  return (
    <Cart cart={cart}/>
  );
}



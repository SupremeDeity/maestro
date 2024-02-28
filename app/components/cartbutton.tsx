"use client";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { CartContext, CartItem, Item } from "../contexts/cartcontext";
import { MdAddShoppingCart } from "react-icons/md";
import { BiCaretRight, BiCartAlt, BiMinus, BiSad } from "react-icons/bi";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CartAddButton({ item }: { item: CartItem }) {
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
        <Loader2 className="animate-spin h-9 w-9 px-2 " />
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
    <div className="flex border border-slate-300 divide-slate-300 rounded divide-x overflow-hidden">
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
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <span
            className={cn(
              cart.length <= 0 ? "hidden" : "flex",
              "absolute left-5 top-1"
            )}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sakura/60"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-400"></span>
          </span>
          <BiCartAlt className="h-9 w-9 px-2 fill-slate-600 hover:bg-slate-100 cursor-pointer transition-colors ease-in" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="uppercase">Cart</SheetTitle>
        </SheetHeader>
        {cart.length <= 0 ? (
          <div className="flex flex-col justify-center items-center text-xl text-slate-600 h-full">
            <BiSad className="text-6xl" /> No items in cart.
          </div>
        ) : (
          <div className="flex flex-col justify-between w-full h-full py-6">
            <ol className="flex flex-col gap-y-2 overflow-scroll mb-2">
              {cart.map((cartItem) => (
                <CartItem key={cartItem.item.id} cartItem={cartItem} />
              ))}
            </ol>
            <div className="flex items-center justify-between w-full bg-slate-200 p-2 rounded-lg">
              <div className="font-semibold">
                Total: $
                <span>
                  {cart
                    .reduce((acc, curr) => {
                      return (
                        acc + Number.parseFloat(curr.item.price) * curr.count
                      );
                    }, 0)
                    .toFixed(2)}
                </span>
              </div>
              <Button>
                Checkout <BiCaretRight />
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

const CartItem = ({ cartItem }: { cartItem: CartItem }) => {
  return (
    <li
      key={cartItem.item.id}
      className="flex bg-slate-100 border-slate-300 gap-x-4 px-4 items-center border rounded-lg p-2 justify-between"
    >
      <span>
        <span className="text-sakura font-semibold text-sm">(${cartItem.item.price})</span>
        {" "}{cartItem.item.name}
      </span>
      <div>
        <CartAddButton key={cartItem.item.id} item={cartItem} />
      </div>
    </li>
  );
};

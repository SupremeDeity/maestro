
import { BiCaretRight, BiCartAlt, BiSad } from "react-icons/bi";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CartItem } from "../contexts/cartcontext";
import { CartAddButton } from "./cartbutton";

export function Cart({cart} : {cart: CartItem[]}) {
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
                <CartListItem key={cartItem.item.id} cartItem={cartItem} />
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


const CartListItem = ({ cartItem }: { cartItem: CartItem }) => {
  return (
    <li
      key={cartItem.item.id}
      className="flex bg-slate-100 border-slate-300 gap-x-4 px-4 items-center border rounded-lg p-2 justify-between"
    >
      <span>
        <span className="text-sakura font-semibold text-sm">
          (${cartItem.item.price})
        </span>{" "}
        {cartItem.item.name}
      </span>
      <div>
        <CartAddButton item={cartItem} showToast={false} />
      </div>
    </li>
  );
};
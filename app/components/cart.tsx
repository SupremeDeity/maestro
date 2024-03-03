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

export function Cart({ cart }: { cart: CartItem[] }) {
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
            <span className="relative inline-flex rounded-full sm:size-3 size-2 bg-red-400"></span>
          </span>
          <BiCartAlt className="sm:size-9 size-8 sm:px-2 px-1 fill-slate-600 hover:bg-slate-100 cursor-pointer transition-colors ease-in" />
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
              <div className="font-semibold sm:text-base text-sm">
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
      className="flex bg-slate-100 border-slate-300 gap-x-4 sm:px-4 p-2 items-center border rounded-lg justify-between"
    >
      <span className="sm:text-base text-sm">
        <span className="text-sakura font-semibold sm:text-sm text-xs">
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

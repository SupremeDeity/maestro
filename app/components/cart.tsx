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
import { getCart } from "../actions/cart_actions";
import { CartButtonActions } from "./cartbutton";

export async function Cart() {
  const cart: Array<number> = JSON.parse((await getCart())?.value ?? "[]");
  const cartUnique =
    cart.length === 0
      ? []
      : cart.filter((item, index) => {
          return cart.indexOf(item) === index;
        });
  const cartCount = cart?.length ?? 0;
  // const productList = await (
  //   await fetch("https://fakestoreapi.com/products")
  // ).json();
  // const totalPrice = cart.reduce((total, productId) => {
  //   const product = productList.find((p: any) => p.id === productId);
  //   return product
  //     ? total + product.price * cart.filter((id) => id === productId).length
  //     : total;
  // }, 0);


  return (
    <Sheet>
      <SheetTrigger>
        <div className="relative">
          <span
            className={cn(
              cartCount <= 0 ? "hidden" : "flex",
              "absolute sm:left-5 left-4 top-1"
            )}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sakura/60"></span>
            <span className="relative inline-flex rounded-full sm:size-3 size-2 bg-red-400"></span>
          </span>
          <BiCartAlt className="sm:size-9 size-7 sm:px-2 px-1 fill-slate-600 hover:bg-slate-100 cursor-pointer transition-colors ease-in" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="uppercase">Cart</SheetTitle>
        </SheetHeader>
        {cartCount <= 0 ? (
          <div className="flex flex-col justify-center items-center text-xl text-slate-600 h-full">
            <BiSad className="text-6xl" /> No items in cart.
          </div>
        ) : (
          <div className="flex flex-col justify-between w-full h-full py-6">
            <ol className="flex flex-col gap-y-2 overflow-scroll mb-2">
              {cartUnique &&
                cartUnique.map((cartItem: number) => (
                  <CartListItem key={cartItem} id={cartItem} />
                ))}
            </ol>
            <div className="flex items-center justify-between w-full bg-slate-200 p-2 rounded-lg">
              <div className="font-semibold sm:text-base text-sm">
                {/* Total: $<span>{totalPrice}</span> */}
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

const CartListItem = async ({ id }: { id: number }) => {
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  const item = await res.json();
  return (
    <li
      key={id}
      className="flex bg-slate-100 border-slate-300 gap-x-4 sm:px-4 p-2 items-center border rounded-lg justify-between"
    >
      <span className="sm:text-base text-sm">
        <span className="text-sakura font-semibold sm:text-sm text-xs">
          (${item.price})
        </span>{" "}
        {item.title}
      </span>
      <div>
        <CartAddButton id={id} showToast={false} />
      </div>
    </li>
  );
};


export async function CartAddButton({
  id,
  showToast = true,
}: {
  id: any;
  showToast?: boolean;
}) {
  id = Number.parseInt(id)
  const updatedCart = await getCart();
  const cartArr = JSON.parse(updatedCart?.value ?? "[]");
  const c = cartArr.filter((cId: number) => cId === id).length;

  return (
    <div className="flex border border-slate-300 divide-slate-300 rounded divide-x overflow-hidden">
      <CartButtonActions id={id} count={c} showToast={showToast} />
    </div>
  );
}

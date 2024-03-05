"use client";

import { toast } from "sonner";
import { addToCart, undoAdd } from "../actions/cart_actions";
import { MdAddShoppingCart } from "react-icons/md";
import { BiMinus } from "react-icons/bi";
import { useOptimistic } from "react";

export function CartButtonActions({
  id,
  showToast,
  count,
}: {
  id: string;
  showToast: boolean;
  count: number;
}) {
  const [optimisticCount, setOptimisticCount] = useOptimistic(
    count,
    (state, newState: "ADD" | "UNDO") => {
      if (newState === "ADD") return state + 1;
      else return state - 1;
    }
  );

  const onClick = async (
    event: React.MouseEvent<HTMLElement>,
    showToast: boolean
  ) => {
    event.preventDefault();
    setOptimisticCount("ADD");
    await addToCart(id);
    if (showToast)
      toast("Added item to cart", {
        action: {
          label: "Undo",
          onClick: async () => {
            setOptimisticCount("UNDO");
            await undoAdd(id);
          },
        },
      });
  };

  return (
    <>
      <button
        className="flex items-center gap-x-2 text-slate-600  p-1 hover:bg-slate-200 hover:text-slate-950 transition-colors ease-in"
        onClick={(event) => onClick(event, showToast)}
      >
        <MdAddShoppingCart className="text-xl" />
        {optimisticCount > 0 && (
          <span className="text-sm">{optimisticCount}</span>
        )}
      </button>
      {optimisticCount > 0 && (
        <button
          className="text-slate-600 p-1 hover:bg-slate-200 hover:text-slate-950 transition-colors ease-in"
          onClick={async (event) => {
            event.preventDefault();
            setOptimisticCount("UNDO");
            await undoAdd(id);
          }}
        >
          <BiMinus className="text-sm fill-red-600" />
        </button>
      )}
    </>
  );
}

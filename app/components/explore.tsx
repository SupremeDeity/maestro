import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { CartAddButton } from "./cart";

export async function ExploreSection() {
  const itms = await (await fetch("https://fakestoreapi.com/products")).json();

  return (
    <div className="grid sm:mx-4 grid-cols-2 lg:grid-cols-4 md:grid-cols-3 p-4 gap-6">
      {itms.map((item: any) => (
        <GridItem
          key={item.id}
          id={item.id}
          itemName={item.title}
          itemPrice={item.price}
          itemImage={item.image}
          itemRating={item.rating.rate}
        />
      ))}
    </div>
  );
}

function GridItem({
  id,
  itemName,
  itemPrice,
  itemImage,
  itemRating,
}: {
  id: number;
  itemName: string;
  itemPrice: string;
  itemImage: string;
  itemRating: string;
}) {
  return (
    <Link href={"/overview/" + id} className="hover:outline-blue-300 min-h-[370px] hover:outline rounded-lg border border-slate-300 bg-white overflow-hidden flex flex-col items-center gap-y-2">
      <Image
        src={itemImage}
        width={209}
        height={128}
        alt="item"
        className="max-w-[256px] max-h-[256px] w-full h-full p-2"
      />
      <span className="flex items-center justify-between w-full px-2 sm:px-4">
        <div className="flex items-center gap-1 sm:text-base text-sm">
          <FaStar className="fill-yellow-400" /> {itemRating}
        </div>
        <CartAddButton
          id={id}
        />
      </span>
      <div className="flex flex-col lg:flex-row text-sm self-start py-4 px-4 lg:px-6 lg:items-center justify-between w-full gap-x-4 h-[30%] lg:h-1/4  border-t overflow-y- border-t-slate-300">
        <span className="line-clamp-2 sm:text-base text-xs">{itemName}</span>
        <span className="text-sakura font-semibold">${itemPrice}</span>
      </div>
    </Link>
  );
}

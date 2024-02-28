import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { CartAddButton } from "./cartbutton";

export async function ExploreSection() {
  const itms = await (await fetch("https://fakestoreapi.com/products")).json();

  return (
    <div className="grid sm:mx-4 my-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-4 gap-2">
      {itms.map((item: any) => (
        <GridItem
          key={item.id}
          id={item.id}
          description={item.description}
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
  description,
}: {
  id: string;
  itemName: string;
  itemPrice: string;
  itemImage: string;
  itemRating: string;
  description: string;
}) {
  return (
    <div className="hover:outline-blue-300 hover:outline rounded-lg border border-slate-300  bg-white overflow-hidden flex flex-col items-center gap-y-2">
      <Image
        src={itemImage}
        width={209}
        height={128}
        alt="item"
        className="max-w-[256px] max-h-[256px] w-full h-full py-1"
      />
      <span className="flex items-center justify-between w-full px-2 sm:px-4">
        <div className="flex items-center gap-1 sm:text-base text-sm">
          <FaStar className="fill-yellow-400" /> {itemRating}
        </div>
        <CartAddButton
          item={{
            count: 0,
            item: {id: id,
            description: description,
            image: itemImage,
            name: itemName,
            price: itemPrice,
            rating: itemRating,}
          }}
        />
      </span>
      <div className="flex flex-col lg:flex-row text-sm self-start py-4 px-4 lg:px-6 lg:items-center justify-between w-full gap-x-4 h-[30%] lg:h-1/4  border-t border-t-slate-300">
        <span className="line-clamp-2 sm:text-base text-xs">{itemName}</span>
        <span className="text-sakura font-semibold">${itemPrice}</span>
      </div>
    </div>
  );
}

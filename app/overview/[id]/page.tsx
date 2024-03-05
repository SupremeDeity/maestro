import { CartAddButton } from "@/app/components/cart";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaStar } from "react-icons/fa6";

export async function generateStaticParams() {
  const items = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );

  return items.map((item: any) => ({
    id: item.id.toString(),
  }));
}

export default async function ItemOverview({
  params,
}: {
  params: { id: number };
}) {

  if (params.id > 20) return notFound();
  const itemRes = await fetch("https://fakestoreapi.com/products/" + params.id);
  const item = await itemRes.json();

  return (
    <div className="flex md:flex-row flex-col m-6 rounded-lg bg-white divide-x text-lg h-max">
      <div className="p-3 md:w-1/2 h-full">
        <Image
          src={item.image}
          width={209}
          height={128}
          alt="item"
          className="max-w-[300px] max-h-[300px] w-full h-full p-6 mx-auto"
        />
        <hr />
        <div className="mt-2 flex gap-x-2 justify-between">
          {item.title}
          <div>
            <CartAddButton id={params.id} />
          </div>
        </div>
      </div>
      <div className="p-3 w-full flex flex-col justify-between">
        <div>
          <div className="font-semibold">Description:</div>
          <span className="text-base">{item.description}</span>
        </div>
        <div className="text-lg font-semibold">
          <div className="">Price:</div>
          <span className="text-sakura">${item.price}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold">Rating</span>
            <span className="flex items-center gap-x-2">
              <FaStar className="fill-yellow-400" /> {item.rating.rate}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

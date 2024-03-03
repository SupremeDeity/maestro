import Image from "next/image";

export default async function ItemOverview({
  params,
}: {
  params: { id: string };
}) {
  const item = await (
    await fetch("https://fakestoreapi.com/products/" + params.id)
  ).json();
  return (
    <div className="flex p-6">
      <div className="bg-white rounded-lg">
        <Image
          src={item.image}
          width={209}
          height={128}
          alt="item"
          className="max-w-[300px] max-h-[300px] w-full h-full p-6"
        />
      </div>
    </div>
  );
}

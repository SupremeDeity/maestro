import { Apple, Monitor, ShieldPlus, Sofa, Watch, Shirt } from "lucide-react";

function CategoryItem({
  children,
  name,
}: {
  children?: React.ReactNode;
  name: string;
}) {
  return (
    <div className="sm:min-w-[120px] min-w-[100px] flex flex-col items-center justify-center hover:bg-slate-200/60 cursor-pointer py-5">
      {children}
      <span className="my-1 text-xs">{name}</span>
    </div>
  );
}

export function CategorySection() {
  return (
      <div className="sm:sticky max-h-screen min-h-max sm:block grid grid-cols-2 divide-x left-0 top-[74px] sm:mx-0 mx-4 sm:ml-4 my-4 h-max shadow text-sm font-semibold text-center divide-y uppercase bg-white rounded-lg border border-slate-300 divide-slate-200">
        <CategoryItem name="Groceries">
          <Apple className="w-full"/>
        </CategoryItem>
        <CategoryItem name="Electronics">
          <Monitor className="w-full" />
        </CategoryItem>
        <CategoryItem name="Fashion">
          <Shirt className="w-full" />
        </CategoryItem>
        <CategoryItem name="Decor">
          <Sofa className="w-full" />
        </CategoryItem>
        <CategoryItem name="Accessories">
          <Watch className="w-full" />
        </CategoryItem>
        <CategoryItem name="Healthcare">
          <ShieldPlus className="w-full" />
        </CategoryItem>
      </div>
  );
}

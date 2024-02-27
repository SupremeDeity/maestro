import { Apple, Monitor, ShieldPlus, Sofa, Watch, Shirt } from "lucide-react";

function CategoryItem({
  children,
  name,
}: {
  children?: React.ReactNode;
  name: string;
}) {
  return (
    <div className="min-w-[160px] xl:min-w-[220px] flex flex-col items-center justify-center hover:bg-slate-200/60 cursor-pointer py-6">
      {children}
      <span className="my-1">{name}</span>
    </div>
  );
}

export function CategorySection() {
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-6 mx-4 md:my-0 my-2 shadow text-sm font-semibold text-center divide-x divide-y uppercase bg-white rounded-lg border border-slate-300 divide-slate-200">
        <CategoryItem name="Groceries">
          <Apple className="h-8 w-full"/>
        </CategoryItem>
        <CategoryItem name="Electronics">
          <Monitor className="h-8 w-full" />
        </CategoryItem>
        <CategoryItem name="Fashion">
          <Shirt className="h-8 w-full" />
        </CategoryItem>
        <CategoryItem name="Decor">
          <Sofa className="h-8 w-full" />
        </CategoryItem>
        <CategoryItem name="Accessories">
          <Watch className="h-8 w-full" />
        </CategoryItem>
        <CategoryItem name="Healthcare">
          <ShieldPlus className="h-8 w-full" />
        </CategoryItem>
      </div>
    </div>
  );
}

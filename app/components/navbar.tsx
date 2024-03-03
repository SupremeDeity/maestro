import { Menu } from "lucide-react";
import { kaushanScript } from "../fonts";
import { BiSearch, BiUser } from "react-icons/bi";
import { cn } from "@/lib/utils";
import { CartButton } from "./cartbutton";


export function NavBar() {
  return (
    <div className="flex justify-between items-center p-4 shadow bg-white border-b border-b-slate-300 w-screen h-[72px] fixed z-50">
      <nav className="uppercase md:flex gap-x-4 text-sm font-medium hidden">
        <span className="hover:text-sakura transition-colors ease-in duration-200 cursor-pointer">
          Today&apos;s Pick
        </span>
        <span className="hover:text-sakura transition-colors ease-in duration-200 cursor-pointer">
          Men
        </span>
        <span className="hover:text-sakura transition-colors ease-in duration-200 cursor-pointer">
          Women
        </span>
        <span className="hover:text-sakura transition-colors ease-in duration-200 cursor-pointer">
          Summer
        </span>
      </nav>
      <nav className="md:hidden flex">
        <Menu />
      </nav>
      <span
        className={cn(
          kaushanScript.className,
          "text-2xl sm:text-3xl text-sakura flex-1 text-center select-none"
        )}
      >
        Maestro
      </span>
      <div className="flex items-center gap-x-4">
        <div className="bg-white overflow-hidden flex items-center rounded-md sm:shadow border border-slate-300 divide-x divide-slate-300 border-l-0 sm:border-l">
          <div className="relative hover:bg-slate-100  transition-colors ease-in hidden sm:flex">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <BiSearch className="fill-slate-400 h-5 w-5 " />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="sm:text-sm bg-inherit w-60 py-2 pl-9 pr-3 focus:outline-none"
            />
          </div>
          <CartButton />
        </div>
        <div className="rounded-full bg-sakura sm:size-8 cursor-pointer hover:bg-sakura/60  transition-colors ease-in">
          <BiUser className="w-full h-full p-1 fill-white" />
        </div>
      </div>
    </div>
  );
}

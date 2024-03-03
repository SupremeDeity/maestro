import Image from "next/image";
import { LandingCarousel } from "./components/carousel";
import { NavBar } from "./components/navbar";
import { CategorySection } from "./components/category";
import { ExploreSection } from "./components/explore";

export default function Home() {
  return (
    <div className="h-screen">
      <NavBar />
      <LandingCarousel />
      <div className="flex sm:flex-row flex-col "> 
      <CategorySection />
      <ExploreSection />
      </div>
    </div>
  );
}

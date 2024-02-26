import Image from "next/image";
import { LandingCarousel } from "./components/carousel";
import { NavBar } from "./components/navbar";
import { CategorySection } from "./components/category";

export default function Home() {
  return (
    <div className="h-screen">
      <NavBar />
      <LandingCarousel />
      <CategorySection />
    </div>
  );
}

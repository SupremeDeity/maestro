"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BiCaretRight } from "react-icons/bi";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

export function LandingCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 8000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  return (
    <Carousel 
    plugins={[plugin.current]}
    >
      <CarouselContent className="select-none mt-[72px]">
        <CarouselItem className="border-b border-b-slate-300 h-[400px] overflow-hidden">
          <div className="bg-gradient-to-r h-full w-full from-sakura/40 to-white/50 flex sm:flex-row flex-col items-center justify-around">
            <div className=" text-5xl leading-[40px] sm:text-7xl sm:leading-[60px] uppercase font-semibold drop-shadow-[2px_4px_0px_theme(colors.pink.600)]">
              Buy <br/>Latest
              <br />
              <span className="text-pink-800">Wear</span>
              <Button className="mt-4 uppercase font-semibold sm:flex hidden gap-x-1 hover:bg-slate-900/80">
                Shop Now <BiCaretRight />
              </Button>
            </div>
            <Image
              width={512}
              height={512}
              src={"/shoe-carousel.png"}
              alt="carousel-1-shoe"
              className="sm:size-96 size-48"
            />
            <Button className="uppercase font-semibold sm:hidden flex gap-x-1 hover:bg-slate-900/80">
              Shop Now <BiCaretRight />
            </Button>
          </div>
        </CarouselItem>
        <CarouselItem className="border-b border-b-slate-300 h-[400px] overflow-hidden">
          <div className="bg-gradient-to-r h-full w-full to-blue-800/60 from-white/50 flex md:flex-row flex-col items-center justify-around">
            <Image
              width={717}
              height={483}
              src={"/card-carousel.png"}
              alt="carousel-2-card"
              className="md:h-[200px] md:w-[320px] w-[180px] -rotate-45"
            />
            <div className="text-center md:text-start text-5xl leading-[40px] md:text-7xl md:leading-[60px] uppercase font-semibold drop-shadow-[2px_4px_0px_theme(colors.blue.600)]">
              <span className="text-blue-800">10%</span>
              <br />
              Cashback
              <br />
              <span className="text-5xl">On VISA Cards</span>
              <Button className="mt-4 uppercase font-semibold flex md:mx-0 mx-auto gap-x-1 hover:bg-slate-900/80">
                Shop Now <BiCaretRight />
              </Button>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <div className="text-center">
        <CarouselPrevious className="static md:inline-flex hidden" />
        <CarouselNext className="static md:inline-flex hidden" />
      </div>
    </Carousel>
  );
}

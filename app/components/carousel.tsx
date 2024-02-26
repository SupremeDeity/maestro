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
    <Carousel plugins={[plugin.current]}>
      <CarouselContent className="select-none">
        <CarouselItem className="border-b border-b-slate-300">
          <div className="bg-gradient-to-r h-full w-full from-sakura/40 to-white/50 flex items-center justify-around">
            <span className="text-7xl uppercase font-semibold leading-[60px] drop-shadow-[2px_4px_0px_theme(colors.pink.600)]">
              Buy
              <br />
              Latest
              <br />
              <span className="text-pink-800">Wear</span>
              <Button className="mt-4 uppercase font-semibold flex gap-x-1 hover:bg-slate-900/80">
                Shop Now <BiCaretRight />
              </Button>
            </span>
            <Image
              width={512}
              height={512}
              src={"/shoe-carousel.png"}
              alt="carousel-1-shoe"
              className="size-96"
            />
          </div>
        </CarouselItem>
        <CarouselItem className="border-b border-b-slate-300 h-[400px]">
          <div className="bg-gradient-to-r h-full w-full to-blue-800/60 from-white/50 flex items-center justify-around">
            <Image
              width={717}
              height={483}
              src={"/card-carousel.png"}
              alt="carousel-2-card"
              className="h-[300px] w-[483px]"
            />
            <span className="text-7xl uppercase font-semibold leading-[60px] drop-shadow-[2px_4px_0px_theme(colors.blue.600)]">
              <span className="text-blue-800">10%</span>
              <br />
              Cashback
              <br />
              <span className="text-5xl">On VISA Cards</span>
              <Button className="mt-4 uppercase font-semibold flex gap-x-1 hover:bg-slate-900/80">
                Shop Now <BiCaretRight />
              </Button>
            </span>
          </div>
        </CarouselItem>
      </CarouselContent>
      <div className="text-center">
        <CarouselPrevious className="static " />
        <CarouselNext className="static " />
      </div>
    </Carousel>
  );
}

"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { useCallback, useState } from "react";
import DotButton, { useDotButton } from "./DotButton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

export type Slide = {
  image: string;
  title?: string;
  subtitle?: string;
  button1Label?: string;
  button1Link?: string;
};

type SliderProps = {
  slides?: Slide[];
};

const options = {
  loop: true,
};

function Slider({ slides }: SliderProps) {
  const [api, setApi] = useState<CarouselApi>();

  const onButtonClick = useCallback((api: CarouselApi) => {
    const { autoplay } = api.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    api,
    onButtonClick
  );

  if (!slides) return null;

  return (
    <div className="w-full relative">
      <Carousel
        opts={options}
        plugins={[Autoplay({ delay: 5000 })]}
        setApi={setApi}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.image} className="relative">
              <div className="absolute flex flex-col justify-center h-full container left-1/2 transform -translate-x-1/2">
                {slide.title ? (
                  <h2
                    className="text-white text-8xl font-bold mb-12 w-fit"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(slide.title) }}
                  />
                ) : null}
                {slide.subtitle ? (
                  <span
                    className="text-white text-4xl font-bold mb-12 w-fit"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(slide.subtitle) }}
                  />
                ) : null}
                {slide.button1Label ? (
                  <Link
                    className="w-fit bg-primary hover:bg-primary/90 text-white text-3xl rounded-md px-8 py-6"
                    href={slide.button1Link ?? "#"}
                  >
                    {slide.button1Label}
                  </Link>
                ) : null}
              </div>
              <Image
                src={`${process.env.NEXT_PUBLIC_SITE_URL}${slide.image}`}
                width="1920"
                height="800"
                alt={slide.title ?? `Slide ${index + 1}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center my-4 absolute bottom-0 w-full">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              "w-4 h-4 mx-2 cursor-pointer rounded-full bg-transparent border-2 border-white",
              { "bg-white": index === selectedIndex }
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;

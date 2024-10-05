"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const carouselImage = [
  {
    name: "Dog",
    src: "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg",
  },
  {
    name: "Cat",
    src: "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg",
  },
];

export const FirstSectionLogo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [emblaRef] = useEmblaCarousel({ axis: "y", loop: true }, [
    Autoplay({ delay: 2200, stopOnInteraction: false }),
  ]);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        isVisible ? "visible" : ""
      } slide-down h-full md:w-[19vw] lg:w-[16vw] flex items-center justify-center`}
    >
      <div ref={emblaRef} className="embla h-full">
        <div className="embla__container h-full">
          {carouselImage?.map((d) => {
            return (
              <Image
                key={d.name}
                src={d.src}
                alt={`Logo ${d.name}`}
                height={300}
                width={300}
                className="embla__slide object-contain h-full w-full"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

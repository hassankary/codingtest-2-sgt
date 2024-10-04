"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const SixSectionCard = ({ src, name, description }) => {
  const [isVisible, setIsVisible] = useState(false);
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
      } slide-up-soft h-full flex flex-col items-center justify-start text-center hover:translate-x-3.5 hover:-translate-y-3.5 transition-all duration-300 ease-in-out`}
    >
      <Image
        src={src}
        alt={`${name} - Image`}
        height={350}
        width={350}
        unoptimized
        className="mb-[16px] grayscale"
      />
      <h1 className=" mb-[0.5em] text-[3.5vw] xs:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] leading-[1.25em]">
        {name}
      </h1>
      <p className="text-[3vw] xs:text-[2.5vw] sm:text-[2vw] lg:text-[1.25vw]">
        {description}
      </p>
    </div>
  );
};

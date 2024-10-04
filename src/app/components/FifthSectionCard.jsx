"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const FifthSectionCard = ({ src, name, description }) => {
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
    <Link
      ref={ref}
      href={"/"}
      className={`${isVisible ? "visible" : ""} slide-up bg-[#fcf944]`}
    >
      <div className="h-full flex flex-col items-center justify-start p-[14px] xs:p-7 text-center border-[3.2px] border-black hover:scale-90 transition-all duration-300 ease-in-out">
        <Image
          src={src}
          alt={`${name} - Image`}
          height={350}
          width={350}
          unoptimized
          className="mb-[14px] xs:mb-[28px] grayscale"
        />
        <h1 className=" mb-[0.5em] text-[3.5vw] xs:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] leading-[1.25em]">
          {name}
        </h1>
        <p className="text-[3vw] xs:text-[2.5vw] sm:text-[2vw] lg:text-[1.25vw]">
          {description}
        </p>
      </div>
    </Link>
  );
};

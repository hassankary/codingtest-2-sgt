"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const HelpButton = () => {
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
        isVisible ? "visible-x" : ""
      } slide-right w-fit mt-[10%] bg-[#FF97D0]`}
    >
      <div className="group flex items-center justify-center space-x-4 px-8 py-4 text-center border-[3.2px] border-black">
        <span className="font-bold text-[3.5vw] xs:text-[2vw] lg:text-[1.75vw]">
          apply for help
        </span>
        <Image
          src={
            "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6273a272fe3407579aa3d6c9_PngItem_344959-p-500.png"
          }
          alt="Arrow Icon"
          height={100}
          width={100}
          unoptimized
          className="max-h-[30px] max-w-[30px] md:max-h-[40px] md:max-w-[40px] lg:max-h-[50px] lg:max-w-[50px] flex object-scale-down rotate-180 group-hover:translate-x-3 transition-all duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

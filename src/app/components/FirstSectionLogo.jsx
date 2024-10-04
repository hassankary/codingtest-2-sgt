"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const FirstSectionLogo = () => {
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
    <div ref={ref} className={`${isVisible ? "visible" : ""} slide-down flex items-center h-[23vw] w-[23vw] md:h-[19vw] md:w-[19vw] lg:h-[16vw] lg:w-[16vw]`}>
      <Image
        src={
          "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg"
        }
        alt="Logo Image Animal"
        height={300}
        width={300}
      />
    </div>
  );
};

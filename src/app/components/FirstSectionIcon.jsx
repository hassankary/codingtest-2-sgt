"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { logoFirstSection } from "../data/data";

export const FirstSectionIcon = () => {
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
      className={`${isVisible ? "visible" : ""} slide-up-hero flex justify-center`}
    >
      {logoFirstSection?.map((d) => {
        return (
          <div
            key={d.src}
            className="flex justify-center h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 p-2"
          >
            <Image src={d.src} alt={d.alt} height={48} width={48} unoptimized />
          </div>
        );
      })}
    </div>
  );
};

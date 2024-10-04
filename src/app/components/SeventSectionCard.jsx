"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const SeventhSectionCard = ({ src, index }) => {
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
      className={` ${
        isVisible ? "visible" : ""
      } slide-up h-full flex flex-col items-center justify-center text-center`}
    >
      <Image
        src={src}
        alt={`Partner ${index} - Image`}
        height={350}
        width={350}
        unoptimized
        className="grayscale"
      />
    </div>
  );
};

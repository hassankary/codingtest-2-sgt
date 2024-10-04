"use client";
import { useEffect, useRef, useState } from "react";

export const FirstSectionTitle = () => {
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
      } slide-left h-[23vw] w-[30vw] xs:w-[25vw] md:h-[19vw] md:w-[30vw] lg:h-[16vw] lg:w-[23vw] flex items-center font-semibold text-[6.15vw] xs:text-[5vw] lg:text-[4vw] leading-[1em]`}
    >
      Innovative Solutions for Animals
    </div>
  );
};

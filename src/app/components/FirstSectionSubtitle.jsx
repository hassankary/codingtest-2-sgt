"use client";
import { useEffect, useRef, useState } from "react";

export const FirstSectionSubtitle = () => {
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
      } slide-up-hero flex justify-center text-[3.75vw] xs:text-[2.5vw] text-center`}
    >
      charity organization
    </div>
  );
};

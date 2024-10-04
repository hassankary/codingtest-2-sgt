"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const LastSectionImage = () => {
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
      } slide-up-soft w-full xs:w-1/2 lg:w-full`}
    >
      <Image
        src={
          "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/62647f9fbe07235ba9b28d67_star-white-with-animals.svg"
        }
        alt={"Image - Footer"}
        height={700}
        width={700}
        unoptimized
      />
    </div>
  );
};

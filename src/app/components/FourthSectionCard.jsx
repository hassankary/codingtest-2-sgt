"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const FourthSectionCard = ({ description }) => {
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
      className={`${isVisible ? "visible" : ""} slide-up bg-white`}
    >
      <div className="h-full flex flex-col items-center justify-center p-[28px] text-center space-y-[0.5em] border-[3.2px] border-black hover:translate-x-3.5 hover:-translate-y-3.5 transition-all duration-300 ease-in-out">
        <h1 className=" text-[3.5vw] xs:text-[2.5vw] lg:text-[1.5vw]">
          {description}
        </h1>
      </div>
    </Link>
  );
};

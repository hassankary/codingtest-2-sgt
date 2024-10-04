"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const ThirdSectionCard = ({ title, subtitle }) => {
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
      className={`${
        isVisible ? "visible-x" : ""
      } slide-right bg-black even:bg-[#31BE32] last:bg-[#FF97D0]`}
    >
      <div className="flex flex-col px-[42px] py-7 xs:p-[56px] space-y-[0.5em] border-[3.2px] border-white hover:translate-x-3.5 hover:-translate-y-3.5 transition-all duration-200">
        <h1 className="font-semibold text-[6vw] xs:text-[3.5vw] lg:text-[3vw]">
          {title}
        </h1>
        <p className="text-[3.75vw] xs:text-[2.5vw] lg:text-[2vw] leading-[1.5em] mt-[0.5em] mb-[1em]">
          {subtitle}
        </p>
      </div>
    </Link>
  );
};

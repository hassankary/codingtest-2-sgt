"use client";
import { useEffect, useState } from "react";

export const DonateButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsVisible(true);
    }
  }, []);

  return (
    <button
      className={`${
        isVisible ? "visible" : ""
      } slide-down z-10 fixed top-7 right-7 md:top-[42px] lg:top-7 lg:right-7 md:right-10 text-black text-[4vw] xs:text-[2.75vw] md:text-[2.5vw] lg:text-[2vw] bg-white`}
    >
      <h1 className="px-[7px] py-[3.5px] border-[3.2px] border-black hover:translate-x-2.5 hover:-translate-y-2.5 transition-all duration-300 ease-in-out">
        <span>donate</span>
      </h1>
    </button>
  );
};

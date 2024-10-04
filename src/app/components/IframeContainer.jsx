"use client";
import { useEffect, useRef, useState } from "react";

export const IframeContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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
      id="iframe-container"
      className={`${
        isVisible ? "visible" : ""
      } slide-up-soft relative mt-[2em] md:mt-[3em] lg:mt-[4em] w-full aspect-[16/9]`}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/5Wk1rp99B7o?wmode=opaque&widget_referrer=https%3A%2F%2Fisa-charity.webflow.io%2F&enablejsapi=1&origin=https%3A%2F%2Fcdn.embedly.com&widgetid=1"
        allowFullScreen
      />
    </div>
  );
};

"use client";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";

export const IframeContainer = () => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: "#iframe-container",
      triggerHook: 1,
      reverse: true,
    })
      .setClassToggle("#iframe-container", "visible")
      .addTo(controller);

    return () => {
      controller.destroy(true);
    };
  }, []);

  return (
    <div
      id="iframe-container"
      className="slide-up-soft relative mt-[2em] md:mt-[3em] lg:mt-[4em] w-full aspect-[16/9]"
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/5Wk1rp99B7o?wmode=opaque&widget_referrer=https%3A%2F%2Fisa-charity.webflow.io%2F&enablejsapi=1&origin=https%3A%2F%2Fcdn.embedly.com&widgetid=1"
        allowFullScreen
      />
    </div>
  );
};

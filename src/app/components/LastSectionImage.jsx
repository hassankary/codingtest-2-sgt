"use client";
import Image from "next/image";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";

export const LastSectionImage = () => {
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
      triggerElement: "#image-footer",
      triggerHook: 1,
      reverse: true,
    })
      .setClassToggle("#image-footer", "visible")
      .addTo(controller);

    return () => {
      controller.destroy(true);
    };
  }, []);

  return (
    <div id="image-footer" className={`slide-up-soft w-full xs:w-1/2 lg:w-full`}>
      <Image
        src={
          "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/62647f9fbe07235ba9b28d67_star-white-with-animals.svg"
        }
        alt={"Image Footer"}
        height={700}
        width={700}
        unoptimized
      />
    </div>
  );
};

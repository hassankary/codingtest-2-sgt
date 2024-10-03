import Image from "next/image";
import { logoFirstSection } from "./data/data";

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-center items-center px-[10%] bg-[#FCF944]">
        <button className="fixed top-7 right-7 md:top-[42px] lg:top-7 lg:right-7 md:right-10 px-[7px] py-[3.5px] text-black text-[4vw] xs:text-[2.75vw] md:text-[2.5vw] lg:text-[2vw] bg-white border-[3.2px] border-black">
          <h1>donate</h1>
        </button>
        <div className="flex flex-col space-y-[16px] xs:space-y-[32px] text-black ">
          <div className="flex justify-center space-x-[6%]">
            <div className="flex items-center h-[23vw] w-[23vw] md:h-[19vw] md:w-[19vw] lg:h-[16vw] lg:w-[16vw] ">
              <Image
                src={
                  "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg"
                }
                alt="Logo Image Animal"
                height={300}
                width={300}
              />
            </div>
            <div className="h-[23vw] w-[30vw] xs:w-[25vw] md:h-[19vw] md:w-[30vw] lg:h-[16vw] lg:w-[23vw] flex items-center font-semibold text-[6.15vw] xs:text-[5vw] lg:text-[4vw] leading-[1em]">
              Innovative Solutions for Animals
            </div>
          </div>
          <div className="flex flex-col space-y-[32px] xs:space-y-0">
            <div
              id="isa-text"
              className="flex justify-center text-[3.75vw] xs:text-[2.5vw] text-center"
            >
              charity organization
            </div>
            <div className="flex justify-center">
              {logoFirstSection?.map((d) => {
                return (
                  <div
                    key={d.src}
                    className="flex justify-center h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 p-2"
                  >
                    <Image
                      src={d.src}
                      alt={d.alt}
                      height={48}
                      width={48}
                      unoptimized
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-[10%] text-black bg-white">
        <div className="w-full ">
          <h1 className=" font-semibold text-[4vw]">We are</h1>
          <p className="text-[2.5vw] leading-[1.5em] mt-[0.5em] mb-[1em]">
            team of like-minded people, socially active companies, media
            personalities, volunteers who help low-income shelters and foster
            carers to support homeless animals.
          </p>
          <h1 className=" font-semibold text-[4vw]">Our primary goal</h1>
          <p className="text-[2.5vw] leading-[1.5em] mt-[0.5em] mb-[1em]">
            is to provide animals with the most necessary things - food,
            medicine, and urgent needs for the livelihood of shelters. We
            believe in our power and the power of conscious citizens who care
            about the environment and their health, who understand the
            importance of helping each other, especially our little friends.
            Growth begins with your care for your loved ones. Animals are one of
            the closest creatures to humans who remain with us throughout our
            lives. We all know the healing power of warmth, grace, and big
            loving eyes.
          </p>
          <div className="ml-4 xs:ml-8 lg:ml-16 p-4 text-[2.5vw] italic border-[#ff97d0] border-l-4">
            {`"Animals need to have friends. Just like humans." - James Herriot,
            All Creatures Great and Small`}
          </div>
          <p className="text-[2.5vw] leading-[1.5em] mt-[0.5em] mb-[1em]">
            Who else if not we should support our younger brothers, especially
            in difficult times? Let&apos;s be friends!
          </p>
          <div
            id="iframe-container"
            className="relative mt-[2em] md:mt-[3em] lg:mt-[4em] w-full aspect-[16/9]"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/5Wk1rp99B7o?wmode=opaque&widget_referrer=https%3A%2F%2Fisa-charity.webflow.io%2F&enablejsapi=1&origin=https%3A%2F%2Fcdn.embedly.com&widgetid=1"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
}

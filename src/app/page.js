import Image from "next/image";
import {
  dataFifthSection,
  dataFourthSection,
  dataSeventhSection,
  dataSixthSection,
  dataThirdSection,
  logoFirstSection,
} from "./data/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-center items-center px-[10%] bg-[#FCF944]">
        <button className="z-10 fixed top-7 right-7 md:top-[42px] lg:top-7 lg:right-7 md:right-10 text-black text-[4vw] xs:text-[2.75vw] md:text-[2.5vw] lg:text-[2vw] bg-white">
          <h1 className="px-[7px] py-[3.5px] border-[3.2px] border-black hover:translate-x-2.5 hover:-translate-y-2.5 transition-all duration-300 ease-in-out">
            <span>donate</span>
          </h1>
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
          <h1 className="font-semibold text-[8vw] xs:text-[4vw]">We are</h1>
          <p className="text-[3.75vw] xs:text-[2.5vw] leading-[1.5em] mt-[0.5em] mb-[1em]">
            team of like-minded people, socially active companies, media
            personalities, volunteers who help low-income shelters and foster
            carers to support homeless animals.
          </p>
          <h1 className="font-semibold text-[8vw] xs:text-[4vw]">
            Our primary goal
          </h1>
          <p className="text-[3.75vw] xs:text-[2.5vw] leading-[1.5em] mt-[0.5em] mb-[1em]">
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
          <div className="ml-4 xs:ml-8 lg:ml-16 p-4 text-[3.75vw] xs:text-[2.5vw] italic border-[#ff97d0] border-l-4">
            &quot;Animals need to have friends. Just like humans.&quot; <br /> -
            James Herriot, All Creatures Great and Small
          </div>
          <p className="text-[3.75vw] xs:text-[2.5vw] leading-[1.5em] mt-[0.5em] mb-[1em]">
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
      <div className="flex justify-center items-center p-[10%] text-white bg-[#3E88FF]">
        <div className="w-full">
          <h1 className="font-semibold text-[8vw] xs:text-[4vw]">
            Our projects
          </h1>
          <p className="text-[3.75vw] xs:text-[2.5vw] leading-[1.5em] mt-[0.5em] mb-[1em]">
            are very different in terms of priority, scale and complexity of
            implementation.
          </p>
          <div className="mt-7 lg:mt-[4em] grid grid-cols-1 gap-y-7">
            {dataThirdSection?.map((d) => {
              return (
                <Link
                  href={"/"}
                  key={d.title}
                  className="bg-black even:bg-[#31BE32] last:bg-[#FF97D0]"
                >
                  <div className="flex flex-col px-[42px] py-7 xs:p-[56px] space-y-[0.5em] border-[3.2px] border-white hover:translate-x-3.5 hover:-translate-y-3.5 transition-all duration-200">
                    <h1 className="font-semibold text-[6vw] xs:text-[3.5vw] lg:text-[3vw]">
                      {d.title}
                    </h1>
                    <p className="text-[3.75vw] xs:text-[2.5vw] lg:text-[2vw] leading-[1.5em] mt-[0.5em] mb-[1em]">
                      {d.subtitle}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-[10%] text-black bg-[#fcf944]">
        <div className="w-full">
          <h1 className="font-semibold text-[8vw] xs:text-[4vw]">
            We want to help
          </h1>
          <p className="text-[3.75vw] xs:text-[2.5vw] leading-[1.5em] mt-[0.5em] mb-[1em]">
            homeless packs, volunteers, guardians, overstayers, shelters and
            other organisations
          </p>
          <div className="mt-[28px] lg:mt-[56px] grid grid-cols-2 lg:grid-cols-3 gap-7 xs:gap-y-[42px] xs:gap-x-[4%] lg:gap-x-[3.5%]">
            {dataFourthSection?.map((d) => {
              return (
                <Link href={"/"} key={d} className="bg-white">
                  <div className="h-full flex flex-col items-center justify-center p-[28px] text-center space-y-[0.5em] border-[3.2px] border-black hover:translate-x-3.5 hover:-translate-y-3.5 transition-all duration-300 ease-in-out">
                    <h1 className=" text-[3.5vw] xs:text-[2.5vw] lg:text-[1.5vw]">
                      {d}
                    </h1>
                  </div>
                </Link>
              );
            })}
          </div>
          <Link href={"#"}>
            <div className="w-fit mt-[10%] bg-[#FF97D0]">
              <div className="group flex items-center justify-center space-x-4 px-8 py-4 text-center border-[3.2px] border-black">
                <span className="font-bold text-[3.5vw] xs:text-[2vw] lg:text-[1.75vw]">
                  apply for help
                </span>
                <Image
                  src={
                    "https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6273a272fe3407579aa3d6c9_PngItem_344959-p-500.png"
                  }
                  alt="Arrow Icon"
                  height={100}
                  width={100}
                  unoptimized
                  className="max-h-[30px] max-w-[30px] md:max-h-[40px] md:max-w-[40px] lg:max-h-[50px] lg:max-w-[50px] flex object-scale-down rotate-180 group-hover:translate-x-3 transition-all duration-200 ease-in-out"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center p-[10%] text-black bg-white">
        <div className="w-full">
          <h1 className="font-semibold text-[8vw] xs:text-[4vw]">Our team</h1>
          <p className="text-[3.75vw] xs:text-[2.5vw] leading-[1.5em] mt-[0.5em] mb-[1em]">
            consists of completely different people who are united by a common
            desire - to help
          </p>
          <div className="mt-[28px] lg:mt-[56px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[10%] md:gap-x-[4%] gap-y-7">
            {dataFifthSection?.map((d) => {
              return (
                <Link href={"/"} key={d.name} className="bg-[#fcf944]">
                  <div className="h-full flex flex-col items-center justify-start p-[14px] xs:p-7 text-center border-[3.2px] border-black hover:scale-90 transition-all duration-300 ease-in-out">
                    <Image
                      src={d.src}
                      alt={`${d.name} - Image`}
                      height={350}
                      width={350}
                      unoptimized
                      className="mb-[14px] xs:mb-[28px] grayscale"
                    />
                    <h1 className=" mb-[0.5em] text-[3.5vw] xs:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] leading-[1.25em]">
                      {d.name}
                    </h1>
                    <p className="text-[3vw] xs:text-[2.5vw] sm:text-[2vw] lg:text-[1.25vw]">
                      {d.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-[10%] text-black bg-[#FF97D0]">
        <div className="w-full">
          <h1 className="font-semibold text-[8vw] xs:text-[4vw]">
            Socially active citizens
          </h1>
          <p className="text-[3.75vw] xs:text-[2.5vw] leading-[1.5em] mt-[0.5em] mb-[1em]">
            support us
          </p>
          <div className="mt-[28px] lg:mt-[56px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[28px] lg:gap-x-[4%] gap-y-7 xs:gap-y-[42px] lg:gap-y-[70px]">
            {dataSixthSection?.map((d) => {
              return (
                <Link href={"#"} key={d.name}>
                  <div className="h-full flex flex-col items-center justify-start text-center hover:translate-x-3.5 hover:-translate-y-3.5 transition-all duration-300 ease-in-out">
                    <Image
                      src={d.src}
                      alt={`${d.name} - Image`}
                      height={350}
                      width={350}
                      unoptimized
                      className="mb-[16px] grayscale"
                    />
                    <h1 className=" mb-[0.5em] text-[3.5vw] xs:text-[3vw] md:text-[2.5vw] lg:text-[1.5vw] leading-[1.25em]">
                      {d.name}
                    </h1>
                    <p className="text-[3vw] xs:text-[2.5vw] sm:text-[2vw] lg:text-[1.25vw]">
                      {d.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-[10%] text-black bg-white">
        <div className="w-full">
          <h1 className="font-semibold text-[8vw] xs:text-[4vw]">
            Our partners
          </h1>
          <p className="text-[3.75vw] xs:text-[2.5vw] leading-[1.5em] mt-[0.5em] mb-[1em]">
            are take care of our fund and help us with many questions
          </p>
          <div className="mt-[28px] lg:mt-[56px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[28px] lg:gap-x-[4%] gap-y-7 xs:gap-y-[42px] lg:gap-y-[70px]">
            {dataSeventhSection?.map((d, i) => {
              return (
                <Link href={"#"} key={d}>
                  <div className="h-full flex flex-col items-center justify-center text-center hover:translate-x-3.5 hover:-translate-y-3.5 transition-all duration-300 ease-in-out">
                    <Image
                      src={d}
                      alt={`Partner ${i} - Image`}
                      height={350}
                      width={350}
                      unoptimized
                      className="grayscale"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-[10%] text-black bg-[#31BE32]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[28px] lg:gap-0">
          <div className="w-full">
            <h1 className="font-semibold text-[8vw] xs:text-[4vw]">
              Contact us
            </h1>
            <p className="text-[3.75vw] xs:text-[2.5vw] leading-[1.5em]">
              Kyiv, Ukraine
            </p>
            <p className="text-[3.75vw] xs:text-[2.5vw] leading-[1.5em]">
              mail@isa.co.ua
            </p>
            <div className="w-fit flex justify-start my-8 ">
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
          <div className="w-1/2 lg:w-full">
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
        </div>
      </div>
    </>
  );
}

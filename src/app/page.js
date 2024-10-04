"use client"
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
import { ThirdSectionCard } from "./components/ThirdSectionCard";
import { FourthSectionCard } from "./components/FourthSectionCard";
import { FifthSectionCard } from "./components/FifthSectionCard";
import { SixSectionCard } from "./components/SixthSectionCard";
import { SeventhSectionCard } from "./components/SeventSectionCard";
import { HelpButton } from "./components/HelpButton";
import { FirstSectionTitle } from "./components/FirstSectionTitle";
import { FirstSectionSubtitle } from "./components/FirstSectionSubtitle";
import { FirstSectionIcon } from "./components/FirstSectionIcon";
import { FirstSectionLogo } from "./components/FirstSectionLogo";
import { DonateButton } from "./components/DonateButton";
import { LastSectionImage } from "./components/LastSectionImage";
import { IframeContainer } from "./components/IframeContainer";

export default function Home() {
  return (
    <>
      <div className="h-screen flex justify-center items-center px-[10%] bg-[#FCF944]">
        <DonateButton />
        <div className="flex flex-col space-y-[16px] xs:space-y-[32px] text-black ">
          <div className="flex justify-center space-x-[6%]">
            <FirstSectionLogo />
            <FirstSectionTitle />
          </div>
          <div className="flex flex-col space-y-[32px] xs:space-y-0">
            <FirstSectionSubtitle />
            <FirstSectionIcon />
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
          <IframeContainer />
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
                <ThirdSectionCard
                  key={d.title}
                  title={d.title}
                  subtitle={d.subtitle}
                />
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
              return <FourthSectionCard key={d} description={d} />;
            })}
          </div>
          <Link href={"#"}>
            <HelpButton />
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
                <FifthSectionCard
                  key={d.name}
                  src={d.src}
                  name={d.name}
                  description={d.description}
                />
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
                <SixSectionCard
                  key={d.name}
                  src={d.src}
                  name={d.name}
                  description={d.description}
                />
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
              return <SeventhSectionCard key={d} src={d} index={i} />;
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
          <LastSectionImage />
        </div>
      </div>
    </>
  );
}

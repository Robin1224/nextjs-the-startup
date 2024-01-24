"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


const Header = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Read more");

  const buttonHandler = () => {
    setShow(!show);
    setButtonText(show ? "Read more" : "Read less");
  }

  return (
    <header className="p-5 md:p-8 bg-purple overlow-hidden md:content-end md:w-full flex @container/header transition-all">
      <div className="flex flex-col items-start md:mx-auto @md/header:!mr-16 md:pb-28">
        <Image
          src="/dept.svg"
          alt="Dept Logo"
          className="invert md:w-[5.5rem]"
          width={100}
          height={24}
          priority
        />
        <h1 className="text-4xl @md/header:text-6xl @lg/header:text-7xl max-w-[36.875rem] font-medium text-white mt-header-h1-top leading-10">
          DEPT® weather planner
        </h1>
        <p className="text-base @md/header:text-lg font-thin text-white mt-header-text-top leading-8 max-w-md @md/header:max-w-[36.875rem]">
          Picture this: an application that doesn&apos;t just tell you the
          weather, but also helps you plan your activities around it. Imagine
          knowing exactly the perfect day to plan that hike, or when to avoid
          the outdoor concert due to an unexpected shower. That&apos;s exactly
          what the Dept Weather Planner offers you.
        </p>
        <p className={`text-base @md/header:text-lg font-thin text-white mt-header-whiteline leading-8 max-w-md @md/header:max-w-[36.875rem] ${(show ? "block" : "hidden")}`}>
          Built with cutting-edge technologies, our weather planner brings you
          accurate, real-time weather data with a slick and user-friendly
          interface. But it&apos;s not just a weather app; it&apos;s an
          intuitive daily planner that syncs with the weather. With a range of
          activities to choose from, it suggests the best options based on
          current and forecasted weather conditions.
        </p>
        <button onClick={buttonHandler} className="text-base @md/header:text-lg font-thin text-white mt-header-whiteline underline underline-offset-4 decoration-1">
          {buttonText}
        </button>
      </div>
    </header>
  );
};
export default Header;

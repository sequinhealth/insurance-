import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center">
      <div className="flex flex-col items-start gap-[50px] w-full">
        <header className="flex w-full py-[35px] px-[67px] bg-transparent">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="font-bold text-2xl text-[#c8d2eb] font-['Comfortaa',Helvetica] tracking-[0.24px]">
                actualcare
              </div>
              <img
                className="w-[37px] h-[33px] ml-[11px]"
                alt="Logo"
                src="/logo.png"
              />
            </div>

            <Button className="h-[45px] px-24 py-2.5 bg-[#c8d2eb] rounded-[70px] hover:bg-[#b8c2db]">
              <span className="font-['Overpass',Helvetica] font-normal text-[#2d365c] text-2xl">
                Login
              </span>
            </Button>
          </div>
        </header>

        <div className="flex flex-col w-full items-center">
          <h1 className="font-['Comfortaa',Helvetica] font-medium text-neutral-100 text-6xl leading-[108px] text-center">
            The right mental health support
          </h1>

          <div className="flex items-center justify-center">
            <h2 className="font-['Comfortaa',Helvetica] font-medium text-6xl leading-[108px]">
              <span className="text-neutral-100">starts with </span>
              <span className="text-[#c8d2eb]">actualcare</span>
            </h2>
            <img
              className="w-[84px] h-[75px] ml-2"
              alt="Logo"
              src="/logo-1.png"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[901px] mt-4">
        <p className="font-['Overpass',Helvetica] font-normal text-white text-[26px] leading-[108px] text-center">
          Built by users who get it and therapists who
          care.&nbsp;&nbsp;Researched back matching.
        </p>
      </div>
    </section>
  );
};

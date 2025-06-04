import React from "react";
import { ConsultationSection } from "./sections/ConsultationSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { SurveySection } from "./sections/SurveySection";

export const ActualcareCa = (): JSX.Element => {
  return (
    <div className="flex justify-center w-full bg-[#2d365c] px-4 md:px-8 lg:px-16">
      <div className="flex flex-col w-full max-w-[1440px] items-center gap-40 md:gap-48 lg:gap-56 py-12 md:py-16 lg:py-24">
        <HeroSection />
        <SurveySection />
        <MainContentSection />
        <ConsultationSection />
        <FooterSection />
      </div>
    </div>
  );
};
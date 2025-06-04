import React from "react";
import { ConsultationSection } from "./sections/ConsultationSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { MainContentSection } from "./sections/MainContentSection";
import { SurveySection } from "./sections/SurveySection";

export const ActualcareCa = (): JSX.Element => {
  return (
    <div className="flex justify-center w-full bg-[#2d365c]">
      <div className="flex flex-col w-full max-w-[1312px] items-center">
        <HeroSection />
        <SurveySection />
        <div className="mt-32">
          <MainContentSection />
        </div>
        <div className="mt-32">
          <ConsultationSection />
        </div>
        <div className="mt-32 mb-16">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};
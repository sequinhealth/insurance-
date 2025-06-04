import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ConsultationSection = (): JSX.Element => {
  return (
    <Card className="w-full py-6 bg-[#141f4ca6] rounded-[25px] border-none">
      <CardContent className="flex flex-col items-center gap-[49px] px-[67px]">
        <h2 className="font-medium text-[32px] text-white text-center font-['Inter',Helvetica]">
          Are you a therapist who wants to be a part of our team?
        </h2>

        <Button 
          className="h-16 px-10 py-2.5 bg-[#8ba1d8] hover:bg-[#7b91c8] rounded-[70px] shadow-[0px_4px_4px_#000000] font-['Overpass',Helvetica] font-normal text-2xl leading-[50px]"
          onClick={() => window.open('https://calendly.com/actualcare/actualcare-intro-call', '_blank')}
        >
          Book Consultation Call
        </Button>
      </CardContent>
    </Card>
  );
};
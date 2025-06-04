import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  const contentSections = [
    {
      id: 1,
      title: "Don't know what you need or where to turn?",
      description:
        "We've got you. We weigh the factors that matter most to guide you toward the best possible matches. But trust, a key to successful therapy, can't be measured. That's why we give you the freedom to try your top matches and follow up until you find the one who truly fits.",
      imageSrc: "/mask-group.png",
      imageAlt: "Mask group",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "From a diverse pool of trusted therapists",
      description:
        "Our diverse network of licensed therapists is carefully vetted for their commitment to care. With a broad range of specializations, lived experiences, identities, and perspectives, our broad pool of therapists are chosen to meet the unique needs of everyone who comes our way.",
      imageSrc: "/mask-group-1.png",
      imageAlt: "Mask group",
      imagePosition: "right",
    },
    {
      id: 3,
      title: "That works with your coverage",
      description:
        "Not sure what coverage you have? We can help with that. Many people don't realize they already have benefits that cover therapy—through work, school, or family plans. We'll help you understand your options so you can make informed choices without the stress.",
      imageSrc: "/mask-group-2.png",
      imageAlt: "Mask group",
      imagePosition: "left",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-24">
      {contentSections.map((section) => (
        <div
          key={section.id}
          className="flex items-center gap-[25px] py-[15px] w-full"
        >
          {section.imagePosition === "left" && (
            <img
              className="relative w-[227px] h-[227px]"
              alt={section.imageAlt}
              src={section.imageSrc}
            />
          )}

          <Card className="flex-1 bg-[#cbd0e42b] rounded-[9px] shadow-[0px_4px_4px_#00000040] border-none">
            <CardContent className="flex flex-col p-[45px] py-[41px] h-[220px] justify-center">
              <div className="flex flex-col gap-[30px]">
                <h3
                  className={`w-fit ${section.id === 1 ? "font-bold" : "font-extrabold"} text-[#d5e1ff] text-2xl tracking-[0.24px] [text-shadow:0px_4px_4px_#00000040] font-['Inter',Helvetica]`}
                >
                  {section.title}
                </h3>
                <p
                  className={`font-normal text-xl tracking-[0.20px] ${section.id === 3 ? "text-white" : "text-[#d5e1ff]"} font-['Inter',Helvetica]`}
                >
                  {section.description}
                </p>
              </div>
            </CardContent>
          </Card>

          {section.imagePosition === "right" && (
            <img
              className="relative w-[227px] h-[227px]"
              alt={section.imageAlt}
              src={section.imageSrc}
            />
          )}
        </div>
      ))}
    </section>
  );
};
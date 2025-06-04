import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Navigation links data for the footer
  const topNavLinks = [
    { title: "About", href: "#" },
    { title: "Sign in", href: "#" },
    { title: "For Therapists", href: "#" },
  ];

  const bottomNavLinks = [
    { title: "FAQ", href: "#" },
    { title: "Community", href: "#" },
    { title: "Contact Us", href: "#" },
  ];

  // Social media links
  const socialLinks = [
    { icon: <InstagramIcon className="h-5 w-5" />, href: "#" },
    { icon: <TwitterIcon className="h-5 w-5" />, href: "#" },
    { icon: <FacebookIcon className="h-5 w-5" />, href: "#" },
    { icon: <LinkedinIcon className="h-5 w-5" />, href: "#" },
  ];

  return (
    <footer className="flex w-full h-64 items-center justify-center gap-8 md:gap-16 lg:gap-[126px] relative">
      <div className="flex flex-col w-full max-w-[564px] items-start gap-12 lg:gap-[79px] relative">
        {/* Top navigation row */}
        <nav className="flex items-center gap-6 md:gap-8 lg:gap-[111px] relative self-stretch w-full">
          {topNavLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative font-normal text-white text-lg md:text-xl lg:text-[26px] text-center tracking-[0.26px] whitespace-nowrap"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Bottom navigation row */}
        <div className="flex items-center gap-6 md:gap-8 lg:gap-[94px] relative">
          {bottomNavLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative font-normal text-white text-lg md:text-xl lg:text-[26px] text-center tracking-[0.26px] whitespace-nowrap"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>

      {/* Vertical separator */}
      <Separator orientation="vertical" className="h-64" />

      {/* Right side with logo and social links */}
      <div className="flex flex-col w-full max-w-[273px] items-end gap-8 lg:gap-[65px] relative">
        {/* Social media icons */}
        <div className="flex items-center gap-4 justify-end w-full">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-[#d5e1ff] transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Brand logo and name */}
        <div className="flex items-center gap-4 relative">
          <div className="relative text-[#d5e1ff] font-['Comfortaa',Helvetica] font-bold text-xl md:text-2xl text-center tracking-[0.24px] whitespace-nowrap">
            actualcare
          </div>
          <img
            className="relative w-10 h-10 md:w-[50.82px] md:h-[44.75px]"
            alt="Actualcare logo"
            src="/group-50.png"
          />
        </div>
      </div>
    </footer>
  );
};

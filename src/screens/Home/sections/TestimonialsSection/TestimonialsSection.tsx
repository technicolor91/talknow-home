import React from "react";
import { Separator } from "../../../../components/ui/separator";
import { Link } from "react-router-dom";

export const TestimonialsSection = (): JSX.Element => {
  // Footer link data for mapping
  const footerSections = [
    {
      title: "Download",
      links: ["App Store", "Google Play"],
    },
    {
      title: "Legal Terms",
      links: ["Privacy Policy", "Terms of Service"],
    }
  ];

  return (
    <footer className="flex flex-col items-start gap-7 pt-24 pb-[50px] px-0 bg-[#06020d] w-full">
      <Separator
        className="w-full h-[1.5px] bg-contain"
        style={{
          backgroundImage:
            "url(https://c.animaapp.com/mb7omhnwJF9a09/img/frame.svg)",
        }}
      />

      <div className="flex flex-col items-center w-full">
        <div className="flex items-start gap-[50px] w-full mb-8">
          {/* Logo section */}
          <div className="flex flex-col items-start justify-between flex-1 self-stretch">
            <div className="inline-flex h-8 items-center gap-1">
              <img
                className="w-[28.79px] h-[26.82px]"
                alt="Logo"
                src="https://c.animaapp.com/mb7omhnwJF9a09/img/logo.svg"
              />
              <div className="[font-family:'Sen',Helvetica] font-bold text-[#8244ff] text-[28px] tracking-[-1.12px] leading-7">
                TalkNow
              </div>
            </div>
          </div>

          {/* Footer link sections */}
          {footerSections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col w-[200px] items-start justify-center gap-2"
            >
              <div className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#dbd7e4] text-[15px] leading-5 mt-[-1.00px]">
                {section.title}
              </div>

              {section.links.map((link, linkIndex) => {
                if (link === "Privacy Policy") {
                  return (
                    <Link 
                      key={linkIndex}
                      to="/privacy-policy"
                      className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] leading-5 cursor-pointer hover:text-[#dbd7e4] transition-colors"
                    >
                      {link}
                    </Link>
                  );
                } else if (link === "Terms of Service") {
                  return (
                    <Link 
                      key={linkIndex}
                      to="/terms-of-use"
                      className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] leading-5 cursor-pointer hover:text-[#dbd7e4] transition-colors"
                    >
                      {link}
                    </Link>
                  );
                } else if (link === "App Store") {
                  return (
                    <a 
                      key={linkIndex}
                      href="https://apps.apple.com/us/app/talk-now-2nd-text-number-app/id6448094998"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] leading-5 cursor-pointer hover:text-[#dbd7e4] transition-colors"
                    >
                      {link}
                    </a>
                  );
                } else if (link === "Google Play") {
                  return (
                    <a 
                      key={linkIndex}
                      href="https://play.google.com/store/apps/details?id=com.talknow.free.text.me.now.second.phone.number.burner.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] leading-5 cursor-pointer hover:text-[#dbd7e4] transition-colors"
                    >
                      {link}
                    </a>
                  );
                } else {
                  return (
                    <div
                      key={linkIndex}
                      className="self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] leading-5 cursor-pointer hover:text-[#dbd7e4] transition-colors"
                    >
                      {link}
                    </div>
                  );
                }
              })}
            </div>
          ))}
        </div>
        <div className="text-center text-[#d9d0eb9e] text-sm">
          Copyright 2025 ©️ TalkNow. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

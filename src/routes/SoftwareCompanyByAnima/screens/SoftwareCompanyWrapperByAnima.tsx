import React from "react";

export const SoftwareCompanyWrapperByAnima = (): JSX.Element => {
  // Define footer link sections for better maintainability
  const footerSections = [
    {
      title: "Download",
      links: ["App Store", "Google Play"],
    },
    {
      title: "Contact",
      links: ["Support", "Privacy Policy", "Terms of Service"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers"],
    },
  ];

  return (
    <footer className="flex flex-col items-start gap-7 pt-24 pb-[50px] px-0 z-0 relative self-stretch w-full bg-[#06020d]">
      <img
        className="relative self-stretch w-full h-[1.5px] mt-[-0.75px] -mx-12 object-cover"
        alt="Decorative line"
        src="https://c.animaapp.com/mb95hsp5dRnB9W/img/frame-1.svg"
      />

      <div className="flex items-start gap-[50px] relative self-stretch w-full">
        {/* Logo section */}
        <div className="flex flex-col items-start justify-between relative flex-1 self-stretch grow">
          <div className="inline-flex h-8 items-center gap-1 relative">
            <img
              className="relative w-[28.79px] h-[26.82px]"
              alt="TalkNow Logo"
              src="https://c.animaapp.com/mb95hsp5dRnB9W/img/logo.svg"
            />
            <div className="relative w-fit font-['Sen',Helvetica] font-bold text-[#8244ff] text-[28px] tracking-[-1.12px] leading-7 whitespace-nowrap">
              TalkNow
            </div>
          </div>
        </div>

        {/* Footer link sections */}
        {footerSections.map((section, index) => (
          <nav
            key={index}
            className="flex flex-col w-[200px] items-start justify-center gap-2 relative"
          >
            <h3 className="relative self-stretch mt-[-1.00px] font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#dbd7e4] text-[15px] tracking-[0] leading-5">
              {section.title}
            </h3>

            {section.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href="#"
                className="relative self-stretch font-['Plus_Jakarta_Sans',Helvetica] font-medium text-[#d9d0eb9e] text-[15px] tracking-[0] leading-5 hover:text-[#dbd7e4] transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        ))}
      </div>
    </footer>
  );
};

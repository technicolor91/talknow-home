import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";

export const SoftwareCompanyByAnima = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "Reviews", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  return (
    <header className="flex items-center justify-between px-0 py-[18px] bg-[#06020d] w-full">
      <div className="flex items-center gap-[50px]">
        {/* Logo and Brand Name */}
        <div className="flex h-8 items-center gap-1">
          <img
            className="w-[28.79px] h-[26.82px]"
            alt="Logo"
            src="https://c.animaapp.com/mb95hsp5dRnB9W/img/logo.svg"
          />
          <div className="[font-family:'Sen',Helvetica] font-bold text-[#8244ff] text-[28px] tracking-[-1.12px] leading-7 whitespace-nowrap">
            TalkNow
          </div>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-start gap-9">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="flex items-center gap-1"
                  href={item.href}
                >
                  <span className="w-fit text-[#dcd7e4] whitespace-nowrap mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[15px] tracking-[0] leading-5">
                    {item.label}
                  </span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

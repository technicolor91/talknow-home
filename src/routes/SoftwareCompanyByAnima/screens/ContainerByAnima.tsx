import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Card, CardContent } from "../components/ui/card";

// Define testimonial data for mapping
const testimonials = [
  {
    name: "Emily C., Texas",
    role: "Tech Enthusiast",
    image:
      "https://c.animaapp.com/mb95hsp5dRnB9W/img/selfie-of-a-young-caucasian-woman.png",
    review:
      "Really helpful for logging into apps when my SIM card doesn't work. I use it all the time.",
    stars: 5,
  },
  {
    name: "Brianna S., Tennessee",
    role: "Self-employed",
    image:
      "https://c.animaapp.com/mb95hsp5dRnB9W/img/selfie-of-a-young-woman.png",
    review:
      "Talk Now saved me during a move. I didn't have a new SIM yet, but I could still receive job calls.",
    stars: 5,
  },
  {
    name: "Ashley T., Florida",
    role: "Graphic Designer",
    image:
      "https://c.animaapp.com/mb95hsp5dRnB9W/img/a-young-woman-with-long-hair-sitting-at-a-caf--table--using-a-la.png",
    review:
      "Talk Now helped me receive messages instantly. Tried two other apps before—this one just works!",
    stars: 5,
  },
  {
    name: "Martin J., California",
    role: "Fashion Influencer",
    image:
      "https://c.animaapp.com/mb95hsp5dRnB9W/img/selfie-of-a-fashionable-young-man.png",
    review:
      "I've been using Talk Now to stay in touch with my family overseas. The call quality is good for the price!",
    stars: 5,
  },
  {
    name: "Christopher J., Illinois",
    role: "IT Consultant",
    image:
      "https://c.animaapp.com/mb95hsp5dRnB9W/img/selfie-of-a-young-man.png",
    review:
      "I got a second number for dating apps and it's been great. Keeps things separate and safe.",
    stars: 5,
  },
  {
    name: "Amanda N., Massachusetts",
    role: "Small Business Owner",
    image:
      "https://c.animaapp.com/mb95hsp5dRnB9W/img/a-young-woman-smiling-while-using-her-smartphone-in-a-cozy-livin.png",
    review:
      "Honestly, I didn't expect much, but it worked well for texting my lover.",
    stars: 5,
  },
];

// Define feature cards data
const featureCards = [
  {
    title: "Voicemail",
    description: "Missed a call? Voicemail helps you keep messages",
    image: "https://c.animaapp.com/mb95hsp5dRnB9W/img/frame.svg",
    phoneImage: true,
    phoneContent: (
      <div className="w-[386px] relative h-[420px] top-[25px] left-[99px]">
        <div className="absolute w-[312px] h-[420px] top-0 left-[74px] rounded-[20px] overflow-hidden border-8 border-solid border-[#9d91b633] shadow-[1px_5px_11px_#00000014,2px_20px_21px_#0000000f,5px_46px_28px_#0000000a,10px_82px_33px_#00000003,15px_128px_36px_transparent] [background:linear-gradient(152deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_100%),linear-gradient(0deg,rgba(6,2,13,1)_0%,rgba(6,2,13,1)_100%)]">
          <div className="absolute w-[180px] h-[82px] top-[33px] left-[86px] bg-[#8244ff] rounded-2xl opacity-50" />
          <div className="w-[116px] top-[135px] left-[150px] bg-[#8244ff] rounded-2xl opacity-50 absolute h-[82px]" />
        </div>
        <img
          className="w-[326px] top-[242px] left-0 absolute h-[82px]"
          alt="Primary section"
          src="https://c.animaapp.com/mb95hsp5dRnB9W/img/primary-section-1.svg"
        />
        <img
          className="w-24 top-[136px] left-9 absolute h-[82px]"
          alt="Primary section"
          src="https://c.animaapp.com/mb95hsp5dRnB9W/img/primary-section.svg"
        />
        <img
          className="absolute w-12 h-12 top-[259px] left-3.5"
          alt="Frame"
          src="https://c.animaapp.com/mb95hsp5dRnB9W/img/frame.svg"
        />
        <img
          className="absolute w-[216px] h-[37px] top-[266px] left-[81px]"
          alt="Union"
          src="https://c.animaapp.com/mb95hsp5dRnB9W/img/union.svg"
        />
        <img
          className="absolute w-10 h-10 top-[157px] left-16"
          alt="Phone missed"
          src="https://c.animaapp.com/mb95hsp5dRnB9W/img/phone-missed.svg"
        />
      </div>
    ),
  },
  {
    title: "AI Assistance",
    description: "Get smart suggestions and automated replies.",
    image: "https://c.animaapp.com/mb95hsp5dRnB9W/img/frame-2.svg",
    phoneImage: true,
    phoneContent: (
      <div className="relative w-[453px] h-[420px] top-[25px] left-[105px]">
        <div className="absolute w-[312px] h-[420px] top-0 left-[68px] rounded-[20px] overflow-hidden border-8 border-solid border-[#9d91b633] shadow-[1px_5px_11px_#00000014,2px_20px_21px_#0000000f,5px_46px_28px_#0000000a,10px_82px_33px_#00000003,15px_128px_36px_transparent] [background:linear-gradient(152deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_100%),linear-gradient(0deg,rgba(6,2,13,1)_0%,rgba(6,2,13,1)_100%)]">
          <div className="w-[180px] top-[30px] left-[30px] bg-[#dbd7e44c] rounded-2xl opacity-50 absolute h-[82px]" />
          <div className="w-[180px] top-[132px] left-[86px] bg-[#8244ff] rounded-2xl opacity-50 absolute h-[82px]" />
          <div className="w-[180px] top-[234px] left-[30px] bg-[#dbd7e44c] rounded-2xl opacity-50 absolute h-[82px]" />
        </div>
        <div className="absolute w-[273px] h-[72px] top-[206px] left-0 rounded-[20px] overflow-hidden border-[none] shadow-[1px_5px_11px_#00000014,2px_20px_21px_#0000000f,5px_46px_28px_#0000000a,10px_82px_33px_#00000003,15px_128px_36px_transparent] backdrop-blur-[14.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.5px)_brightness(100%)] [background:linear-gradient(0deg,rgba(68,68,68,0.32)_0%,rgba(68,68,68,0.32)_100%),linear-gradient(0deg,rgba(192,162,255,0.15)_0%,rgba(192,162,255,0.15)_100%)]">
          <div className="absolute w-[195px] h-6 top-[22px] left-[69px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#dcd7e4] text-xl tracking-[-0.40px] leading-6">
            Smart Suggestions
          </div>
          <img
            className="absolute w-8 h-8 top-5 left-5"
            alt="Frame"
            src="https://c.animaapp.com/mb95hsp5dRnB9W/img/frame-2.svg"
          />
        </div>
        <div className="absolute w-[273px] h-[72px] top-[79px] left-[180px] rounded-[20px] overflow-hidden border-[none] shadow-[1px_5px_11px_#00000014,2px_20px_21px_#0000000f,5px_46px_28px_#0000000a,10px_82px_33px_#00000003,15px_128px_36px_transparent] backdrop-blur-[14.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(14.5px)_brightness(100%)] [background:linear-gradient(0deg,rgba(68,68,68,0.32)_0%,rgba(68,68,68,0.32)_100%),linear-gradient(0deg,rgba(192,162,255,0.15)_0%,rgba(192,162,255,0.15)_100%)]">
          <div className="absolute w-[195px] h-6 top-[22px] left-[69px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#dcd7e4] text-xl tracking-[-0.40px] leading-6">
            AI-Assisted Writing
          </div>
          <img
            className="absolute w-8 h-8 top-5 left-5"
            alt="Edit"
            src="https://c.animaapp.com/mb95hsp5dRnB9W/img/edit-3.svg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Spam Filter",
    description: "Block unwanted calls and messages effortlessly.",
    image: "https://c.animaapp.com/mb95hsp5dRnB9W/img/frame-4.svg",
    phoneImage: true,
    phoneContent: (
      <div className="w-[362px] left-[147px] relative h-[420px] top-[25px]">
        <div className="absolute w-[312px] h-[420px] top-0 left-[25px] rounded-[20px] overflow-hidden border-8 border-solid border-[#9d91b633] shadow-[1px_5px_11px_#00000014,2px_20px_21px_#0000000f,5px_46px_28px_#0000000a,10px_82px_33px_#00000003,15px_128px_36px_transparent] [background:linear-gradient(152deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_100%),linear-gradient(0deg,rgba(6,2,13,1)_0%,rgba(6,2,13,1)_100%)]">
          <div className="absolute w-[94px] h-[94px] top-[58px] left-[101px] bg-[#bfa1ff26] rounded-[47px]">
            <img
              className="absolute w-[60px] h-[60px] top-[17px] left-[17px]"
              alt="Frame"
              src="https://c.animaapp.com/mb95hsp5dRnB9W/img/frame-3.svg"
            />
          </div>
          <div className="absolute top-[172px] left-[102px] text-xl text-center whitespace-nowrap [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#dcd7e4] tracking-[0] leading-5">
            Unknown
          </div>
          <div className="top-[198px] absolute left-24 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#dcd7e499] text-[13px] tracking-[0] leading-5 whitespace-nowrap">
            INCOMING CALL
          </div>
        </div>
        <img
          className="w-[362px] top-[246px] left-0 absolute h-[82px]"
          alt="Primary section"
          src="https://c.animaapp.com/mb95hsp5dRnB9W/img/primary-section-2.svg"
        />
        <img
          className="absolute w-12 h-12 top-[263px] left-[19px]"
          alt="Frame"
          src="https://c.animaapp.com/mb95hsp5dRnB9W/img/frame-4.svg"
        />
        <div className="absolute top-[276px] left-[76px] text-white text-xl tracking-[0] leading-5 whitespace-nowrap [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold">
          Spam Detector
        </div>
      </div>
    ),
  },
  {
    title: "Caller ID Display",
    description: "Know who's calling before you pick up",
    image: "",
    phoneImage: true,
    phoneContent: (
      <div className="relative w-[312px] h-[420px] top-[25px] left-[173px] rounded-[20px] overflow-hidden border-8 border-solid border-[#9d91b633] shadow-[1px_5px_11px_#00000014,2px_20px_21px_#0000000f,5px_46px_28px_#0000000a,10px_82px_33px_#00000003,15px_128px_36px_transparent] [background:linear-gradient(152deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_100%),linear-gradient(0deg,rgba(6,2,13,1)_0%,rgba(6,2,13,1)_100%)]">
        <div className="absolute w-[94px] h-[94px] top-[82px] left-[101px] bg-[url(https://c.animaapp.com/mb95hsp5dRnB9W/img/image-1.png)] bg-cover bg-[50%_50%]" />
        <div className="absolute top-[196px] left-[91px] text-xl text-center whitespace-nowrap [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#dcd7e4] tracking-[0] leading-5">
          Kate Larson
        </div>
        <div className="top-[222px] absolute left-24 [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#dcd7e499] text-[13px] tracking-[0] leading-5 whitespace-nowrap">
          INCOMING CALL
        </div>
      </div>
    ),
  },
];

// Define FAQ data
const faqItems = [
  {
    question: "What is Talk Now?",
    answer: "",
  },
  {
    question: "Do I need a SIM card to use Talk Now?",
    answer: "",
  },
  {
    question: "Is my personal information secure in the app?",
    answer: "",
  },
  {
    question: "What platforms can I use the OTP Code Service with?",
    answer: "",
  },
  {
    question: "Can people call or text me on my Talk Now number?",
    answer: "",
  },
];

export const ContainerByAnima = (): JSX.Element => {
  return (
    <section className="inline-flex items-start justify-center px-0 py-12 relative flex-[0_0_auto] z-[1]">
      <div className="flex flex-col w-[1344px] items-start relative">
        {/* Hero Section */}
        <div className="relative self-stretch w-full h-[1377px] z-[3] bg-[#06020d] rounded-[20px] overflow-hidden">
          <div className="flex flex-col w-[1536px] h-[1368px] items-center gap-16 pt-[72px] pb-0 px-24 relative top-[9px] -left-24 [background:linear-gradient(174deg,rgba(6,2,13,0.7)_14%,rgba(192,162,255,0.11)_100%),linear-gradient(0deg,rgba(6,2,13,1)_0%,rgba(6,2,13,1)_100%)]">
            <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative w-[1168px] mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#dbd7e4] text-8xl text-center tracking-[-1.92px] leading-[120px]">
                Your Second Number.
              </h1>

              <h2 className="relative w-[1168px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#8244ff] text-7xl text-center tracking-[-1.44px] leading-[120px]">
                Private, Flexible, Reliable.
              </h2>

              <div className="inline-flex items-start justify-center gap-[30px] relative flex-[0_0_auto]">
                <img
                  className="relative w-[238px] h-20 object-cover"
                  alt="iOS App Store badge"
                  src="https://c.animaapp.com/mb95hsp5dRnB9W/img/ios-badge.png"
                />

                <img
                  className="relative w-[238px] h-20 object-cover"
                  alt="Google Play Store badge"
                  src="https://c.animaapp.com/mb95hsp5dRnB9W/img/gp-badge.png"
                />
              </div>
            </div>

            <div className="h-[866px] mb-[-2.00px] relative self-stretch w-full">
              <img
                className="absolute w-[847px] h-[864px] top-0 left-[249px]"
                alt="Phone app screenshot"
                src="https://c.animaapp.com/mb95hsp5dRnB9W/img/image.png"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="flex flex-col items-center gap-[50px] px-0 py-[50px] relative self-stretch w-full flex-[0_0_auto] z-[2] bg-[#06020d]">
          <h2 className="self-stretch mt-[-1.50px] font-bold text-[#a78fcd] text-5xl text-center tracking-[-0.96px] leading-[52px] relative [font-family:'Plus_Jakarta_Sans',Helvetica]">
            Features
          </h2>

          <div className="items-center gap-7 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
            {/* First row of feature cards */}
            <div className="flex items-start justify-center gap-7 relative self-stretch w-full flex-[0_0_auto]">
              {featureCards.slice(0, 2).map((feature, index) => (
                <Card
                  key={index}
                  className="min-w-[658px] max-w-[720px] h-[480px] flex-1 grow bg-[#bfa1ff26] rounded-[20px] overflow-hidden border-[1.5px] border-solid border-transparent"
                >
                  <CardContent className="flex flex-col h-full p-0">
                    <div className="flex flex-col items-start gap-2 px-9 pt-9 pb-0 relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#dcd7e4] text-[28px] tracking-[-0.56px] leading-8">
                        {feature.title}
                      </h3>
                      <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a78fcd] text-xl tracking-[0] leading-6">
                        {feature.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
                      <div className="h-[405px] mb-[-25.00px] relative self-stretch w-full">
                        {feature.phoneContent}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Second row of feature cards */}
            <div className="flex items-start justify-center gap-7 relative self-stretch w-full flex-[0_0_auto]">
              {featureCards.slice(2, 4).map((feature, index) => (
                <Card
                  key={index}
                  className="min-w-[658px] max-w-[720px] h-[480px] flex-1 grow bg-[#bfa1ff26] rounded-[20px] overflow-hidden border-[1.5px] border-solid border-transparent"
                >
                  <CardContent className="flex flex-col h-full p-0">
                    <div className="flex flex-col items-start gap-2 px-9 pt-9 pb-0 relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#dcd7e4] text-[28px] tracking-[-0.56px] leading-8">
                        {feature.title}
                      </h3>
                      <p className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#a78fcd] text-xl tracking-[0] leading-6">
                        {feature.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
                      <div className="h-[405px] mb-[-25.00px] relative self-stretch w-full">
                        {feature.phoneContent}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="flex flex-col items-center justify-center gap-[50px] px-0 py-[50px] relative self-stretch w-full flex-[0_0_auto] z-[1] bg-[#06020d]">
          <h2 className="relative mt-[-1.50px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#a78fcd] text-5xl text-center tracking-[-0.96px] leading-[52px]">
            What Our Users Say
          </h2>

          <div className="justify-center gap-7 self-stretch w-full flex-[0_0_auto] flex items-start relative overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`${index === 0 ? "ml-[-262.00px]" : ""} flex flex-col w-72 h-[284px] items-start gap-4 p-7 relative bg-[#bfa1ff26] rounded-[20px] overflow-hidden border-[1.5px] border-solid border-transparent`}
              >
                <CardContent className="p-0 flex flex-col gap-4 h-full w-full">
                  <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className="relative w-12 h-12 rounded-[999px]"
                      style={{
                        backgroundImage: `url(${testimonial.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "50% 50%",
                      }}
                    />
                    <div className="flex flex-col items-start relative flex-1 grow">
                      <div className="relative self-stretch mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#dcd7e4] text-[15px] tracking-[0] leading-5">
                        {testimonial.name}
                      </div>
                      <div className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#dcd7e499] text-[15px] tracking-[0] leading-5">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start pt-0 pb-2 px-0 relative self-stretch w-full flex-[0_0_auto] opacity-80">
                    <img
                      className="relative self-stretch w-12"
                      alt="Line container"
                      src="https://c.animaapp.com/mb95hsp5dRnB9W/img/line-container.svg"
                    />
                    <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                      <div className="relative w-[136px] h-6">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <img
                            key={i}
                            className="absolute w-[21px] h-5 top-px left-[calc(28px*i+0.5px)]"
                            alt="Star"
                            src="https://c.animaapp.com/mb95hsp5dRnB9W/img/star-2.svg"
                          />
                        ))}
                      </div>
                      <div className="relative self-stretch [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal italic text-[#dcd7e4] text-base tracking-[0] leading-6">
                        {testimonial.review}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="flex items-start gap-24 px-0 py-[50px] relative self-stretch w-full flex-[0_0_auto] z-0 bg-[#06020d]">
          <h2 className="relative w-[512px] mt-[-1.50px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#dbd7e4] text-5xl tracking-[-0.96px] leading-[52px]">
            Compliance and FAQ
          </h2>

          <div className="flex flex-col items-start relative flex-1 grow">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-t-[1.5px] border-[#9d91b633] py-0"
                >
                  <AccordionTrigger className="py-7 hover:no-underline">
                    <span className="flex-1 text-left [font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#dbd7e4] text-[17px] tracking-[0] leading-6">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </section>
  );
};

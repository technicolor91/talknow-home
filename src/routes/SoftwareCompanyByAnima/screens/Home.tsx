import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const Home = (): JSX.Element => {
  // Navigation items
  const navItems = ["Home", "Features", "Reviews", "FAQ"];

  // Features data
  const features = [
    {
      title: "Voicemail",
      description: "Get transcribed voicemails so you keep messages organized.",
      image: "/images/voicemail-feature.png",
    },
    {
      title: "AI Assistance",
      description: "Our AI helps you draft and respond to messages.",
      image: "/images/ai-assistance-feature.png",
    },
    {
      title: "Spam Filter",
      description: "Block unwanted calls and messages effortlessly.",
      image: "/images/spam-filter-feature.png",
    },
    {
      title: "Caller ID Display",
      description: "Know exactly who's calling before you pick up.",
      image: "/images/caller-id-feature.png",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Samantha T.",
      location: "Tennessee",
      rating: 5,
      comment:
        "I've been using this app for over a year now and it's been a lifesaver for keeping my work and personal calls separate.",
      avatar: "/avatars/samantha.jpg",
    },
    {
      name: "James P.",
      location: "Florida",
      rating: 5,
      comment:
        "I've been impressed with the call quality. The voicemail transcription is incredibly accurate and useful!",
      avatar: "/avatars/james.jpg",
    },
    {
      name: "Martin C.",
      location: "California",
      rating: 5,
      comment:
        "I've been using TalkNow for my business needs. The spam filtering is excellent and saves me so much time!",
      avatar: "/avatars/martin.jpg",
    },
    {
      name: "Christopher J.",
      location: "Illinois",
      rating: 5,
      comment:
        "Just what I needed to keep my personal number private. The interface is sleek and it's so easy to use.",
      avatar: "/avatars/christopher.jpg",
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What is TalkNow?",
      answer:
        "TalkNow is a service that provides you with a second phone number for calls, texts, and voicemail.",
    },
    {
      question: "Do I need a SIM card to use TalkNow?",
      answer:
        "No, TalkNow works through our mobile app using your internet connection. No additional SIM card required.",
    },
    {
      question: "Is my personal information secure on the app?",
      answer:
        "Yes, we use industry-standard encryption to protect all your personal data and communications.",
    },
    {
      question: "What platforms can I use the TalkNow app on?",
      answer: "TalkNow is available on both iOS and Android devices.",
    },
    {
      question: "Can people still call me if my TalkNow number is inactive?",
      answer:
        "Yes, calls will be directed to your voicemail when your TalkNow number is inactive.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#06020d] text-white">
      {/* Header/Navigation */}
      <header className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" alt="TalkNow Logo" className="h-8" />
          <span className="ml-2 font-bold text-lg">TalkNow</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-sm hover:text-purple-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your Second Number.
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          <span className="text-purple-400">Private, </span>
          <span className="text-purple-400">Flexible, </span>
          <span className="text-purple-400">Reliable.</span>
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <Button
            variant="outline"
            className="bg-black border border-gray-700 hover:bg-gray-900"
          >
            <img src="/app-store.svg" alt="App Store" className="h-5 mr-2" />
            App Store
          </Button>
          <Button
            variant="outline"
            className="bg-black border border-gray-700 hover:bg-gray-900"
          >
            <img
              src="/google-play.svg"
              alt="Google Play"
              className="h-5 mr-2"
            />
            Google Play
          </Button>
        </div>

        <div className="relative max-w-md mx-auto">
          <img
            src="/phone-mockup.png"
            alt="TalkNow App Interface"
            className="mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#120d1a] border-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#120d1a] border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-300">{testimonial.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-4 md:px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Compliance and FAQ
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-gray-800"
            >
              <AccordionTrigger className="text-left py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0412] py-12 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <img src="/logo.svg" alt="TalkNow Logo" className="h-8" />
              <span className="ml-2 font-bold text-lg">TalkNow</span>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-3">Download</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      iOS App
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Android App
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms of Use
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 pt-8 border-t border-gray-800">
            <p>© {new Date().getFullYear()} TalkNow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

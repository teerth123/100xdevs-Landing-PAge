"use client";

import Book from "@/components/ui/Book";
import { Button } from "../button";

export default function Hero() {
  return (
    <>
      <section className="relative w-full max-w-full flex flex-col items-center justify-center overflow-hidden bg-white py-12 lg:py-16 min-h-screen">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 pointer-events-none z-10">
          <div className="w-137.5 h-137.5 bg-[#0EA5E9] blur-[450px] opacity-60"></div>
        </div>

        {/* Heading and Subheading Container */}
        <div className="w-full max-w-7xl flex flex-col items-center gap-y-7 px-4 z-40 mb-16 lg:mb-20">
          <div className="flex items-center pt-7">
            <div className="w-[22px] h-[22px] rounded-full bg-[#41C16B] shadow-[0_0_12px_4px_rgba(65,193,107,0.6)]"></div>
            <p className="text-[20px] px-2">Early Bird ending in 48 hours!!!</p>
          </div>

          <h1 className="font-bold text-black text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] text-center tracking-[-0.05em] text-balance">
            Become a 100x Engineer <br />
            Because 10x Ain&apos;t Enough
          </h1>

          <p className="text-center font-medium text-[18px] md:text-[24px] leading-[26px] md:leading-[32px] tracking-[-0.05em] px-6 text-balance">
            Join the community where students crack GSoC, secure $150K <br />
            international offers, and build production-ready systems from day
            one.
          </p>
        </div>

        {/* Books Section Container */}
        <div className="relative w-full flex items-center justify-center mb-16 lg:mb-20 px-4 z-30">
          <div className="relative w-full max-w-5xl flex items-end justify-center">
            {/* Left Book - Web3 Bootcamp */}
            <div
              className="hidden md:block absolute left-0 lg:left-8 pointer-events-auto flex-shrink-0"
              style={{ transform: "scale(0.6) rotate(-8deg) translateY(20px)", transformOrigin: "center bottom" }}
            >
              <Book title="Web3 Bootcamp" />
            </div>

            {/* Center Book - Combined Bootcamp */}
            <div className="relative flex-shrink-0 px-4 sm:px-0">
              <div className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[240px] sm:h-[300px] md:h-[350px] lg:h-[400px] pointer-events-auto flex items-center justify-center">
                <Book title="100xSchool Combined<br />Bootcamp" />
              </div>
            </div>

            {/* Right Book - AI and ML Bootcamp */}
            <div
              className="hidden md:block absolute right-0 lg:right-8 pointer-events-auto flex-shrink-0"
              style={{ transform: "scale(0.6) rotate(8deg) translateY(20px)", transformOrigin: "center bottom" }}
            >
              <Book title="AI and ML Bootcamp" />
            </div>
          </div>
        </div>

        {/* CTA Button Container */}
        <div className="relative w-full flex justify-center mb-12 z-30 px-4">
          <Button className="bg-black w-fit px-6 sm:px-8 py-3 sm:py-4 rounded-[10px] text-base sm:text-lg">
            Start Your Journey Now →
          </Button>
        </div>

        {/* Bottom fade to white */}
        <div
          className="absolute bottom-0 left-0 w-full h-24 pointer-events-none bg-white z-20"
          aria-hidden="true"
        ></div>
      </section>
      <hr />
    </>
  );
}

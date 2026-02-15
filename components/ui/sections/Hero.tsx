"use client";

import Book from "@/components/ui/Book";
import { Button } from "../button";

export default function Hero() {
  return (
    <>
      <section className="relative h-[calc(100vh-64px)] w-full max-w-full flex justify-center overflow-hidden">
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 pointer-events-none z-10">
          <div className="w-137.5 h-137.5 bg-[#0EA5E9] blur-[450px] opacity-60"></div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-24 pointer-events-none bg-white z-20 "
          aria-hidden="true"
        ></div>

        <div className="mt-5 absolute left-1/2 -translate-x-1/2 bottom-16 w-162.5 h-[340px] z-30 pointer-events-none max-w-[90vw] max-[1600px]:mt-5 min-[1680px]:w-[800px] min-[1680px]:h-[420px]">
          <div
            className="w-full h-full bg-white rounded-4xl border border-[#D9D9D9] flex justify-center items-center relative overflow-hidden "
            aria-hidden="true"
          >
            {/* Fading dotted lines around the book area */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top dotted line with fade */}
              {/* <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[400px] h-[1px] border-t border-dotted border-[#888888] opacity-50"></div> */}
              {/* Bottom dotted line with fade */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[400px] h-[1px] border-t border-dotted border-[#888888] opacity-50"></div>
              {/* Left dotted line with fade */}
              <div className="absolute left-36 top-1/2 -translate-y-1/2 h-[200px] w-[1px] border-l border-dotted border-[#888888] opacity-50"></div>
              {/* Right dotted line with fade */}
              <div className="absolute right-36 top-1/2 -translate-y-1/2 h-[200px] w-[1px] border-l border-dotted border-[#888888] opacity-50"></div>
            </div>

            <div></div>
            <Button className="bg-black mt-58 w-fit p-7 rounded-[10px]">
              Start Your Journey Now →
            </Button>
          </div>
        </div>

        {/* Left Book - Web3 Bootcamp - smaller and tilted, behind main book */}
        <div
          className="absolute left-[30%] bottom-36 z-35 pointer-events-auto max-w-[300px] min-[1680px]:max-w-[380px] min-[1680px]:scale-110"
          style={{ transform: "scale(0.7) rotate(-8deg)" }}
        >
          <Book title="Web3 Bootcamp" />
        </div>

        {/* Right Book - AI and ML Bootcamp - smaller and tilted, behind main book */}
        <div
          className="absolute right-[30%] bottom-36 z-35 pointer-events-auto max-w-[300px] min-[1680px]:max-w-[380px] min-[1680px]:scale-110"
          style={{ transform: "scale(0.7) rotate(8deg)" }}
        >
          <Book title="AI and ML Bootcamp" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-50 w-[650px] max-w-[90vw] h-[320px] z-40 pointer-events-auto flex items-center justify-center min-[1680px]:w-[800px] min-[1680px]:h-[400px] min-[1680px]:scale-110">
          <Book title="100xSchool Combined<br />Bootcamp" />
        </div>

        <div className="w-full max-w-7xl flex flex-col items-center gap-y-7">
          <div className="flex items-center pt-7">
            <div className="w-[22px] h-[22px] rounded-full bg-[#41C16B] shadow-[0_0_12px_4px_rgba(65,193,107,0.6)]"></div>
            <p className="text-[20px] px-2">Early Bird ending in 48 hours!!!</p>
          </div>

          <h1 className="font-bold text-black text-[48px] leading-[56px] text-center tracking-[-0.05em] text-balance ">
            Become a 100x Engineer <br />
            Because 10x Ain&apos;t Enough
          </h1>

          <p className="text-center font-medium text-[24px] leading-[32px] tracking-[-0.05em] px-6 text-balance ">
            Join the community where students crack GSoC, secure $150K <br />
            international offers, and build production-ready systems from day
            one.
          </p>
        </div>
      </section>
      <hr />
    </>
  );
}

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

        <div className="mt-5 absolute left-1/2 -translate-x-1/2 bottom-16 w-162.5 h-[340px] z-30 pointer-events-none max-w-[90vw] max-[1600px]:mt-5 min-[1680px]:w-[800px] min-[1680px]:h-[420px] max-[1440px]:w-[550px] max-[1440px]:h-[290px] max-[1366px]:w-[500px] max-[1366px]:h-[270px] max-[1280px]:w-[480px] max-[1280px]:h-[260px]">
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
              <div className="absolute left-36 top-1/2 -translate-y-1/2 h-[200px] w-[1px] border-l border-dotted border-[#888888] opacity-50 max-[1440px]:left-24"></div>
              {/* Right dotted line with fade */}
              <div className="absolute right-36 top-1/2 -translate-y-1/2 h-[200px] w-[1px] border-l border-dotted border-[#888888] opacity-50 max-[1440px]:right-24"></div>
            </div>

            <div></div>
            <Button className="bg-black mt-58 w-fit p-7 rounded-[10px] max-[1440px]:p-5 max-[1440px]:text-sm max-[1350px]:mt-46 max-[1280px]:mt-48 max-[1280px]:p-4 max-[1280px]:text-xs">
              Start Your Journey Now →
            </Button>
          </div>
        </div>

        {/* Left Book - Web3 Bootcamp - smaller and tilted, behind main book */}
        <div
          className="absolute left-[30%] bottom-36 z-35 pointer-events-auto max-w-[300px]
          min-[1550px]:scale-[0.75]
          min-[1680px]:max-w-[350px] min-[1680px]:scale-[0.8]
          min-[1441px]:max-[1549px]:scale-[0.72] min-[1441px]:max-[1549px]:bottom-30 min-[1441px]:max-[1549px]:left-[28%]
          max-[1441px]:scale-[0.75] max-[1441px]:bottom-26 max-[1441px]:left-[29%]
          max-[1366px]:scale-[0.5] max-[1366px]:left-[27%] max-[1366px]:bottom-16
          max-[1280px]:scale-[0.55] max-[1280px]:left-[28%] max-[1280px]:bottom-22"
          style={{ transform: "scale(0.9) rotate(-8deg)" }}
        >
          <Book title="Web3 Bootcamp" />
        </div>

        {/* Right Book - AI and ML Bootcamp - smaller and tilted, behind main book */}
        <div
          className="absolute right-[30%] bottom-36 z-35 pointer-events-auto max-w-[300px]
          min-[1550px]:scale-[0.75]
          min-[1680px]:max-w-[350px] min-[1680px]:scale-[0.8]
          min-[1441px]:max-[1549px]:scale-[0.72] min-[1441px]:max-[1549px]:bottom-30 min-[1441px]:max-[1549px]:right-[28%]
          max-[1441px]:scale-[0.75] max-[1441px]:bottom-26 max-[1441px]:right-[29%]
          max-[1366px]:scale-[0.5] max-[1366px]:right-[27%] max-[1366px]:bottom-16
          max-[1280px]:scale-[0.55] max-[1280px]:right-[28%] max-[1280px]:bottom-22"
          style={{ transform: "scale(0.9) rotate(8deg)" }}
        >
          <Book title="AI and ML Bootcamp" />
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-50 w-[650px] max-w-[90vw] h-[320px] z-40 pointer-events-auto flex items-center justify-center
          min-[1550px]:scale-90 min-[1550px]:bottom-46
          min-[1680px]:w-[750px] min-[1680px]:h-[380px] min-[1680px]:scale-100 min-[1680px]:bottom-50
          min-[1441px]:max-[1549px]:scale-[0.86] min-[1441px]:max-[1549px]:bottom-40
          max-[1441px]:scale-[0.75] max-[1441px]:bottom-38
          max-[1366px]:scale-[0.62] max-[1366px]:bottom-22
          max-[1280px]:scale-[0.6] max-[1280px]:bottom-28"
        >
          <Book title="100xSchool Combined<br />Bootcamp" />
        </div>

        <div className="w-full max-w-7xl flex flex-col items-center gap-y-7 min-[1550px]:gap-y-9 max-[1440px]:gap-y-5 max-[1366px]:gap-y-4 max-[1280px]:gap-y-3">
          <div className="flex items-center pt-7 min-[1550px]:pt-9 max-[1440px]:pt-5 max-[1366px]:pt-4 max-[1280px]:pt-3">
            <div className="w-[22px] h-[22px] rounded-full bg-[#41C16B] shadow-[0_0_12px_4px_rgba(65,193,107,0.6)] max-[1440px]:w-[18px] max-[1440px]:h-[18px]"></div>
            <p className="text-[20px] px-2 max-[1440px]:text-[18px] max-[1366px]:text-[16px] max-[1280px]:text-[15px]">
              Early Bird ending in 48 hours!!!
            </p>
          </div>

          <h1 className="font-bold text-black text-[48px] leading-[56px] text-center tracking-[-0.05em] text-balance max-[1440px]:text-[42px] max-[1440px]:leading-[50px] max-[1366px]:text-[38px] max-[1366px]:leading-[46px] max-[1280px]:text-[36px] max-[1280px]:leading-[42px]">
            Become a 100x Engineer <br />
            Because 10x Ain&apos;t Enough
          </h1>

          <p className="text-center font-medium text-[24px] leading-[32px] tracking-[-0.05em] px-6 text-balance max-[1440px]:text-[20px] max-[1440px]:leading-[28px] max-[1366px]:text-[18px] max-[1366px]:leading-[26px] max-[1280px]:text-[16px] max-[1280px]:leading-[24px]">
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

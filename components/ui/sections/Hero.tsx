"use client";

import Book from "@/components/ui/Book";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-64px)] w-full flex justify-center overflow-hidden">
      
      <div className="fixed bottom-[10px] left-1/2 -translate-x-1/2 pointer-events-none z-10">
        <div className="w-[550px] h-[550px] bg-[#0EA5E9] blur-[450px] opacity-60"></div>
      </div>

  {/* Bottom mask that clips the blob: sits above the blob (z-20) */}
  <div className="fixed bottom-0 left-0 w-full h-[120px] pointer-events-none bg-white z-20" aria-hidden="true"></div>

      {/* Fixed overlay div above the blob and clipping mask - now renders Book component */}
      {/* Decorative white panel fixed above the mask (z-30) */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-20 w-[650px] h-[320px] z-30 pointer-events-none">
        <div className="w-full h-full bg-white rounded-4xl border border-[#D9D9D9]" aria-hidden="true" />
      </div>

      {/* Book fixed on top of the decorative panel (z-40) */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-50 w-[650px] h-[320px] z-40 pointer-events-auto flex items-center justify-center">
        <Book />
      </div>

      <div className="w-full max-w-7xl flex flex-col items-center gap-y-7">
        <div className="flex items-center pt-7">
          <div className="w-[22px] h-[22px] rounded-full bg-[#41C16B] shadow-[0_0_12px_4px_rgba(65,193,107,0.6)]"></div>
          <p className="text-[20px] px-2">
            Early Bird ending in 48 hours!!!
          </p>
        </div>

        <h1 className="font-bold text-black text-[48px] leading-[56px] text-center">
          Become a 100x Engineer <br />
          Because 10x Ain&apos;t Enough
        </h1>

        <p className="text-center font-medium text-[24px] leading-[32px]">
          Join the community where students crack GSoC, secure $150K <br />
          international offers, and build production-ready systems from day one.
        </p>
      </div>
    </section>
  );
}

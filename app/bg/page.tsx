"use client";
import { Button } from "@/components/ui/button";

export default function Bg() {
  return (
    <>
        <div className="">

        </div>
      <div className="h-screen w-screen bg-[#f3f3f3] flex justify-center items-center">
        <div className=" w-162.5 h-[340px] z-30 pointer-events-none">
          <div
            className="w-full h-full bg-white rounded-4xl border border-[#D9D9D9] flex justify-center items-center "
            aria-hidden="true"
          >
            <div>
              <Button className="bg-black mt-58 w-fit p-7 rounded-[10px]">
                Start Your Journey Now →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

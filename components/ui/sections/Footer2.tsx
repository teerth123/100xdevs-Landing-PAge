"use client";

import Link from "next/dist/client/link";
import { Youtube, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer2() {
  return (
    <>
      <div className="h-[50vh] w-screen flex justify-center items-center bg-[#010100] ">
        <div className="w-7xl h-full flex flex-col justify-center gap-8 py-8">
          <div className="flex justify-around items-center w-full ">
            <Link href="" className="">
              <span className="text-white text-[24px] font-bold">100</span>
              <span className="text-[#0EA5E9] text-[24px] font-bold">x</span>
              <span className="text-white text-[24px] font-bold">Devs</span>
            </Link>
            <div className="flex flex-col justify-center items-start text-[20px] text-white text-left">
              <h1>Terms & Conditions </h1>
              <h1>Privacy Policy</h1>
              <h1> Refund & Cancellation</h1>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex gap-6 items-center">
                <Link href="https://youtube.com" target="_blank" className="text-white hover:text-[#0EA5E9] transition-colors">
                  <Youtube size={28} />
                </Link>
                <Link href="https://twitter.com" target="_blank" className="text-white hover:text-[#0EA5E9] transition-colors">
                  <Twitter size={28} />
                </Link>
                <Link href="https://instagram.com" target="_blank" className="text-white hover:text-[#0EA5E9] transition-colors">
                  <Instagram size={28} />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="text-white hover:text-[#0EA5E9] transition-colors">
                  <Linkedin size={28} />
                </Link>
              </div>
              <p className="text-white text-center text-[16px]">© 2026 100xDevs. All rights reserved.</p>
            </div>
          </div>
          <h1 className="text-[250px] font-bold bg-linear-to-b from-[#797979] to-[#000000] bg-clip-text text-transparent text-center leading-none">100xDEVS</h1>
        </div>
      </div>
    </>
  );
}
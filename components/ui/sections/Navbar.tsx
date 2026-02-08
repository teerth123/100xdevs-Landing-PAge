"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <div className="w-screen h-fit flex justify-center items-center">
        <div className="h-full w-7xl flex justify-between items-center px-8 py-5">
          <div className="left_side flex items-center gap-8">
            <Link href="">
              <span className="text-black text-[24px] font-bold">100</span>
              <span className="text-[#0EA5E9] text-[24px] font-bold">x</span>
              <span className="text-black text-[24px] font-bold">Devs</span>
            </Link>
            <Link href="" className="text-black text-[20px]">
              Home
            </Link>
            <Link href="" className="text-black text-[20px]">
              Courses
            </Link>
          </div>
          <div className="right_side flex items-center gap-8">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground scale-150" />
              <Input
                placeholder="Type to search"
                className="
                  pl-9 
                  text-[20px] 
                  placeholder:text-[20px] 
                  placeholder:font-normal 
                  placeholder:text-muted-foreground
                "
              />
            </div>
            <Button variant="white">Sign up</Button>
            <Button variant="blue">Login</Button>
          </div>
        </div>
      </div>
      <hr className="w-screen stroke-1 stroke-black " />
    </>
  );
}

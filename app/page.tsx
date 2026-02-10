"use client";

import Navbar from "@/components/ui/sections/Navbar";
import Hero from "@/components/ui/sections/Hero";
import Benchmark from "@/components/ui/sections/Benchmark";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <Hero />
      </div>
      <Benchmark />
    </>
  );
}

"use client";

import Navbar from "@/components/ui/sections/Navbar";
import Hero from "@/components/ui/sections/Hero";

export default function Home() {
  return (
    <div className="h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}

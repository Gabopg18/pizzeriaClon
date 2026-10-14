"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { openCart } = useCart();

  return (
    <section id="home" className="w-full pt-4 pb-6">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6">
        {/* Main Hero Container */}
        <div className="relative w-full h-[460px] sm:h-[420px] rounded-[24px] overflow-hidden shadow-md border border-[#E8E5DF] bg-[#221A15]">
          {/* Background Pizza Photo */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/hero-pizza.jpg"
              alt="Crust Pizza Co. handcrafted pizza on wooden table with craft beer"
              fill
              priority
              className="object-cover object-center filter brightness-[0.96]"
              sizes="(max-width: 1080px) 100vw, 1080px"
            />
            {/* Subtle gradient vignette to ensure text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Top-Left Washi Tape Decorator */}
          <div className="absolute top-2 left-6 z-20 w-28 h-6 washi-tape -rotate-6 pointer-events-none rounded-xs" />

          {/* Left Overlay Content Area */}
          <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 sm:px-10 md:px-12 max-w-[460px]">
            {/* Irregular rustic black card */}
            <div className="relative bg-[#141414]/95 text-white p-5 sm:p-6 rounded-[12px] shadow-2xl backdrop-blur-xs border border-white/10 mb-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <h1 className="font-display font-black text-2xl sm:text-3xl md:text-[34px] leading-[1.08] uppercase tracking-tight text-white">
                FOR DELICIOUS,
                <br />
                MADE-FROM
                <br />
                SCRATCH PIZZAS
              </h1>
              <p className="font-body text-[11px] sm:text-xs text-stone-300/90 mt-2.5 font-normal tracking-wide">
                Handcrafted dough and slow cooked secret sauce.
              </p>
            </div>

            {/* Order Online Orange Pill Button */}
            <button
              onClick={openCart}
              className="px-7 py-3 bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-extrabold text-[15px] sm:text-base uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 group cursor-pointer"
            >
              <span>Order Online</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

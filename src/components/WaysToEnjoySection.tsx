"use client";

import React from "react";
import Image from "next/image";
import { CrustLogoStamp } from "./CrustLogoStamp";
import { SOCIAL_GALLERY } from "@/data/pizzeriaData";
import { Award, Sparkles, ArrowRight } from "lucide-react";

interface WaysToEnjoySectionProps {
  onOpenCompleteMenu: () => void;
  onOpenFranchise: () => void;
}

export const WaysToEnjoySection: React.FC<WaysToEnjoySectionProps> = ({
  onOpenCompleteMenu,
  onOpenFranchise,
}) => {
  return (
    <section id="ways-to-enjoy" className="w-full py-8 border-t border-[#E8E5DF]">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* ================= LEFT COLUMN (~48% -> col-span-6 or col-span-5/6) ================= */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Top: WAYS TO ENJOY + Stamp Pizza Photo */}
            <div>
              <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#1D1B1A] mb-4">
                WAYS TO ENJOY
              </h2>

              {/* Pizza Photo with Central Translucent Crust Stamp */}
              <div className="relative w-full aspect-square rounded-[22px] overflow-hidden shadow-md border border-[#E8E5DF] bg-[#2A1D17] group">
                <Image
                  src="/images/pepperoni-stamp.jpg"
                  alt="Crust Pizza Co. Chicago Thin Crust Pepperoni Pizza with Brand Stamp"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />

                {/* Circular Black Stamp Overlay in the Center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="transform transition-transform duration-300 group-hover:scale-110 drop-shadow-2xl">
                    <CrustLogoStamp size={120} variant="stamp-overlay" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Community Block */}
            <div className="bg-white rounded-[20px] p-5 border border-[#E8E5DF] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-[#686461]">
                  @yourbrandhandle
                </span>
                <h3 className="font-display font-black text-lg sm:text-xl uppercase leading-tight text-[#1D1B1A] mt-1 mb-2">
                  LET&apos;S WORK TOGETHER
                  <br />
                  FOR OUR COMMUNITY
                </h3>
                <p className="font-body text-[11px] sm:text-xs text-[#686461] leading-relaxed max-w-xs">
                  We proudly sponsor local little leagues, charity pizza nights,
                  and public school programs across our neighborhoods.
                </p>
              </div>

              {/* Community Illustration */}
              <div className="relative w-36 h-28 shrink-0">
                <Image
                  src="/images/community-illustration.svg"
                  alt="Community collaboration with Crust Pizza"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (~52% -> col-span-6) ================= */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Top: 2 Black Promo Cards Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Award-Winning Pizza & Service */}
              <div className="bg-[#1A1A1A] text-white rounded-[20px] p-5 text-center flex flex-col justify-between items-center shadow-md border border-white/5 min-h-[220px]">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#ED7D31] flex items-center justify-center text-white mb-3 shadow-xs">
                    <Award className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="font-display font-black text-lg uppercase tracking-tight leading-tight text-white mb-2">
                    AWARD-WINNING
                    <br />
                    PIZZA & SERVICE
                  </h3>
                  <p className="font-body text-[11px] text-stone-300 leading-relaxed max-w-[190px]">
                    Voted #1 thin-crust in Chicago with over 30 years of family passion.
                  </p>
                </div>
                <button
                  onClick={onOpenFranchise}
                  className="mt-4 px-6 py-2 bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-extrabold text-xs uppercase tracking-wider rounded-full shadow-xs transition-colors cursor-pointer"
                >
                  LEARN MORE
                </button>
              </div>

              {/* Card 2: Kids Eat Free Tuesdays! */}
              <div className="bg-[#1A1A1A] text-white rounded-[20px] p-5 text-center flex flex-col justify-between items-center shadow-md border border-white/5 min-h-[220px]">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#ED7D31] flex items-center justify-center text-white mb-3 shadow-xs">
                    <Sparkles className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="font-display font-black text-lg uppercase tracking-tight leading-tight text-white mb-2">
                    KIDS EAT FREE
                    <br />
                    TUESDAYS!
                  </h3>
                  <p className="font-body text-[11px] text-stone-300 leading-relaxed max-w-[190px]">
                    Free 8-inch cheese or pepperoni pizza for kids under 10 with adult entree.
                  </p>
                </div>
                <button
                  onClick={onOpenCompleteMenu}
                  className="mt-4 px-5 py-2 bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-extrabold text-xs uppercase tracking-wider rounded-full shadow-xs transition-colors cursor-pointer"
                >
                  VIEW OUR COMPLETE MENU
                </button>
              </div>
            </div>

            {/* Bottom: Why Choose Us + 3x2 Photo Grid */}
            <div className="bg-white/70 backdrop-blur-xs rounded-[20px] p-5 shadow-sm border border-[#E8E5DF]">
              <h3 className="font-display font-black text-xl uppercase tracking-tight text-[#1D1B1A] mb-3">
                WHY CHOOSE US
              </h3>

              {/* 3 columns x 2 rows photo grid */}
              <div className="grid grid-cols-3 gap-2">
                {SOCIAL_GALLERY.map((photo) => (
                  <div
                    key={photo.id}
                    className="relative aspect-square rounded-[10px] overflow-hidden bg-[#F0ECE1] group cursor-pointer"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 640px) 30vw, 160px"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-[10px] text-white font-display font-bold uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded-full">
                        @crust
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface FranchiseBannerProps {
  onOpenFranchise: (tab?: "franchise" | "contact" | "locations") => void;
  onOpenLocations: () => void;
}

export const FranchiseBanner: React.FC<FranchiseBannerProps> = ({
  onOpenFranchise,
  onOpenLocations,
}) => {
  return (
    <section id="franchise-banner" className="w-full py-8 border-t border-[#E8E5DF]">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Left Column (col-span-4) */}
          <div className="md:col-span-4 flex flex-col justify-center text-left">
            <h2 className="font-display font-black text-2xl sm:text-[28px] uppercase leading-[1.08] tracking-tight text-[#1D1B1A]">
              WANT TO OWN YOUR OWN
              <br />
              CRUST PIZZA CO.?
            </h2>
            <p className="font-body text-[11px] sm:text-xs text-[#686461] leading-relaxed mt-2 mb-4 max-w-xs">
              Partner with an established Chicago thin-crust brand with proven turnkey operations.
            </p>
            <div>
              <button
                onClick={() => onOpenFranchise("franchise")}
                className="px-6 py-2.5 bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>SUBMIT A REQUEST</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center Column (col-span-4): Horizontal Restaurant Exterior Photo */}
          <div className="md:col-span-4">
            <div className="relative w-full h-44 sm:h-48 rounded-[16px] overflow-hidden shadow-sm border border-[#E8E5DF] bg-[#211A16] group">
              <Image
                src="/images/restaurant-exterior.jpg"
                alt="Crust Pizza Co. standalone restaurant exterior at dusk with glowing signs"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-3 text-[10px] text-white/90 font-display font-bold uppercase tracking-wider">
                Flagship Store • Chicago, IL
              </div>
            </div>
          </div>

          {/* Right Column (col-span-4): SUBMIT A REQUEST + 3 square buttons */}
          <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end">
            <div className="w-full max-w-[280px]">
              <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-[#1D1B1A] mb-3 text-left md:text-right">
                SUBMIT A REQUEST
              </h3>

              {/* Row of 3 orange square/rounded buttons */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={onOpenLocations}
                  className="h-14 rounded-[12px] bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-black text-[11px] uppercase tracking-wider flex items-center justify-center p-1 text-center shadow-xs transition-transform transform active:scale-95 hover:scale-105 cursor-pointer"
                >
                  LOCATIONS
                </button>
                <button
                  onClick={() => onOpenFranchise("contact")}
                  className="h-14 rounded-[12px] bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-black text-[11px] uppercase tracking-wider flex items-center justify-center p-1 text-center shadow-xs transition-transform transform active:scale-95 hover:scale-105 cursor-pointer leading-tight"
                >
                  GET IN TOUCH
                </button>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-14 rounded-[12px] bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-black text-[11px] uppercase tracking-wider flex items-center justify-center p-1 text-center shadow-xs transition-transform transform active:scale-95 hover:scale-105 cursor-pointer"
                >
                  FOLLOW US
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

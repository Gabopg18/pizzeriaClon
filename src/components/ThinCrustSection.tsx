"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  Car,
  Utensils,
  BookOpen,
  Truck,
  Users,
  ArrowRight,
} from "lucide-react";

interface ThinCrustSectionProps {
  onOpenLocations: () => void;
  onOpenFranchise: () => void;
}

export const ThinCrustSection: React.FC<ThinCrustSectionProps> = ({
  onOpenLocations,
  onOpenFranchise,
}) => {
  const { openCart } = useCart();

  const serviceButtons = [
    {
      id: "order-online",
      label: "ORDER ONLINE",
      icon: <ShoppingBag className="w-6 h-6 stroke-[1.75]" />,
      action: openCart,
    },
    {
      id: "curbside-pickup",
      label: "CURBSIDE PICKUP",
      icon: <Car className="w-6 h-6 stroke-[1.75]" />,
      action: openCart,
    },
    {
      id: "in-store-dining",
      label: "IN-STORE DINING",
      icon: <Utensils className="w-6 h-6 stroke-[1.75]" />,
      action: onOpenLocations,
    },
    {
      id: "learn-more",
      label: "LEARN MORE",
      icon: <BookOpen className="w-6 h-6 stroke-[1.75]" />,
      action: onOpenFranchise,
    },
    {
      id: "nationwide",
      label: "NATIONWIDE",
      icon: <Truck className="w-6 h-6 stroke-[1.75]" />,
      action: openCart,
    },
    {
      id: "partnerships",
      label: "PARTNERSHIPS",
      icon: <Users className="w-6 h-6 stroke-[1.75]" />,
      action: onOpenFranchise,
    },
  ];

  return (
    <section id="thin-crust" className="w-full py-8 border-t border-[#E8E5DF]">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Col 1-4: Title, Story, Actions */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[40px] leading-[1.05] uppercase tracking-tight text-[#1D1B1A]">
              HOME OF THE
              <br />
              CHICAGO-STYLE
              <br />
              THIN CRUST PIZZA
            </h2>
            <p className="font-body text-xs sm:text-[13px] text-[#686461] leading-relaxed mt-3.5 mb-6 max-w-sm">
              Authentic thin crust rolled daily and baked crisp in deck ovens.
              Square-cut tavern style with sweet tangy tomato sauce and 100% Wisconsin mozzarella.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={onOpenFranchise}
                className="px-6 py-2.5 bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-extrabold text-sm uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                LEARN MORE
              </button>
              <button
                onClick={onOpenLocations}
                className="font-display font-extrabold text-sm uppercase tracking-wider text-[#1D1B1A] hover:text-[#ED7D31] flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>SEE LOCATIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 5-8: Matrix 3 cols x 2 rows of orange square buttons */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-[280px]">
              {serviceButtons.map((btn) => (
                <div key={btn.id} className="flex flex-col items-center">
                  <button
                    onClick={btn.action}
                    aria-label={btn.label}
                    className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-[14px] bg-[#ED7D31] hover:bg-[#D96B20] text-white flex items-center justify-center shadow-xs transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    {btn.icon}
                  </button>
                  <span className="font-display font-bold text-[10px] sm:text-[11px] text-[#1D1B1A] uppercase tracking-tight text-center mt-1.5 leading-tight max-w-[76px]">
                    {btn.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 9-12: Polaroid Composition */}
          <div className="lg:col-span-4 relative flex justify-center items-center py-6 lg:py-0">
            <div className="relative w-[300px] sm:w-[320px] h-[250px]">
              {/* Polaroid 1 (Male Founder, tilted left -rotate-3) */}
              <div className="absolute top-2 left-2 z-10 w-[155px] sm:w-[170px] polaroid-card -rotate-3 rounded-xs">
                <div className="relative w-full h-[150px] sm:h-[165px] bg-[#F0ECE1] overflow-hidden">
                  <Image
                    src="/images/owner-male.jpg"
                    alt="Crust Pizza Co. Founder"
                    fill
                    className="object-cover object-top"
                    sizes="170px"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="font-display font-bold text-[11px] tracking-wider text-[#1D1B1A] uppercase">
                    Gabriel &bull; Founder
                  </p>
                </div>
                {/* Washi Tape on top left corner */}
                <div className="absolute -top-3 left-4 w-14 h-5 washi-tape -rotate-12 pointer-events-none" />
              </div>

              {/* Polaroid 2 (Female Partner, tilted right rotate-6, overlapping) */}
              <div className="absolute top-8 right-2 z-20 w-[155px] sm:w-[170px] polaroid-card rotate-6 rounded-xs">
                <div className="relative w-full h-[150px] sm:h-[165px] bg-[#F0ECE1] overflow-hidden">
                  <Image
                    src="/images/owner-female.jpg"
                    alt="Crust Pizza Co. Co-founder"
                    fill
                    className="object-cover object-top"
                    sizes="170px"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="font-display font-bold text-[11px] tracking-wider text-[#1D1B1A] uppercase">
                    Elena &bull; Head Chef
                  </p>
                </div>
                {/* Washi Tape on top right corner */}
                <div className="absolute -top-3 right-3 w-14 h-5 washi-tape rotate-12 pointer-events-none" />
                {/* Washi Tape on bottom right corner */}
                <div className="absolute -bottom-2 right-6 w-12 h-5 washi-tape -rotate-6 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import { CrustLogoStamp } from "./CrustLogoStamp";
import { useCart } from "@/context/CartContext";

interface FooterProps {
  onOpenCompleteMenu: () => void;
  onOpenLocations: () => void;
  onOpenFranchise: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCompleteMenu,
  onOpenLocations,
  onOpenFranchise,
}) => {
  const { openCart } = useCart();

  return (
    <footer className="w-full bg-[#F9F8F6] pt-8 pb-12 border-t border-[#E8E5DF]">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Block: Circular Stamp Logo + 2-line Text */}
          <div className="flex items-center gap-3.5 cursor-pointer group" onClick={openCart}>
            <CrustLogoStamp size={54} variant="black" />
            <div className="text-left">
              <span className="font-display font-black text-sm sm:text-base uppercase leading-tight tracking-tight text-[#1D1B1A] group-hover:text-[#ED7D31] transition-colors block">
                WANT TO PLACE AN
                <br />
                ORDER NOW?
              </span>
            </div>
          </div>

          {/* Right Block: Uppercase Links */}
          <nav className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-xs font-display font-extrabold uppercase tracking-wider text-[#1D1B1A]">
            <button
              onClick={onOpenCompleteMenu}
              className="hover:text-[#ED7D31] transition-colors"
            >
              MENU
            </button>
            <button
              onClick={onOpenFranchise}
              className="hover:text-[#ED7D31] transition-colors"
            >
              CATERING
            </button>
            <button
              onClick={onOpenLocations}
              className="hover:text-[#ED7D31] transition-colors"
            >
              LOCATIONS
            </button>
            <button
              onClick={onOpenFranchise}
              className="hover:text-[#ED7D31] transition-colors"
            >
              COMMISSIONS
            </button>
            <Link
              href="#privacy"
              className="hover:text-[#ED7D31] transition-colors"
            >
              PRIVACY
            </Link>
            <Link
              href="#terms"
              className="hover:text-[#ED7D31] transition-colors"
            >
              TERMS
            </Link>
          </nav>
        </div>

        {/* Bottom subtle copyright note */}
        <div className="mt-8 pt-4 border-t border-[#E8E5DF]/60 text-center">
          <p className="text-[11px] text-[#9E9A96]">
            &copy; 2026 Crust Pizza Co. All rights reserved. Handcrafted Chicago-style thin crust pizza.
          </p>
        </div>
      </div>
    </footer>
  );
};

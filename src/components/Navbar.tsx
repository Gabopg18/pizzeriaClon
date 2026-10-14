"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CrustLogoStamp } from "./CrustLogoStamp";
import { useCart } from "@/context/CartContext";
import { Menu, X, User, Phone, ShoppingBag } from "lucide-react";

interface NavbarProps {
  onOpenLocations: () => void;
  onOpenFranchise: () => void;
  onOpenMenuModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLocations,
  onOpenFranchise,
  onOpenMenuModal,
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { totalCount, openCart } = useCart();

  return (
    <header className="w-full bg-[#F9F8F6] pt-4 pb-3 border-b border-[#E8E5DF]/60">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Left Block (Desktop Navigation) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-start">
            <Link
              href="#home"
              className="bg-[#ED7D31] text-white font-display font-extrabold text-[15px] tracking-wide uppercase px-3 py-1 rounded-[6px] shadow-xs hover:bg-[#D96B20] transition-colors"
            >
              HOME
            </Link>
            <button
              onClick={onOpenMenuModal}
              className="font-display font-extrabold text-[15px] tracking-wide uppercase text-[#1D1B1A] hover:text-[#ED7D31] transition-colors"
            >
              MENU
            </button>
            <button
              onClick={onOpenLocations}
              className="font-display font-extrabold text-[15px] tracking-wide uppercase text-[#1D1B1A] hover:text-[#ED7D31] transition-colors"
            >
              LOCATIONS
            </button>
            <button
              onClick={openCart}
              className="font-display font-extrabold text-[15px] tracking-wide uppercase text-[#1D1B1A] hover:text-[#ED7D31] transition-colors relative"
            >
              ORDER ONLINE
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-3 w-4 h-4 rounded-full bg-[#ED7D31] text-white text-[10px] font-bold flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>
          </nav>

          {/* Center Block (Vintage Stamp Logo) */}
          <div className="flex items-center justify-center px-4">
            <Link href="#home" className="inline-block transform transition-transform hover:scale-105">
              <CrustLogoStamp size={68} variant="black" />
            </Link>
          </div>

          {/* Right Block (Desktop Actions & Links) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-end">
            <Link
              href="#thin-crust"
              className="font-display font-extrabold text-[15px] tracking-wide uppercase text-[#1D1B1A] hover:text-[#ED7D31] transition-colors"
            >
              ABOUT
            </Link>
            <button
              onClick={onOpenFranchise}
              className="font-display font-extrabold text-[15px] tracking-wide uppercase text-[#1D1B1A] hover:text-[#ED7D31] transition-colors"
            >
              CONTACT
            </button>

            {/* Profile circular orange button */}
            <button
              onClick={openCart}
              aria-label="User Account and Orders"
              className="w-7 h-7 rounded-full bg-[#ED7D31] text-white flex items-center justify-center shadow-xs hover:bg-[#D96B20] transition-colors relative"
            >
              <User className="w-4 h-4 fill-white" />
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#1A1A1A] text-white text-[9px] font-extrabold flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>

            {/* Twitter / X icon */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter X profile"
              className="w-5 h-5 text-[#1D1B1A] hover:text-[#ED7D31] transition-colors flex items-center justify-center"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* CALL NOW text */}
            <a
              href="tel:3125550192"
              className="font-display font-black text-[15px] tracking-wider uppercase text-[#1D1B1A] hover:text-[#ED7D31] transition-colors flex items-center gap-1.5"
            >
              <span>CALL NOW</span>
            </a>
          </div>

          {/* Mobile Actions: Bag + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={openCart}
              aria-label="View shopping bag"
              className="w-9 h-9 rounded-full bg-[#ED7D31] text-white flex items-center justify-center relative shadow-xs"
            >
              <ShoppingBag className="w-4 h-4" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#1A1A1A] text-white text-[9px] font-bold flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileDrawerOpen(true)}
              aria-label="Open mobile navigation"
              className="w-10 h-10 rounded-xl bg-white border border-[#E8E5DF] text-[#1D1B1A] flex items-center justify-center hover:bg-[#F4F1EA] transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[82%] max-w-sm bg-[#FAF9F6] shadow-2xl p-6 flex flex-col justify-between border-l border-[#E8E5DF] z-10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E5DF]">
                <CrustLogoStamp size={54} variant="black" />
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="w-9 h-9 rounded-full bg-[#F0ECE1] flex items-center justify-center text-[#1D1B1A]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-6">
                <Link
                  href="#home"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="px-4 py-2.5 bg-[#ED7D31] text-white font-display font-extrabold text-lg uppercase rounded-xl tracking-wide"
                >
                  HOME
                </Link>
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    onOpenMenuModal();
                  }}
                  className="text-left px-4 py-2 text-[#1D1B1A] hover:text-[#ED7D31] font-display font-extrabold text-lg uppercase tracking-wide"
                >
                  MENU
                </button>
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    onOpenLocations();
                  }}
                  className="text-left px-4 py-2 text-[#1D1B1A] hover:text-[#ED7D31] font-display font-extrabold text-lg uppercase tracking-wide"
                >
                  LOCATIONS
                </button>
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    openCart();
                  }}
                  className="text-left px-4 py-2 text-[#1D1B1A] hover:text-[#ED7D31] font-display font-extrabold text-lg uppercase tracking-wide flex items-center justify-between"
                >
                  <span>ORDER ONLINE</span>
                  {totalCount > 0 && (
                    <span className="bg-[#ED7D31] text-white text-xs px-2 py-0.5 rounded-full">
                      {totalCount} items
                    </span>
                  )}
                </button>
                <Link
                  href="#thin-crust"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="px-4 py-2 text-[#1D1B1A] hover:text-[#ED7D31] font-display font-extrabold text-lg uppercase tracking-wide"
                >
                  ABOUT
                </Link>
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    onOpenFranchise();
                  }}
                  className="text-left px-4 py-2 text-[#1D1B1A] hover:text-[#ED7D31] font-display font-extrabold text-lg uppercase tracking-wide"
                >
                  CONTACT & FRANCHISE
                </button>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8E5DF] space-y-3">
              <a
                href="tel:3125550192"
                className="w-full py-3 bg-[#1A1A1A] text-white font-display font-extrabold text-base uppercase rounded-full flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#ED7D31]" />
                <span>CALL NOW (312) 555-0192</span>
              </a>
              <p className="text-[11px] text-center text-[#9E9A96]">
                Crust Pizza Co. • Handcrafted Thin Crust
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

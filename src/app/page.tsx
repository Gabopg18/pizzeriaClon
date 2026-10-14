"use client";

import React, { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MenuSection } from "@/components/MenuSection";
import { ThinCrustSection } from "@/components/ThinCrustSection";
import { WaysToEnjoySection } from "@/components/WaysToEnjoySection";
import { FranchiseBanner } from "@/components/FranchiseBanner";
import { Footer } from "@/components/Footer";
import { CartDrawerModal } from "@/components/CartDrawerModal";
import { FranchiseModal } from "@/components/FranchiseModal";
import { FullMenuModal } from "@/components/FullMenuModal";
import { ToastNotification } from "@/components/ToastNotification";

export default function Home() {
  const [franchiseModalOpen, setFranchiseModalOpen] = useState(false);
  const [franchiseTab, setFranchiseTab] = useState<"franchise" | "contact" | "locations">("franchise");
  const [fullMenuModalOpen, setFullMenuModalOpen] = useState(false);

  const handleOpenFranchise = (tab: "franchise" | "contact" | "locations" = "franchise") => {
    setFranchiseTab(tab);
    setFranchiseModalOpen(true);
  };

  const handleOpenLocations = () => {
    setFranchiseTab("locations");
    setFranchiseModalOpen(true);
  };

  return (
    <CartProvider>
      <main className="min-h-screen bg-[#F9F8F6] text-[#1D1B1A] flex flex-col paper-texture selection:bg-[#ED7D31] selection:text-white relative">
        {/* Top Navbar */}
        <Navbar
          onOpenLocations={handleOpenLocations}
          onOpenFranchise={() => handleOpenFranchise("contact")}
          onOpenMenuModal={() => setFullMenuModalOpen(true)}
        />

        {/* Hero Banner Section */}
        <HeroSection />

        {/* "OUR MENU" Section */}
        <MenuSection
          onOpenCompleteMenu={() => setFullMenuModalOpen(true)}
        />

        {/* "HOME OF THE CHICAGO-STYLE THIN CRUST PIZZA" Section */}
        <ThinCrustSection
          onOpenLocations={handleOpenLocations}
          onOpenFranchise={() => handleOpenFranchise("franchise")}
        />

        {/* "WAYS TO ENJOY" + "WHY CHOOSE US" Section */}
        <WaysToEnjoySection
          onOpenCompleteMenu={() => setFullMenuModalOpen(true)}
          onOpenFranchise={() => handleOpenFranchise("franchise")}
        />

        {/* Franchise / Expansion Banner */}
        <FranchiseBanner
          onOpenFranchise={handleOpenFranchise}
          onOpenLocations={handleOpenLocations}
        />

        {/* Footer */}
        <Footer
          onOpenCompleteMenu={() => setFullMenuModalOpen(true)}
          onOpenLocations={handleOpenLocations}
          onOpenFranchise={() => handleOpenFranchise("franchise")}
        />

        {/* Global Interactive Modals & Drawers */}
        <CartDrawerModal />
        <FranchiseModal
          isOpen={franchiseModalOpen}
          initialTab={franchiseTab}
          onClose={() => setFranchiseModalOpen(false)}
        />
        <FullMenuModal
          isOpen={fullMenuModalOpen}
          onClose={() => setFullMenuModalOpen(false)}
        />
        <ToastNotification />
      </main>
    </CartProvider>
  );
}

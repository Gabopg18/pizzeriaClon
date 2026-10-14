"use client";

import React from "react";
import Image from "next/image";
import { MENU_ITEMS, MenuItem } from "@/data/pizzeriaData";
import { useCart } from "@/context/CartContext";
import { Plus, ArrowRight } from "lucide-react";

interface MenuSectionProps {
  onOpenCompleteMenu: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onOpenCompleteMenu,
}) => {
  const { addItem } = useCart();

  // Take the first 4 pasta / signature items as in the reference design
  const displayItems = MENU_ITEMS.slice(0, 4);

  return (
    <section id="our-menu" className="w-full py-6">
      <div className="max-w-[1080px] mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="mb-5">
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#1D1B1A]">
            OUR MENU
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[16px] p-2.5 shadow-sm border border-[#E8E5DF] flex flex-col justify-between hover:shadow-md transition-all duration-200 group"
            >
              <div>
                {/* Photo with Orange Price Badge */}
                <div className="relative w-full h-36 sm:h-38 rounded-[12px] overflow-hidden bg-[#F0ECE1]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Badge naranja superpuesto en la esquina inferior derecha de la foto */}
                  <div className="absolute bottom-1.5 right-1.5 bg-[#ED7D31] text-white font-display font-extrabold text-[13px] px-2.5 py-0.5 rounded-full shadow-xs">
                    {item.priceFormatted}
                  </div>
                </div>

                {/* Content underneath */}
                <div className="pt-3 px-1">
                  <h3 className="font-display font-extrabold text-[15px] sm:text-base uppercase tracking-tight text-[#1D1B1A]">
                    {item.name}
                  </h3>
                  <p className="font-body text-[11px] sm:text-xs text-[#686461] leading-relaxed mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with circular orange + button */}
              <div className="flex items-center justify-end pt-2 px-1">
                <button
                  onClick={() => addItem(item)}
                  aria-label={`Add ${item.name} to order`}
                  className="w-7 h-7 rounded-full bg-[#ED7D31] hover:bg-[#D96B20] text-white flex items-center justify-center shadow-xs transition-transform transform active:scale-95 hover:scale-110 cursor-pointer"
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Center Bottom Button: VIEW OUR COMPLETE MENU */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onOpenCompleteMenu}
            className="px-8 py-3 bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
          >
            <span>VIEW OUR COMPLETE MENU</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

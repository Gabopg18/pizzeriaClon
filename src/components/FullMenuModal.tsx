"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Plus, Check } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "@/data/pizzeriaData";
import { useCart } from "@/context/CartContext";

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "pastas" | "pizzas">("all");
  const { addItem, cart } = useCart();

  if (!isOpen) return null;

  const filteredItems =
    selectedCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-3xl bg-[#FAF9F6] rounded-[24px] shadow-2xl border border-[#E8E5DF] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-[#E8E5DF] bg-white flex items-center justify-between">
          <div>
            <span className="text-[11px] font-display font-bold tracking-widest text-[#ED7D31] uppercase">
              Handcrafted Daily
            </span>
            <h3 className="font-display font-black text-3xl uppercase tracking-tight text-[#1D1B1A]">
              Crust Pizza Co. Complete Menu
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F0ECE1] hover:bg-[#E2DDD0] flex items-center justify-center transition-colors text-[#1D1B1A]"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="px-6 py-3 bg-[#F4F1EA] border-b border-[#E8E5DF] flex items-center gap-2">
          {(["all", "pastas", "pizzas"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-display font-bold uppercase transition-all ${
                selectedCategory === cat
                  ? "bg-[#ED7D31] text-white shadow-xs"
                  : "bg-white text-[#686461] hover:text-[#1D1B1A]"
              }`}
            >
              {cat === "all" ? "All Specialties" : cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => {
            const inCart = cart.find((ci) => ci.item.id === item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-3 border border-[#E8E5DF] flex gap-3 shadow-xs hover:border-[#ED7D31]/40 transition-all group"
              >
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-[#F0ECE1]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="96px"
                  />
                  <div className="absolute bottom-1 right-1 bg-[#ED7D31] text-white font-display font-extrabold text-[11px] px-1.5 py-0.5 rounded-full">
                    {item.priceFormatted}
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-display font-bold text-sm uppercase text-[#1D1B1A] tracking-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#686461] line-clamp-2 mt-0.5">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#F0ECE1]">
                    <span className="text-[10px] text-[#9E9A96]">
                      {item.calories}
                    </span>
                    <button
                      onClick={() => addItem(item)}
                      className="px-3 py-1 bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-bold text-xs uppercase rounded-full flex items-center gap-1 transition-colors shadow-xs"
                    >
                      {inCart ? (
                        <>
                          <Check className="w-3 h-3" />
                          <span>Added ({inCart.quantity})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

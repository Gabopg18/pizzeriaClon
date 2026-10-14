"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, X } from "lucide-react";

export const ToastNotification: React.FC = () => {
  const { toastMessage, clearToast, openCart } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in max-w-sm">
      <div className="bg-[#1A1A1A] text-white px-4 py-3 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#ED7D31] flex items-center justify-center shrink-0">
          <ShoppingBag className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 text-xs">
          <p className="font-semibold text-white">{toastMessage}</p>
          <button
            onClick={openCart}
            className="text-[#ED7D31] font-display font-bold uppercase text-[11px] hover:underline"
          >
            View Bag &rarr;
          </button>
        </div>
        <button
          onClick={clearToast}
          className="text-white/60 hover:text-white p-1 rounded-full transition-colors"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

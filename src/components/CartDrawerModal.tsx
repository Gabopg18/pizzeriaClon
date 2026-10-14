"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, Trash2, ShoppingBag, CheckCircle, ArrowRight } from "lucide-react";

export const CartDrawerModal: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    clearCart,
  } = useCart();

  const [orderType, setOrderType] = useState<"delivery" | "pickup">("delivery");
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState("4821");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  if (!isCartOpen) return null;

  const deliveryFee = orderType === "delivery" ? 3.99 : 0;
  const tax = subtotal * 0.0825;
  const grandTotal = subtotal > 0 ? subtotal + tax + deliveryFee : 0;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      // Keep open for celebration
    }, 500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    clearCart();
    closeCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="relative z-10 w-full max-w-md bg-[#FAF9F6] h-full shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out border-l border-[#E8E5DF]">
        {/* Header */}
        <div className="p-5 border-b border-[#E8E5DF] flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#ED7D31]/10 flex items-center justify-center text-[#ED7D31]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight text-[#1D1B1A]">
                Your Crust Order
              </h2>
              <p className="text-xs text-[#686461]">
                {cart.length === 0
                  ? "Bag is empty"
                  : `${cart.reduce((s, i) => s + i.quantity, 0)} items ready to bake`}
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="w-9 h-9 rounded-full bg-[#F0ECE1] hover:bg-[#E2DDD0] flex items-center justify-center transition-colors text-[#1D1B1A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isSuccess ? (
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-display font-extrabold text-3xl uppercase tracking-tight text-[#1D1B1A] mb-2">
              Order Received!
            </h3>
            <p className="text-sm text-[#686461] max-w-xs mb-6">
              Thank you, {customerName || "Pizza Lover"}! Your Chicago thin-crust pizza is being handcrafted with fresh dough. Estimated time:{" "}
              <span className="font-bold text-[#ED7D31]">25-35 mins</span>.
            </p>
            <div className="bg-white p-4 rounded-xl border border-[#E8E5DF] w-full text-left mb-6 text-xs space-y-1.5">
              <div className="flex justify-between font-bold text-[#1D1B1A]">
                <span>Order #CRUST-{orderId}</span>
                <span className="text-[#ED7D31] uppercase">{orderType}</span>
              </div>
              <div className="flex justify-between text-[#686461]">
                <span>Total Paid:</span>
                <span className="font-semibold text-[#1D1B1A]">${grandTotal.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-3.5 bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-bold text-base uppercase rounded-full shadow-md transition-colors"
            >
              Order More / Close
            </button>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#F0ECE1] flex items-center justify-center text-[#9E9A96] mb-4">
              <ShoppingBag className="w-8 h-8 opacity-60" />
            </div>
            <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-[#1D1B1A] mb-1">
              Your bag is empty
            </h3>
            <p className="text-xs text-[#686461] max-w-xs mb-6">
              Explore our menu and add crispy Chicago thin-crust pizzas or signature pasta dishes.
            </p>
            <button
              onClick={closeCart}
              className="py-2.5 px-6 bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-bold text-sm uppercase rounded-full shadow-sm transition-colors"
            >
              Browse Menu
            </button>
          </div>
        ) : (
          <>
            {/* Delivery / Pickup Switch */}
            <div className="p-4 bg-white border-b border-[#E8E5DF]">
              <div className="grid grid-cols-2 p-1 bg-[#F5F3EF] rounded-xl text-xs font-bold font-display uppercase tracking-wider">
                <button
                  type="button"
                  onClick={() => setOrderType("delivery")}
                  className={`py-2 rounded-lg transition-all ${
                    orderType === "delivery"
                      ? "bg-[#ED7D31] text-white shadow-xs"
                      : "text-[#686461] hover:text-[#1D1B1A]"
                  }`}
                >
                  Delivery ($3.99)
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType("pickup")}
                  className={`py-2 rounded-lg transition-all ${
                    orderType === "pickup"
                      ? "bg-[#ED7D31] text-white shadow-xs"
                      : "text-[#686461] hover:text-[#1D1B1A]"
                  }`}
                >
                  Curbside Pickup (Free)
                </button>
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {cart.map((ci) => (
                <div
                  key={ci.item.id}
                  className="bg-white rounded-xl p-3 border border-[#E8E5DF] flex items-center gap-3 shadow-xs"
                >
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-[#F0ECE1]">
                    <Image
                      src={ci.item.image}
                      alt={ci.item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-bold text-sm uppercase text-[#1D1B1A] truncate">
                      {ci.item.name}
                    </h4>
                    <p className="text-xs text-[#ED7D31] font-bold">
                      ${(ci.item.price * ci.quantity).toFixed(2)}
                    </p>
                    <p className="text-[10px] text-[#9E9A96]">
                      ${ci.item.price} each
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#FAF9F6] border border-[#E8E5DF] rounded-lg p-1">
                    <button
                      onClick={() => updateQuantity(ci.item.id, -1)}
                      className="w-6 h-6 rounded flex items-center justify-center text-[#1D1B1A] hover:bg-[#E8E5DF] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-5 text-center font-bold text-xs">
                      {ci.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(ci.item.id, 1)}
                      className="w-6 h-6 rounded flex items-center justify-center text-[#1D1B1A] hover:bg-[#E8E5DF] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(ci.item.id)}
                    className="text-[#9E9A96] hover:text-red-500 p-1.5 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Footer Summary & Checkout */}
            <div className="p-4 bg-white border-t border-[#E8E5DF] space-y-3">
              <form onSubmit={handleCheckout} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-[#E8E5DF] rounded-lg bg-[#FAF9F6] focus:outline-none focus:border-[#ED7D31]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-[#E8E5DF] rounded-lg bg-[#FAF9F6] focus:outline-none focus:border-[#ED7D31]"
                  />
                </div>

                <div className="space-y-1.5 text-xs text-[#686461] border-t border-dashed border-[#E8E5DF] pt-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (8.25%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {orderType === "delivery" && (
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-display font-extrabold text-base text-[#1D1B1A] pt-1 border-t border-[#E8E5DF]">
                    <span>Total</span>
                    <span className="text-[#ED7D31]">${grandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-extrabold text-base uppercase tracking-wider rounded-full shadow-md flex items-center justify-center gap-2 transition-all hover:gap-3"
                >
                  <span>Place Your Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

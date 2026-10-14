"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Building2, Mail, Phone, MapPin } from "lucide-react";

interface FranchiseModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "franchise" | "contact" | "locations";
}

export const FranchiseModal: React.FC<FranchiseModalProps> = ({
  isOpen,
  onClose,
  initialTab = "franchise",
}) => {
  const [activeTab, setActiveTab] = useState<"franchise" | "contact" | "locations">(initialTab);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    capital: "$250k - $500k",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg bg-[#FAF9F6] rounded-[24px] shadow-2xl border border-[#E8E5DF] overflow-hidden">
        {/* Header with tabs */}
        <div className="bg-[#1A1A1A] text-white p-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#ED7D31] flex items-center justify-center text-white font-display font-extrabold text-sm">
                C
              </div>
              <span className="font-display font-bold tracking-widest text-sm text-[#ED7D31] uppercase">
                Crust Pizza Co. Network
              </span>
            </div>
            <button
              onClick={handleClose}
              className="text-white/60 hover:text-white p-1 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h3 className="font-display font-extrabold text-3xl uppercase tracking-tight text-white mb-3">
            {activeTab === "franchise"
              ? "Own Your Own Crust Pizza Co."
              : activeTab === "contact"
              ? "Get In Touch With Our Team"
              : "Explore Crust Locations"}
          </h3>

          {/* Tab selector */}
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-white/10 rounded-xl text-xs font-display font-bold uppercase">
            <button
              type="button"
              onClick={() => setActiveTab("franchise")}
              className={`py-1.5 rounded-lg transition-all ${
                activeTab === "franchise"
                  ? "bg-[#ED7D31] text-white shadow-xs"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Franchise
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("contact")}
              className={`py-1.5 rounded-lg transition-all ${
                activeTab === "contact"
                  ? "bg-[#ED7D31] text-white shadow-xs"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Get In Touch
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("locations")}
              className={`py-1.5 rounded-lg transition-all ${
                activeTab === "locations"
                  ? "bg-[#ED7D31] text-white shadow-xs"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Locations
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-2xl uppercase text-[#1D1B1A] mb-2">
                Request Submitted!
              </h4>
              <p className="text-xs text-[#686461] max-w-sm mx-auto mb-6">
                Thank you, {formData.name}. Our franchise & development director will contact you within 24 business hours at {formData.email || formData.phone}.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="py-3 px-8 bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-bold text-sm uppercase rounded-full shadow-sm transition-colors"
              >
                Back To Website
              </button>
            </div>
          ) : activeTab === "locations" ? (
            <div className="space-y-3">
              <p className="text-xs text-[#686461] mb-2">
                Visit any of our four Chicago-area authentic taverns:
              </p>
              <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                {[
                  {
                    name: "Chicago Downtown Flagship",
                    addr: "244 N Michigan Ave, Chicago, IL 60601",
                    phone: "(312) 555-0192",
                    status: "Open Now • Closes 11 PM",
                  },
                  {
                    name: "Lincoln Park Tavern",
                    addr: "1820 N Halsted St, Chicago, IL 60614",
                    phone: "(773) 555-0144",
                    status: "Open Now • Closes 10:30 PM",
                  },
                  {
                    name: "Wicker Park Lounge",
                    addr: "1450 N Milwaukee Ave, Chicago, IL 60622",
                    phone: "(773) 555-0188",
                    status: "Open Now • Closes Midnight",
                  },
                  {
                    name: "Evanston North Shore",
                    addr: "710 Church St, Evanston, IL 60201",
                    phone: "(847) 555-0173",
                    status: "Open Now • Closes 10 PM",
                  },
                ].map((loc, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-xl border border-[#E8E5DF] text-xs flex flex-col gap-1 shadow-xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm uppercase text-[#1D1B1A]">
                        {loc.name}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        {loc.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#686461]">
                      <MapPin className="w-3.5 h-3.5 text-[#ED7D31]" />
                      <span>{loc.addr}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#686461]">
                      <Phone className="w-3.5 h-3.5 text-[#ED7D31]" />
                      <span>{loc.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1D1B1A] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2.5 border border-[#E8E5DF] rounded-xl bg-white focus:outline-none focus:border-[#ED7D31]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1D1B1A] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(312) 555-0100"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full text-xs px-3 py-2.5 border border-[#E8E5DF] rounded-xl bg-white focus:outline-none focus:border-[#ED7D31]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1D1B1A] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full text-xs px-3 py-2.5 border border-[#E8E5DF] rounded-xl bg-white focus:outline-none focus:border-[#ED7D31]"
                />
              </div>

              {activeTab === "franchise" && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1D1B1A] mb-1">
                      Target City / Market
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Austin, TX"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2.5 border border-[#E8E5DF] rounded-xl bg-white focus:outline-none focus:border-[#ED7D31]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1D1B1A] mb-1">
                      Liquid Capital Available
                    </label>
                    <select
                      value={formData.capital}
                      onChange={(e) =>
                        setFormData({ ...formData, capital: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2.5 border border-[#E8E5DF] rounded-xl bg-white focus:outline-none focus:border-[#ED7D31]"
                    >
                      <option>$150k - $250k</option>
                      <option>$250k - $500k</option>
                      <option>$500k - $1M</option>
                      <option>$1M+</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1D1B1A] mb-1">
                  Additional Details / Questions
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    activeTab === "franchise"
                      ? "Tell us about your restaurant or hospitality experience..."
                      : "How can we help your event, catering, or partnership?"
                  }
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full text-xs px-3 py-2 border border-[#E8E5DF] rounded-xl bg-white focus:outline-none focus:border-[#ED7D31]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#ED7D31] hover:bg-[#D96B20] text-white font-display font-extrabold text-base uppercase tracking-wider rounded-full shadow-md transition-colors"
              >
                {activeTab === "franchise" ? "Submit Franchise Request" : "Send Inquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

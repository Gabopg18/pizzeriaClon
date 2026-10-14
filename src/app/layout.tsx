import type { Metadata } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crust Pizza Co. | Home of the Chicago-Style Thin Crust Pizza",
  description:
    "Delicious, made-from-scratch pizzas, pastas, and award-winning service. Authentic Chicago thin crust pizza made with handcrafted dough and slow cooked secret sauce.",
  keywords: [
    "Crust Pizza Co",
    "Chicago-Style Thin Crust Pizza",
    "Pizza",
    "Italian Restaurant",
    "Chicken Parm",
    "Spaghetti Meatballs",
    "Catering",
  ],
  authors: [{ name: "Crust Pizza Co." }],
  openGraph: {
    title: "Crust Pizza Co. | Authentic Chicago Thin Crust Pizza",
    description: "For delicious, made-from-scratch pizzas and award-winning service.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F9F8F6] text-[#1D1B1A] font-body antialiased selection:bg-[#ED7D31] selection:text-white">
        {children}
      </body>
    </html>
  );
}

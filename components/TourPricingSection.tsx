"use client";

import { HandWrittenTitle } from "@/components/ui/hand-writing-text";

interface TourPricingSectionProps {
  tourName: string;
  price: number;
}

export function TourPricingSection({ tourName, price }: TourPricingSectionProps) {
  const formatted = `₹${price.toLocaleString("en-IN")}`;

  return (
    <section className="border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 max-w-5xl py-16 text-center flex flex-col items-center">
        <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Total Expedition Cost</p>

        {/* HandWrittenTitle draws an animated SVG ellipse around the price */}
        <div className="w-full max-w-xl">
          <HandWrittenTitle
            title={formatted}
            subtitle="per person · all inclusive"
          />
        </div>

        <a
          href="/#contact"
          className="mt-4 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white/90 transition-all hover:scale-105 active:scale-95 relative overflow-hidden before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.12)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] cursor-pointer"
        >
          Reserve My Spot
        </a>
        <p className="text-white/30 text-xs mt-6 font-body">
          Prices may change subject to season. Contact us to confirm availability.
        </p>
      </div>
    </section>
  );
}

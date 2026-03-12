"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CardStack, CardStackItem } from "@/components/card-stack";

// Data for our featured tours
const TOUR_ITEMS: CardStackItem[] = [
  {
    id: "leh",
    title: "Leh-Ladakh Expedition",
    description: "Conquer the highest motorable passes and witness the barren beauty of Ladakh. It's the ultimate pilgrimage for every adventure rider.",
    imageSrc: "https://images.pexels.com/photos/33965755/pexels-photo-33965755.jpeg",
    href: "/tours/leh-ladakh",
  },
  {
    id: "spiti",
    title: "Spiti Valley Circuit",
    description: "A rugged journey through the 'Middle Land'. Experience ancient monasteries, treacherous water crossings, and unimaginable high-altitude desert landscapes.",
    imageSrc: "https://images.pexels.com/photos/31346681/pexels-photo-31346681.jpeg",
    href: "/tours/spiti-valley",
  },
  {
    id: "zanskar",
    title: "Zanskar Valley Adventure",
    description: "One of the most remote valleys in the Himalayas. The deeply carved gorges and raw trail conditions make this a tour for the truly bold.",
    imageSrc: "https://images.pexels.com/photos/20292895/pexels-photo-20292895.jpeg",
    href: "/tours/zanskar-valley",
  },
];

export default function OurToursCardsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // track responsive card dimensions
  const [cardSize, setCardSize] = useState({ width: 400, height: 500 });
  const [maxVisible, setMaxVisible] = useState(3);

  React.useEffect(() => {
    function update() {
      const w = window.innerWidth;
      // 80% of viewport width but no more than 400
      const width = Math.min(400, w * 0.8);
      const height = width * 1.25;
      setCardSize({ width, height });
      if (w < 640) {
        setMaxVisible(1);
      } else if (w < 1024) {
        setMaxVisible(2);
      } else {
        setMaxVisible(3);
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleIndexChange = (index: number) => {
    setActiveIndex(index);
  };

  const activeTour = TOUR_ITEMS[activeIndex];

  return (
    <section className="bg-black w-full py-24 border-t border-white/10 relative z-10 flex flex-col items-center">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Top Heading */}
        <div className="relative mb-16 flex flex-col items-center text-center">
          <div className="pointer-events-none absolute inset-x-0 -top-10 h-40 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(242,101,34,0.08)_0%,transparent_70%)]" />
          <h2 className="relative text-4xl md:text-6xl font-semibold md:font-bold text-white tracking-tight font-heading">
            Tours / Expeditions 
          </h2>
          <p className="relative mt-4 text-sm md:text-base text-white/55 font-sans max-w-2xl leading-relaxed">
            Signature guided rides through Leh-Ladakh, Spiti, and Zanskar — curated routes, logistics handled, and battle-tested itineraries so you can just ride.
          </p>
        </div>

        {/* Card Stack Area */}
        <div className="w-full flex justify-center mb-12 relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
          <CardStack
            items={TOUR_ITEMS}
            onChangeIndex={handleIndexChange}
            cardWidth={cardSize.width}
            cardHeight={cardSize.height}
            maxVisible={maxVisible}
          />
        </div>

        {/* Dynamic bottom description bound to active card */}
        <div className="max-w-2xl text-center flex flex-col items-center justify-center min-h-[120px] transition-all duration-300">
          <h3 className="text-3xl font-semibold text-white mb-4">
            {activeTour.title}
          </h3>
          <p className="text-lg text-white/50 font-sans mb-8">
            {activeTour.description}
          </p>
          {activeTour.href && (
            <Link
              href={activeTour.href}
              className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all hover:bg-white hover:text-black"
            >
              View Expedition →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

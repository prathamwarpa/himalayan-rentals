import React from "react";
import { CardsParallax, iCardItem } from "@/components/ui/scroll-cards";

const BIKES_DATA: iCardItem[] = [
  {
    title: "Himalayan 450",
    description: "Price: ₹2,500/day",
    tag: "Adventure",
    src: "https://images.pexels.com/photos/29777354/pexels-photo-29777354.jpeg?w=800&q=80",
    link: "#",
    color: "#020617",
    textColor: "#f9fafb",
  },
  {
    title: "KTM 390 Adventure",
    description: "Price: ₹2,000/day",
    tag: "Adventure",
    src: "https://images.pexels.com/photos/9269545/pexels-photo-9269545.jpeg",
    link: "#",
    color: "#020617",
    textColor: "#f9fafb",
  },
  {
    title: "Hero Xpulse 200 4V",
    description: "Price: ₹1,200/day",
    tag: "Off-Road",
    src: "https://images.pexels.com/photos/31967053/pexels-photo-31967053.jpeg",
    link: "#",
    color: "#020617",
    textColor: "#f9fafb",
  },
  {
    title: "Classic 350",
    description: "Price: ₹1,500/day",
    tag: "Cruiser",
    src: "https://images.pexels.com/photos/4297506/pexels-photo-4297506.jpeg",
    link: "#",
    color: "#020617",
    textColor: "#f9fafb",
  },
];

export default function BattleReadyMachines() {
  return (
    <section className="relative z-10 w-full min-h-screen py-24 bg-black flex flex-col items-center border-t border-white/10">
      {/* background image only for this section */}
      <div className="absolute inset-0 -z-10 bg-[url('https://images.pexels.com/photos/2387819/pexels-photo-2387819.jpeg')] bg-fixed bg-center bg-[length:200%] opacity-20" />
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-5xl md:text-7xl font-bold font-sans text-white mb-6 tracking-tight">
          Our Battle Ready Machines
        </h2>
        <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-sans">
          Choose your steed to conquer the towering peaks and rugged terrains of the Himalayas.
        </p>
      </div>
      <div className="w-full">
        <CardsParallax items={BIKES_DATA} />
      </div>
    </section>
  );
}

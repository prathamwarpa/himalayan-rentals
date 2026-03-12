"use client";

import { ZoomParallax } from "@/components/zoom-parallax";

const parallaxImages = [
  { src: "https://images.pexels.com/photos/28438644/pexels-photo-28438644.jpeg", alt: "Royal Enfield in Mountains" },
  { src: "https://images.pexels.com/photos/34998312/pexels-photo-34998312.jpeg", alt: "Himalayan Peaks" },
  { src: "https://images.pexels.com/photos/34998365/pexels-photo-34998365.jpeg", alt: "Riding through the valley" },
  { src: "https://images.pexels.com/photos/32885134/pexels-photo-32885134.jpeg", alt: "Snow covered roads" },
  { src: "https://images.pexels.com/photos/33792515/pexels-photo-33792515.jpeg", alt: "Road trip adventure" },
  { src: "https://images.pexels.com/photos/33792542/pexels-photo-33792542.jpeg", alt: "Mountain landscape" },
  { src: "https://images.pexels.com/photos/32885140/pexels-photo-32885140.jpeg", alt: "Classic Enfield" },
];

export default function OurToursSection() {
  return (
    <section className="bg-black w-full min-h-screen relative z-10">
      <ZoomParallax images={parallaxImages} title="OUR TOURS" />
    </section>
  );
}

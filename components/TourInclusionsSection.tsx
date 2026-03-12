"use client";

import { GlowingShadow } from "@/components/glowing-shadow";

interface TourInclusionsSectionProps {
  inclusions: string[];
  exclusions: string[];
}

export function TourInclusionsSection({ inclusions, exclusions }: TourInclusionsSectionProps) {
  return (
    <section className="bg-white/5 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-5xl py-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight text-white">
          What&apos;s Included
        </h2>
        <div className="grid md:grid-cols-2 gap-12 justify-items-center">
          {/* Inclusions with glow */}
          <div className="w-full flex flex-col items-center gap-4">
            <h3 className="text-xl font-bold text-white self-start flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-white inline-block" />
              Inclusions
            </h3>
            <GlowingShadow>
              <ul className="space-y-3 w-full">
                {inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/80 text-sm font-body">
                    <span className="text-white mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlowingShadow>
          </div>

          {/* Exclusions with glow */}
          <div className="w-full flex flex-col items-center gap-4">
            <h3 className="text-xl font-bold text-white self-start flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-white/30 inline-block" />
              Exclusions
            </h3>
            <GlowingShadow>
              <ul className="space-y-3 w-full">
                {exclusions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/40 text-sm font-body">
                    <span className="text-white/30 mt-0.5 flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlowingShadow>
          </div>
        </div>
      </div>
    </section>
  );
}

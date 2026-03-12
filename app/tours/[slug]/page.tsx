import { notFound } from "next/navigation";
import Link from "next/link";
import { getTourBySlug, TOURS } from "@/lib/tours-data";
import { Timeline } from "@/components/ui/timeline";
import { TourInclusionsSection } from "@/components/TourInclusionsSection";
import { TourPricingSection } from "@/components/TourPricingSection";

export async function generateStaticParams() {
  return TOURS.map((tour) => ({ slug: tour.slug }));
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  // Build timeline data from itinerary
  const timelineData = tour.itinerary.map((step) => ({
    title: `Day ${step.day}`,
    content: (
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{step.title}</h3>
        <p className="text-white/60 font-body text-sm leading-relaxed mb-6">{step.description}</p>
        {step.photos && step.photos.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {step.photos.map((photo, pi) => (
              <div key={pi} className="overflow-hidden rounded-xl">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    ),
  }));

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[85vh] flex items-end">
        <img
          src={tour.heroImage}
          alt={tour.name}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 pb-16 max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 font-sans leading-none">
            {tour.name}
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-body">
            {tour.tagline}
          </p>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="border-y border-white/10 bg-white/5 backdrop-blur-md">
        <div className="container mx-auto px-6 max-w-5xl py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Duration", value: tour.duration },
            { label: "Start", value: tour.start },
            { label: "End", value: tour.end },
            { label: "Group Size", value: tour.groupSize },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{label}</p>
              <p className="text-lg font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Itinerary — dark themed override */}
      <section className="bg-black">
        <div className="container mx-auto px-6 max-w-5xl pt-16 pb-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            The Journey Itinerary
          </h2>
          <p className="text-white/40 font-body text-sm mt-3">Scroll through each day of your expedition</p>
        </div>
      {/* Timeline Itinerary */}
      <div className="bg-neutral-950">
        <Timeline data={timelineData} />
      </div>
      </section>

      {/* What's Included — with GlowingShadow */}
      <TourInclusionsSection
        inclusions={tour.inclusions}
        exclusions={tour.exclusions}
      />

      {/* Pricing CTA — with HandWrittenTitle */}
      <TourPricingSection
        tourName={tour.name}
        price={tour.price}
      />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between">
          <p className="text-white/30 text-sm font-body">© 2024 Himalayan Rental</p>
          <Link href="/" className="text-white/50 hover:text-white text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </footer>
    </main>
  );
}

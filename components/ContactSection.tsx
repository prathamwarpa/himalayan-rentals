"use client";

import { motion } from "framer-motion";
import { TextDisperse } from "./TextDisperse";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 w-full border-t border-white/10 bg-black"
    >
      <div className="relative container mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-[1.2fr,1fr] items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-white/50">
              Plan Your Himalayan Run
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-heading">
              Let&apos;s map your
              <br />
              next expedition.
            </h2>
            <p className="text-base md:text-lg text-white/60 font-body max-w-xl">
              Tell us how you ride, when you&apos;re coming, and what kind of
              terrain calls to you. Our team will get back within{" "}
              <span className="text-white">24 hours</span> with a custom route,
              bike recommendations, and pricing.
            </p>
            <a href="tel:+919999999999" className="block">
              <TextDisperse className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
                +91-99999-99999
              </TextDisperse>
            </a>
            <div className="grid gap-4 text-sm text-white/60 md:grid-cols-2">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Call / WhatsApp
                </p>
                <a
                  href="tel:+919999999999"
                  className="inline-flex items-baseline gap-2 text-white hover:text-white/80 transition-colors"
                >
                  <span className="font-body text-base">+91-99999-99999</span>
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Email
                </p>
                <a
                  href="mailto:rides@himalayanrental.com"
                  className="inline-flex items-baseline gap-2 text-white hover:text-white/80 transition-colors"
                >
                  <span className="font-body text-base">
                    rides@himalayanrental.com
                  </span>
                </a>
              </div>
            </div>
            <p className="text-xs text-white/35 font-body max-w-md">
              Prefer quick booking? Drop us your dates and destination on
              WhatsApp with the subject line{" "}
              <span className="text-white">&quot;Himalayan Run&quot;</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="rounded-3xl border border-white/15 bg-black/60 p-6 md:p-8 shadow-[0_0_60px_rgba(0,0,0,0.65)] backdrop-blur-xl"
          >
            <form
              className="space-y-6"
              action="mailto:rides@himalayanrental.com"
              method="post"
              encType="text/plain"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs tracking-[0.18em] uppercase text-white/50"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Rider name"
                    className="w-full rounded-full border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/40 focus:ring-1 focus:ring-white/40"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs tracking-[0.18em] uppercase text-white/50"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full rounded-full border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/40 focus:ring-1 focus:ring-white/40"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-xs tracking-[0.18em] uppercase text-white/50"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="+91..."
                    className="w-full rounded-full border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/40 focus:ring-1 focus:ring-white/40"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="tour"
                    className="text-xs tracking-[0.18em] uppercase text-white/50"
                  >
                    Interested Tour
                  </label>
                  <select
                    id="tour"
                    name="tour"
                    className="w-full rounded-full border border-white/15 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-white/40 focus:ring-1 focus:ring-white/40"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-black">
                      Choose an expedition
                    </option>
                    <option value="leh-ladakh" className="bg-black">
                      Leh-Ladakh Expedition
                    </option>
                    <option value="spiti-valley" className="bg-black">
                      Spiti Valley Circuit
                    </option>
                    <option value="zanskar-valley" className="bg-black">
                      Zanskar Valley Adventure
                    </option>
                    <option value="custom-route" className="bg-black">
                      Custom Route
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="startDate"
                    className="text-xs tracking-[0.18em] uppercase text-white/50"
                  >
                    Tentative Start
                  </label>
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    className="w-full rounded-full border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/40 focus:ring-1 focus:ring-white/40"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="riders"
                    className="text-xs tracking-[0.18em] uppercase text-white/50"
                  >
                    Number of Riders
                  </label>
                  <input
                    id="riders"
                    name="riders"
                    type="number"
                    min={1}
                    max={20}
                    placeholder="e.g. 4"
                    className="w-full rounded-full border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/40 focus:ring-1 focus:ring-white/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs tracking-[0.18em] uppercase text-white/50"
                >
                  Tell us how you ride
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Share your riding experience, dates, and what kind of terrain you&apos;re craving..."
                  className="w-full rounded-2xl border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/40 focus:ring-1 focus:ring-white/40 resize-none"
                />
              </div>

              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between pt-2">
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white text-black px-8 py-3 text-sm font-semibold tracking-[0.16em] uppercase transition-all hover:border-white hover:bg-white hover:shadow-[0_0_45px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-95"
                >
                  <span className="relative z-10">Send Expedition Request</span>
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,0,0,0.18),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(0,0,0,0.3),transparent_55%)] opacity-80" />
                </button>
                <p className="text-[11px] text-white/35 font-body max-w-xs">
                  By submitting, you&apos;re not locking anything in. We&apos;ll
                  get in touch to fine-tune the route and machines.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


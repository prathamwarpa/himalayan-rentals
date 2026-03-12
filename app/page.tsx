import SmoothScrollHero from "@/components/SmoothScrollHero";
import BattleReadyMachines from "@/components/BattleReadyMachines";
import OurToursSection from "@/components/OurToursSection";
import OurToursCardsSection from "@/components/OurToursCardsSection";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <main className="min-h-screen bg-black w-full">
      <SmoothScrollHero />
      <BattleReadyMachines />
      <OurToursSection />
      <OurToursCardsSection />
      <ContactSection />
    </main>
  );
}

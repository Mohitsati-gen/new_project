import Hero from "@/components/Hero";
import Bento from "@/components/Bento";
import SocialProof from "@/components/SocialProof";
import PricingCTA from "@/components/PricingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-moon">
      <Hero />
      <Bento />
      <SocialProof />
      <PricingCTA />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import EducationPhilosophy from "@/components/EducationPhilosophy";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-accent/30 selection:text-accent">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <EducationPhilosophy />
      <ContactCTA />
      <Footer />
    </main>
  );
}

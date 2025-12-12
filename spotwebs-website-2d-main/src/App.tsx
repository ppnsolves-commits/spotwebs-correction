import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { TeamPage } from "./components/TeamPage";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { StructuredData } from "./components/StructuredData";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <StructuredData />
      <Navigation />
      <main className="relative">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TeamPage />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

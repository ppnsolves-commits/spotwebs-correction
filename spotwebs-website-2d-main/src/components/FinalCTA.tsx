import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { scrollToSection } from "../utils/scroll";

export function FinalCTA() {
  return (
    <section className="py-12 container-spacing relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand/10 via-transparent to-charcoal/10 -z-10" />
      
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-12 px-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground px-4">
            Let's Build Something
            <br />
            <span className="bg-gradient-to-r from-warm-gold via-copper to-rust bg-clip-text text-transparent">
              Intelligent
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-foreground/60 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Your vision, our technology — let's evolve together.
          </p>

          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto bg-gradient-to-r from-warm-gold to-copper text-white hover:shadow-2xl hover:shadow-warm-gold/40 transition-all group px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg animate-pulse-glow min-w-[200px] sm:min-w-0"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
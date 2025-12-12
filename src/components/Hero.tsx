import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { scrollToSection } from "../utils/scroll";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    // Optimized mouse move handler with throttling for better performance
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({
            x: (e.clientX / window.innerWidth) * 100,
            y: (e.clientY / window.innerHeight) * 100,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden container-spacing pt-20 pb-12 sm:pb-20" aria-label="Hero section">
      {/* Animated Blob Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 -left-20 w-96 h-96 bg-warm-gold/10 rounded-full blur-3xl animate-blob"
          style={{ y }}
        />
        <motion.div
          className="absolute top-40 -right-20 w-96 h-96 bg-copper/10 rounded-full blur-3xl animate-blob"
          style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/2 w-96 h-96 bg-sand/10 rounded-full blur-3xl animate-blob"
          style={{ y: useTransform(scrollY, [0, 500], [0, 200]) }}
          transition={{ delay: 4 }}
        />
      </div>

      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-20 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(212, 165, 116, 0.3) 0%, transparent 50%)`,
          opacity,
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(var(--warm-gold) 1px, transparent 1px), linear-gradient(90deg, var(--warm-gold) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Gradient Lines - Horizontal Streaks */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-warm-gold to-transparent opacity-30"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-copper to-transparent opacity-20"
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sand to-transparent opacity-25"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles - Optimized for performance, reduced on mobile */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-warm-gold/20 hidden sm:block"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Content - F-pattern optimized */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto text-center"
        style={{ y, opacity }}
      >
        {/* Sparkle accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-gold/10 border border-warm-gold/20 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-warm-gold" />
          <span className="text-sm text-warm-gold">Digital Transformation Experts</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl mb-6 sm:mb-8 bg-gradient-to-r from-foreground via-warm-gold to-foreground bg-clip-text text-transparent animate-gradient px-4 sm:px-8 leading-tight"
        >
          Be Outstanding,
          <br />
          Not Outdated.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 mb-8 sm:mb-12 max-w-3xl mx-auto px-4"
        >
          We create intelligent digital ecosystems that evolve with your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 w-full sm:w-auto"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto bg-gradient-to-r from-copper to-rust text-white hover:shadow-2xl hover:shadow-warm-gold/30 transition-all group px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg animate-pulse-glow relative overflow-hidden min-w-[200px] sm:min-w-0"
          >
            <span className="relative z-10 flex items-center justify-center">
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-warm-gold to-copper"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto border-warm-gold/30 text-foreground hover:bg-warm-gold/10 hover:border-warm-gold transition-all px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg backdrop-blur-sm min-w-[200px] sm:min-w-0"
          >
            Explore Our Work
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-foreground/50"
          >
            <span className="text-sm">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

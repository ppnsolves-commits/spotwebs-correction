import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="about" className="section-spacing container-spacing relative overflow-hidden" aria-label="About section">
      {/* Animated Background Decorative Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-warm-gold/5 rounded-full blur-3xl -z-10"
        style={{ y }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-copper/5 rounded-full blur-3xl -z-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />
      
      {/* Rotating rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-10">
        <motion.div
          className="absolute inset-0 border border-warm-gold/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-12 border border-copper/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <motion.div 
        className="max-w-[1200px] mx-auto"
        style={{ opacity }}
      >
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-warm-gold/10 border border-warm-gold/20 mb-6 backdrop-blur-sm"
          >
            <span className="text-sm text-warm-gold">About Spotwebs</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl mb-6 text-foreground">
            Who We Are
          </h2>
          <motion.p 
            className="text-xl text-foreground/70 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Spotwebs is a collective of innovators blending technology, design, 
            and data to build future-ready digital ecosystems. We don't just 
            build solutions — we engineer intelligence.
          </motion.p>
        </motion.div>

        {/* Mission & Vision - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 40px -12px rgba(184, 144, 90, 0.25)",
              transition: { duration: 0.3 }
            }}
            className="group relative p-8 bg-card border border-border rounded-2xl hover:border-warm-gold/40 transition-all overflow-hidden"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-gold/5 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="w-12 h-1 bg-gradient-to-r from-warm-gold to-copper mb-6 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              <h3 className="text-3xl mb-4 text-foreground group-hover:text-warm-gold transition-colors">
                Our Mission
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                To empower businesses with intelligent, custom-designed solutions 
                that combine creativity and advanced technology for smarter, 
                sustainable growth.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 40px -12px rgba(196, 112, 61, 0.25)",
              transition: { duration: 0.3 }
            }}
            className="group relative p-8 bg-card border border-border rounded-2xl hover:border-copper/40 transition-all overflow-hidden"
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-copper/5 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="w-12 h-1 bg-gradient-to-r from-copper to-rust mb-6 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              <h3 className="text-3xl mb-4 text-foreground group-hover:text-copper transition-colors">
                Our Vision
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                To become the world's most innovative digital transformation 
                company — where creativity meets intelligence to shape the future 
                of business.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

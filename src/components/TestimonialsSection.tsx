import { motion, useScroll, useTransform } from "motion/react";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Spotwebs built the only system we found that supports three-tier pricing — customer, worker, and customer + worker. It's smooth, reliable, and fits perfectly with our business model.",
    client: "Venkatesh Reddy",
    position: "Client",
    company: "Billing & Inventory Management Software",
    rating: 5,
  },
  {
    quote: "Our real estate site by Spotwebs looks amazing and performs even better. Property listings, leads, and updates all work flawlessly.",
    client: "Solomon Prabhu",
    position: "Client",
    company: "Real Estate Website",
    rating: 5,
  },
  {
    quote: "Spotwebs created a custom WordPress plugin for auto posting, and now our news goes live faster than anyone else. Absolute game changer.",
    client: "Anita Desai",
    position: "Client",
    company: "News Website Automation",
    rating: 5,
  },
];

const clientLogos = [
  "Billing Software",
  "Real Estate",
  "News Platform",
  "Inventory Management",
  "E-commerce",
  "Web Development",
  "WordPress Solutions",
  "Custom Software",
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="testimonials" className="py-12 container-spacing bg-secondary/20 relative overflow-hidden" aria-label="Testimonials section">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-1/3 -left-20 w-96 h-96 bg-warm-gold/5 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div 
        className="absolute bottom-1/3 -right-20 w-96 h-96 bg-copper/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-60, 60]) }}
      />

      <motion.div 
        className="max-w-[1200px] mx-auto relative z-10"
        style={{ opacity }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-warm-gold/10 border border-warm-gold/20 mb-4 backdrop-blur-sm"
          >
            <span className="text-sm text-warm-gold">Client Success Stories</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl mb-3 text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Cards - 3 Column Grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(184, 144, 90, 0.25)",
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="h-full p-6 bg-card border border-border rounded-xl hover:border-warm-gold/40 transition-all relative overflow-hidden">
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-gold/5 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.7 }}
                />

                {/* Quote Icon with Animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <Quote className="w-8 h-8 text-warm-gold/30 mb-4" />
                </motion.div>
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.15 + 0.4 + i * 0.05 
                      }}
                    >
                      <Star className="w-4 h-4 fill-warm-gold text-warm-gold" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Quote Text */}
                <p className="text-sm text-foreground/80 leading-relaxed mb-6 italic relative z-10">
                  "{testimonial.quote}"
                </p>
                
                {/* Client Info */}
                <div className="flex items-center justify-between pt-4 border-t border-border relative z-10">
                  <div>
                    <p className="text-sm text-foreground mb-0.5">{testimonial.client}</p>
                    <p className="text-xs text-foreground/50">{testimonial.position}</p>
                  </div>
                  <motion.div 
                    className="px-3 py-1.5 rounded-lg bg-warm-gold/10 border border-warm-gold/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="text-xs text-warm-gold">{testimonial.company}</span>
                  </motion.div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-warm-gold/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xs text-foreground/50 mb-5">
            Trusted by forward-thinking companies across industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.5 + index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className="px-4 py-2 flex items-center justify-center border border-border rounded-lg bg-card hover:border-warm-gold/40 hover:bg-secondary/30 transition-all relative overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-warm-gold/0 via-warm-gold/5 to-warm-gold/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-foreground/40 group-hover:text-foreground/70 transition-colors text-xs relative z-10">
                    {logo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

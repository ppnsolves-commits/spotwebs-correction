import { motion } from "motion/react";

// Mock client logos (using text placeholders with professional styling)
const clients = [
  "TechCorp",
  "Innovate Labs",
  "Global Finance",
  "Retail Pro",
  "HealthFirst",
  "MediaStream",
  "PropTech Solutions",
  "DataVision",
];

export function TrustSection() {
  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xl text-off-white/60 mb-12">
            Trusted by businesses that believe in evolution.
          </p>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="h-24 flex items-center justify-center border border-warm-gold/10 rounded-xl bg-charcoal/30 backdrop-blur-sm transition-all duration-300 hover:border-warm-gold/30 hover:bg-charcoal/50">
                  <span className="text-off-white/40 group-hover:text-off-white/80 transition-colors tracking-wider">
                    {client}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-warm-gold/10"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-warm-gold mb-2">150+</div>
            <p className="text-off-white/60">Projects Delivered</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-warm-gold mb-2">98%</div>
            <p className="text-off-white/60">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-warm-gold mb-2">50+</div>
            <p className="text-off-white/60">Team Members</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-warm-gold mb-2">12+</div>
            <p className="text-off-white/60">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

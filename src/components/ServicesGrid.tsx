import { motion } from "motion/react";
import {
  Monitor,
  Palette,
  BarChart3,
  Brain,
  Smartphone,
  Layers,
  TrendingUp,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description: "Scalable web apps built with modern frameworks",
    category: "Web & App Solutions",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile experiences",
    category: "Web & App Solutions",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design that drives engagement",
    category: "Design & Experience",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description: "Cohesive design languages for your brand",
    category: "Design & Experience",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Transform data into actionable insights",
    category: "Data & Analytics",
  },
  {
    icon: TrendingUp,
    title: "Business Intelligence",
    description: "Strategic dashboards and reporting systems",
    category: "Data & Analytics",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Intelligent features powered by machine learning",
    category: "AI & Automation",
  },
  {
    icon: Cpu,
    title: "Process Automation",
    description: "Streamline operations with smart workflows",
    category: "AI & Automation",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-32 px-6 lg:px-12 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-warm-gold/5 rounded-full blur-3xl" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl mb-6 text-off-white">
              What We Create
            </h2>
            <p className="text-xl text-off-white/60 max-w-2xl mx-auto">
              End-to-end digital solutions engineered for intelligence and
              designed for impact.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-charcoal/50 backdrop-blur-sm border border-warm-gold/10 rounded-2xl p-8 transition-all duration-300 hover:border-warm-gold/30 hover:shadow-2xl hover:shadow-warm-gold/10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-warm-gold/20 to-copper/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-warm-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl mb-3 text-off-white group-hover:text-warm-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-off-white/60 text-base leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Category Tag */}
                  <div className="inline-block px-3 py-1 rounded-full bg-warm-gold/10 border border-warm-gold/20 text-xs text-warm-gold/80">
                    {service.category}
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-warm-gold to-copper transition-all duration-300 group-hover:w-full rounded-b-2xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-off-white/50 text-sm">
            Can't find what you're looking for?{" "}
            <a
              href="#contact"
              className="text-warm-gold hover:text-copper transition-colors underline"
            >
              Let's discuss your unique needs
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

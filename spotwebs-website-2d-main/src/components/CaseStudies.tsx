import { motion, useMotionValue, useTransform } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Smart Billing System",
    category: "SaaS Platform",
    description: "Automated invoicing and payment tracking for enterprises",
    metrics: { label: "Processing Speed", value: "10x faster" },
    gradient: "from-warm-gold to-sand",
  },
  {
    title: "Inventory Intelligence",
    category: "Supply Chain",
    description: "AI-powered stock management and demand forecasting",
    metrics: { label: "Cost Reduction", value: "35%" },
    gradient: "from-copper to-rust",
  },
  {
    title: "E-Commerce Ecosystem",
    category: "Retail",
    description: "Omnichannel shopping platform with personalization",
    metrics: { label: "Conversion Rate", value: "+127%" },
    gradient: "from-sunset-orange to-copper",
  },
  {
    title: "Real Estate Portal",
    category: "PropTech",
    description: "Property listing platform with virtual tours and analytics",
    metrics: { label: "User Engagement", value: "+84%" },
    gradient: "from-sand to-warm-gold",
  },
  {
    title: "Hospital Management",
    category: "HealthTech",
    description: "Integrated patient records and appointment system",
    metrics: { label: "Efficiency Gain", value: "47%" },
    gradient: "from-rust to-sunset-orange",
  },
  {
    title: "News Platform",
    category: "Media",
    description: "AI-curated content delivery with real-time updates",
    metrics: { label: "Daily Active Users", value: "500K+" },
    gradient: "from-warm-gold to-copper",
  },
];

export function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section id="work" className="py-32 px-6 lg:px-12 bg-charcoal/30">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl mb-6 text-off-white">
              Our Work
            </h2>
            <p className="text-xl text-off-white/60 max-w-3xl">
              Real solutions for real businesses. Every project built with
              precision, intelligence, and purpose.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{
              scrollBehavior: isDragging ? "auto" : "smooth",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[400px] snap-center group"
              >
                {/* Project Card */}
                <div className="relative h-full bg-graphite border border-warm-gold/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-warm-gold/30 hover:shadow-2xl hover:shadow-warm-gold/10">
                  {/* Gradient Header */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} opacity-20 relative`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-graphite to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Category */}
                    <div className="inline-block px-3 py-1 rounded-full bg-warm-gold/10 border border-warm-gold/20 text-xs text-warm-gold/80 mb-4">
                      {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl mb-3 text-off-white group-hover:text-warm-gold transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-off-white/60 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex items-center justify-between pt-6 border-t border-warm-gold/10">
                      <div>
                        <p className="text-xs text-off-white/40 mb-1">
                          {project.metrics.label}
                        </p>
                        <p className="text-2xl text-warm-gold">
                          {project.metrics.value}
                        </p>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center hover:bg-warm-gold hover:border-warm-gold transition-all group/btn">
                        <ExternalLink className="w-5 h-5 text-warm-gold group-hover/btn:text-graphite transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="flex items-center justify-center mt-8 gap-2 text-off-white/40 text-sm">
            <ArrowRight className="w-4 h-4" />
            <span>Scroll to explore more projects</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

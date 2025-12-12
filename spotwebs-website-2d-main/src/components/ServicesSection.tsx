import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  Globe,
  Palette,
  RefreshCw,
  Layers,
  Smartphone,
  ShoppingCart,
  Wrench,
  LayoutDashboard,
  Figma,
  Sparkles,
  Search,
  MapPin,
  Zap,
  Database,
  TrendingUp,
  BarChart3,
  LineChart,
  Activity,
  Brain,
  Users,
  Cpu,
  Network,
} from "lucide-react";

const servicesData = [
  {
    category: "Web & App Solutions",
    icon: Globe,
    services: [
      { icon: Globe, name: "Website Building", desc: "Custom-built modern websites" },
      { icon: Palette, name: "Website Designing", desc: "Beautiful, user-centric designs" },
      { icon: RefreshCw, name: "Revamp Website", desc: "Modernize your digital presence" },
      { icon: Layers, name: "Web Apps", desc: "Progressive web applications" },
      { icon: Smartphone, name: "App Development", desc: "Native & cross-platform apps" },
      { icon: ShoppingCart, name: "E-commerce Development", desc: "Complete online stores" },
      { icon: Wrench, name: "Maintenance & Support", desc: "24/7 technical assistance" },
      { icon: LayoutDashboard, name: "Admin Panels & Dashboards", desc: "Powerful control centers" },
    ],
  },
  {
    category: "Design & Experience",
    icon: Figma,
    services: [
      { icon: Figma, name: "UI/UX Design", desc: "Intuitive user experiences" },
      { icon: Sparkles, name: "Creative Prototyping", desc: "Interactive design previews" },
      { icon: Layers, name: "Responsive Design Systems", desc: "Scalable design frameworks" },
    ],
  },
  {
    category: "Marketing Optimization",
    icon: Search,
    services: [
      { icon: Search, name: "SEO", desc: "Search Engine Optimization" },
      { icon: MapPin, name: "GEO", desc: "Local + Global Optimization" },
      { icon: Zap, name: "AEO", desc: "AI-Based Search Optimization" },
    ],
  },
  {
    category: "Data & AI Intelligence",
    icon: Brain,
    services: [
      { icon: TrendingUp, name: "Predictive Analysis", desc: "Forecast trends with AI" },
      { icon: Database, name: "Data Engineering", desc: "Build robust data pipelines" },
      { icon: BarChart3, name: "Data Analysis", desc: "Extract meaningful insights" },
      { icon: LineChart, name: "Data Science", desc: "Advanced statistical modeling" },
      { icon: Activity, name: "Business Dashboards", desc: "Real-time analytics views" },
      { icon: Brain, name: "AI Agent Development", desc: "Intelligent automation agents" },
      { icon: Users, name: "Multi-Agent Development", desc: "Coordinated AI systems" },
      { icon: Cpu, name: "AI Automation", desc: "Streamline with intelligence" },
      { icon: Network, name: "AI Integration", desc: "Seamless AI implementation" },
    ],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} id="services" className="py-12 container-spacing bg-secondary/20 relative overflow-hidden" aria-label="Services section">
      {/* Animated Background */}
      <motion.div 
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-warm-gold/5 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div 
        className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-copper/5 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header - Compact */}
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
            <span className="text-sm text-warm-gold">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl mb-4 text-foreground">
            What We Do — and Perfect
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            End-to-end digital solutions engineered for intelligence and designed for impact.
          </p>
        </motion.div>

        {/* Services Categories */}
        <div className="space-y-10">
          {servicesData.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                {/* Category Header - Compact */}
                <motion.div 
                  className="flex items-center gap-3 mb-5"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 + 0.2 }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-br from-warm-gold/20 to-copper/20 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <CategoryIcon className="w-5 h-5 text-warm-gold" />
                  </motion.div>
                  <h3 className="text-2xl text-foreground">{category.category}</h3>
                </motion.div>

                {/* Services Grid - 5 Columns, More Compact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                  {category.services.map((service, index) => {
                    const ServiceIcon = service.icon;
                    return (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                          duration: 0.4, 
                          delay: catIndex * 0.1 + index * 0.05,
                          ease: "easeOut"
                        }}
                        whileHover={{ 
                          y: -6,
                          scale: 1.02,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative"
                      >
                        <div className="h-full bg-card border border-border rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:border-warm-gold/40 hover:shadow-xl hover:shadow-warm-gold/10 relative overflow-hidden">
                          {/* Shimmer Effect on Hover */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-gold/10 to-transparent"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.6 }}
                          />
                          
                          {/* Hover Gradient Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/5 to-copper/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Content */}
                          <div className="relative">
                            <motion.div
                              whileHover={{ rotate: 5, scale: 1.1 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <ServiceIcon className="w-6 h-6 text-warm-gold mb-3 transition-transform" />
                            </motion.div>
                            <h4 className="text-sm mb-1 text-foreground group-hover:text-warm-gold transition-colors leading-tight">
                              {service.name}
                            </h4>
                            <p className="text-xs text-foreground/50 leading-snug">{service.desc}</p>
                          </div>

                          {/* Bottom Accent Line */}
                          <motion.div 
                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-warm-gold to-copper"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion, useAnimation } from "motion/react";
import { ExternalLink, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

const projects = [
  {
    id: 1,
    title: "Billing System",
    category: "SaaS Platform",
    description: "Automated invoicing and payment tracking for enterprises",
    challenge: "Manual billing processes causing delays and errors",
    solution: "Built AI-powered automation with real-time analytics and multi-currency support",
    result: "10x faster processing, 95% error reduction",
    gradient: "from-warm-gold to-sand",
    metrics: [
      { label: "Processing Speed", value: "10x faster" },
      { label: "Error Reduction", value: "95%" },
      { label: "User Satisfaction", value: "98%" },
    ],
  },
  {
    id: 2,
    title: "Inventory Management",
    category: "Supply Chain",
    description: "AI-powered stock management and demand forecasting",
    challenge: "Inefficient inventory tracking leading to stockouts and overstocking",
    solution: "Developed predictive analytics system with automated reordering and warehouse optimization",
    result: "35% cost reduction, 99% stock accuracy",
    gradient: "from-copper to-rust",
    metrics: [
      { label: "Cost Reduction", value: "35%" },
      { label: "Stock Accuracy", value: "99%" },
      { label: "Time Saved", value: "60 hrs/week" },
    ],
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Retail",
    description: "Omnichannel shopping with AI personalization",
    challenge: "Low conversion rates and poor user experience across devices",
    solution: "Created responsive platform with ML-based recommendations and seamless checkout",
    result: "+127% conversion rate, 2.5M+ monthly users",
    gradient: "from-sunset-orange to-copper",
    metrics: [
      { label: "Conversion Rate", value: "+127%" },
      { label: "Monthly Users", value: "2.5M+" },
      { label: "Revenue Growth", value: "+215%" },
    ],
  },
  {
    id: 4,
    title: "Hospital Website",
    category: "HealthTech",
    description: "Patient portal with appointment scheduling and records",
    challenge: "Fragmented patient experience and appointment management",
    solution: "Integrated telemedicine, online booking, and secure patient records system",
    result: "47% efficiency gain, 50K+ patients served",
    gradient: "from-sand to-warm-gold",
    metrics: [
      { label: "Efficiency Gain", value: "47%" },
      { label: "Patients Served", value: "50K+" },
      { label: "Wait Time", value: "-65%" },
    ],
  },
  {
    id: 5,
    title: "Real Estate Website",
    category: "PropTech",
    description: "Property listings with virtual tours and analytics",
    challenge: "Difficulty showcasing properties remotely during pandemic",
    solution: "Built immersive 3D virtual tours with AI-powered property matching",
    result: "+84% user engagement, 10K+ listings",
    gradient: "from-rust to-sunset-orange",
    metrics: [
      { label: "User Engagement", value: "+84%" },
      { label: "Listings", value: "10K+" },
      { label: "Lead Quality", value: "+92%" },
    ],
  },
  {
    id: 6,
    title: "News Platform",
    category: "Media",
    description: "AI-curated content delivery with real-time updates",
    challenge: "Information overload and declining reader engagement",
    solution: "Developed personalized news feed with ML content curation and push notifications",
    result: "500K+ daily users, 8min avg session time",
    gradient: "from-warm-gold to-copper",
    metrics: [
      { label: "Daily Users", value: "500K+" },
      { label: "Avg Session", value: "8 min" },
      { label: "Engagement", value: "+156%" },
    ],
  },
];

interface ProjectModalProps {
  project: typeof projects[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-card border-border max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>

        <div className="space-y-6 pt-4">
          {/* Header */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-warm-gold/10 border border-warm-gold/20 text-xs text-warm-gold mb-4">
              {project.category}
            </div>
            <h2 className="text-4xl mb-3 text-foreground">{project.title}</h2>
            <p className="text-xl text-foreground/70">{project.description}</p>
          </div>

          {/* Challenge - Solution - Result */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-secondary/30 rounded-xl">
              <h3 className="text-lg mb-2 text-warm-gold">Challenge</h3>
              <p className="text-foreground/70 text-sm">{project.challenge}</p>
            </div>
            <div className="p-6 bg-secondary/30 rounded-xl">
              <h3 className="text-lg mb-2 text-warm-gold">Solution</h3>
              <p className="text-foreground/70 text-sm">{project.solution}</p>
            </div>
            <div className="p-6 bg-secondary/30 rounded-xl">
              <h3 className="text-lg mb-2 text-warm-gold">Result</h3>
              <p className="text-foreground/70 text-sm">{project.result}</p>
            </div>
          </div>

          {/* Metrics */}
          <div>
            <h3 className="text-2xl mb-4 text-foreground">Key Metrics</h3>
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center p-4 border border-border rounded-xl">
                  <div className="text-3xl text-warm-gold mb-1">{metric.value}</div>
                  <div className="text-sm text-foreground/60">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="p-6 bg-gradient-to-r from-warm-gold/10 to-copper/10 rounded-xl border-l-4 border-warm-gold">
            <p className="text-foreground/80 italic">
              "Spotwebs transformed our vision into reality with precision and intelligence. 
              The results exceeded our expectations."
            </p>
            <p className="text-sm text-warm-gold mt-2">— Client Testimonial</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Auto-scroll animation - Optimized with requestAnimationFrame
  useEffect(() => {
    if (!isPaused) {
      // Use requestAnimationFrame for smoother animation start
      requestAnimationFrame(() => {
        controls.start({
          x: [0, -100 * projects.length * 6],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60,
              ease: "linear",
            },
          },
        });
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <>
      <section id="projects" className="section-spacing container-spacing overflow-hidden" aria-label="Projects section">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-foreground">
              Our Experience Speaks for Itself
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl">
              Real solutions for real businesses. Every project built with precision, 
              intelligence, and purpose.
            </p>
          </motion.div>

          {/* Auto-Scrolling Projects */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              animate={controls}
              className="flex gap-6"
              style={{ willChange: 'transform' }}
            >
              {/* Duplicate projects for seamless loop */}
              {[...projects, ...projects, ...projects].map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="flex-shrink-0 w-[380px] group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Project Card */}
                  <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-warm-gold/30 hover:shadow-2xl hover:-translate-y-1">
                    {/* Gradient Header */}
                    <div className={`h-44 bg-gradient-to-br ${project.gradient} opacity-20 relative`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Category */}
                      <div className="inline-block px-3 py-1 rounded-full bg-warm-gold/10 border border-warm-gold/20 text-xs text-warm-gold mb-3">
                        {project.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl mb-2 text-foreground group-hover:text-warm-gold transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{project.description}</p>

                      {/* Bottom Section */}
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div>
                          <p className="text-xs text-foreground/40 mb-1">
                            {project.metrics[0].label}
                          </p>
                          <p className="text-lg text-warm-gold">
                            {project.metrics[0].value}
                          </p>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center group-hover:bg-warm-gold group-hover:border-warm-gold transition-all">
                          <ExternalLink className="w-4 h-4 text-warm-gold group-hover:text-graphite transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hover Hint */}
          <div className="flex items-center justify-center mt-6 text-foreground/40 text-sm">
            <span>Hover to pause • Click to view details</span>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

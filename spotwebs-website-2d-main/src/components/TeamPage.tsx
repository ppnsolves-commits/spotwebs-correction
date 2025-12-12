import { motion } from "motion/react";
import { Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { scrollToSection } from "../utils/scroll";

// Import images
import pranithImage from "../assets/Pranith Nishanth.jpeg";
import mohanaImage from "../assets/Mohana Krishna.jpeg";
import hardikImage from "../assets/Hardik Pande.jpeg";
import tanishqImage from "../assets/Tanishq Sharma.jpeg";
import vinayaImage from "../assets/Vinaya.jpeg";
import nymeshaImage from "../assets/Nymesha.jpeg";
import charanImage from "../assets/Charan.jpeg";

interface TeamMember {
  name: string;
  role: string;
  tagline?: string;
  specialty: string;
  image: string;
  linkedin?: string;
}

const leadershipTeam: TeamMember[] = [
  {
    name: "Pranith Nishanth",
    role: "Founder & CEO",
    tagline: "Vision Architect",
    specialty: "Product Strategy & Innovation",
    image: pranithImage,
    linkedin: "#",
  },
  {
    name: "Mohana Krishna",
    role: "CFO & CXO",
    tagline: "Strategic Leader",
    specialty: "Finance & Customer Experience",
    image: mohanaImage,
    linkedin: "#",
  },
  {
    name: "Hardik Pande",
    role: "CTO",
    tagline: "Tech Visionary",
    specialty: "Technology & Innovation",
    image: hardikImage,
    linkedin: "#",
  },
  {
    name: "Tanishq Sharma",
    role: "Chief Designer",
    tagline: "Experience Designer",
    specialty: "UI/UX & Brand Identity",
    image: tanishqImage,
    linkedin: "#",
  },
];

const coreTeam: TeamMember[] = [
  {
    name: "Vinaya",
    role: "COO",
    specialty: "Operations & Strategy",
    image: vinayaImage,
    linkedin: "#",
  },
  {
    name: "Nymesha",
    role: "CHRO",
    specialty: "Human Resources",
    image: nymeshaImage,
    linkedin: "#",
  },
  {
    name: "Charan",
    role: "CMO",
    specialty: "Marketing & Growth",
    image: charanImage,
    linkedin: "#",
  },
];

const values = [
  "Innovation",
  "Intelligence",
  "Collaboration",
  "Excellence",
  "Evolution",
  "Integrity",
];

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="group relative"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-warm-gold/10 hover:-translate-y-1 hover:border-warm-gold/40">
        {/* Image Container - Fixed Aspect Ratio */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-warm-beige to-secondary">
          {/* Uniform background overlay for consistency */}
          <div className="absolute inset-0 bg-gradient-to-br from-graphite/5 via-transparent to-warm-gold/5" />
          
          {/* Team Member Image with proper object-fit - ensures no stretching/shrinking, crops to fit */}
          <img 
            src={member.image} 
            alt={`${member.name}, ${member.role} at Spotwebs`}
            className="absolute inset-0 w-full h-full transition-all duration-500 group-hover:scale-105"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 30%',
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              willChange: 'transform',
            }}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />

          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-graphite/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Card Content - Fixed Height */}
        <figcaption className="p-5 space-y-2 bg-card">
          {/* Name - Bold with high contrast */}
          <h3 className="text-lg font-bold text-foreground leading-tight">
            {member.name}
          </h3>
          
          {/* Role - Lighter weight for hierarchy - Always visible */}
          <p className="text-sm font-medium text-foreground/70 leading-tight">
            {member.role}
          </p>

          {/* Specialty/Tagline - Always visible */}
          <div className="space-y-2 pt-1">
            {member.tagline && (
              <p className="text-xs font-medium text-warm-gold transition-opacity duration-300">
                {member.tagline}
              </p>
            )}
            <p className="text-xs text-foreground/60 leading-relaxed">
              {member.specialty}
            </p>
          </div>

          {/* Social Links - Visible on hover */}
          {member.linkedin && member.linkedin !== "#" && (
            <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Connect with ${member.name} on LinkedIn`}
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-warm-gold/10 hover:bg-warm-gold transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2"
              >
                <Linkedin className="w-4 h-4 text-warm-gold" aria-hidden="true" />
              </a>
            </div>
          )}
        </figcaption>
      </div>
    </motion.figure>
  );
}

export function TeamPage() {
  return (
    <section id="team" className="section-spacing container-spacing relative overflow-hidden" aria-label="Team section">
      {/* Background Network Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="network"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="1" fill="currentColor" className="text-warm-gold" />
              <line
                x1="50"
                y1="50"
                x2="100"
                y2="50"
                stroke="currentColor"
                className="text-warm-gold"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-warm-gold/20 bg-secondary/50 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-warm-gold">Our Intelligence Has Faces</span>
          </div>
          <h2 id="team-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
            Meet the Family
            <br />
            Behind the Future
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            We're not just a team — we're innovators who believe in evolution.
          </p>
        </motion.header>

        {/* Leadership Team Section */}
        <section className="mb-16 md:mb-20" aria-labelledby="leadership-heading">
          <motion.h3
            id="leadership-heading"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-12 flex items-center"
          >
            <span className="w-12 h-0.5 bg-warm-gold mr-4" aria-hidden="true" />
            Leadership Team
          </motion.h3>

          {/* Responsive Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {leadershipTeam.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Core Team Section */}
        <section className="mb-16 md:mb-20" aria-labelledby="core-team-heading">
          <motion.h3
            id="core-team-heading"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-12 flex items-center"
          >
            <span className="w-12 h-0.5 bg-warm-gold mr-4" aria-hidden="true" />
            Core Team
          </motion.h3>

          {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {coreTeam.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={index + leadershipTeam.length}
              />
            ))}
          </div>
        </section>

        {/* Values Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-8 border-y border-border overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[...values, ...values, ...values, ...values].map((value, index) => (
              <span
                key={index}
                className="text-3xl text-foreground/20 mx-6 inline-block"
              >
                {value} ·
              </span>
            ))}
          </div>
        </motion.div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 md:mt-20 text-center"
        >
          <div className="max-w-2xl mx-auto p-8 md:p-10 bg-gradient-to-br from-card to-secondary/30 border border-border rounded-3xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              We Don't Hire Employees. We Grow Innovators.
            </h3>
            <p className="text-base text-foreground/70 mb-6 leading-relaxed">
              Passionate about building the future with cutting-edge technology? 
              Join our family of thinkers, builders, and dreamers.
            </p>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-warm-gold to-copper text-white hover:shadow-2xl hover:shadow-warm-gold/30 transition-all px-8 py-5 font-semibold"
            >
              Join the Family
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { Linkedin, Twitter, Github, Instagram, Mail, Phone, Globe } from "lucide-react";
import { scrollToSection, scrollToTop } from "../utils/scroll";

export function Footer() {
  // Handle link clicks with proper navigation
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, linkName: string) => {
    e.preventDefault();
    
    // Map footer links to sections
    const linkMap: Record<string, string> = {
      "About Us": "about",
      "Our Team": "team",
      "Contact": "contact",
      "Case Studies": "projects",
    };

    const sectionId = linkMap[linkName];
    
    if (sectionId) {
      scrollToSection(sectionId);
    } else if (linkName === "Careers") {
      // Careers - scroll to contact section with a message intent
      scrollToSection("contact");
      // You could add a hash or query param to pre-fill form with "Careers" intent
      setTimeout(() => {
        const messageTextarea = document.querySelector('#contact textarea') as HTMLTextareaElement;
        if (messageTextarea) {
          messageTextarea.value = "I'm interested in career opportunities at Spotwebs.";
          messageTextarea.focus();
        }
      }, 500);
    } else {
      // For placeholder links (Blog, Documentation, etc.), scroll to contact
      scrollToSection("contact");
    }
  };

  // Handle service links - scroll to services section
  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection("services");
  };

  // Handle placeholder policy links
  const handlePolicyClick = (e: React.MouseEvent<HTMLAnchorElement>, policyName: string) => {
    e.preventDefault();
    // For now, scroll to contact - in production, these would link to actual policy pages
    scrollToSection("contact");
    // Could show a toast/notification: "Policy pages coming soon. Contact us for more information."
  };

  // Social media links - if you have actual URLs, replace "#" with the URLs
  const socialLinks = {
    linkedin: "#", // Replace with actual LinkedIn URL
    twitter: "#", // Replace with actual Twitter URL
    github: "#", // Replace with actual GitHub URL
    instagram: "#", // Replace with actual Instagram URL
  };

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, platform: string) => {
    const url = socialLinks[platform as keyof typeof socialLinks];
    if (url === "#") {
      e.preventDefault();
      // Social media not available - could scroll to contact or show message
      // For now, just prevent default navigation
    }
    // If URL is valid, it will navigate normally
  };
  const footerLinks = {
    Services: [
      "Web Development",
      "Mobile Apps",
      "UI/UX Design",
      "AI Integration",
      "Data Analytics",
      "SEO & Marketing",
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "Case Studies",
      "Blog",
      "Contact",
    ],
    Resources: [
      "Documentation",
      "API Reference",
      "Support",
      "Community",
      "Partners",
      "Press Kit",
    ],
  };

  const marqueeItems = [
    "Innovation",
    "Intelligence",
    "Trust",
    "Collaboration",
    "Excellence",
    "Evolution",
  ];

  return (
    <footer className="border-t border-border bg-card" aria-label="Site footer">
      {/* Animated Marquee */}
      <div className="border-b border-border overflow-hidden py-6 bg-secondary/20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={index}
              className="text-3xl text-foreground/30 mx-8 inline-block"
            >
              {item} ·
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto container-spacing py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center space-x-2 mb-4 group cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-warm-gold to-copper rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <span className="text-graphite font-bold text-xl">S</span>
              </div>
              <span className="text-2xl tracking-tight text-foreground group-hover:text-warm-gold transition-colors">
                Spotwebs
              </span>
            </a>
            <p className="text-foreground/60 mb-6 max-w-sm">
              Be Outstanding, Not Outdated.
            </p>
            <p className="text-foreground/60 mb-6 max-w-sm text-sm">
              Merging creativity with intelligence to build AI-powered digital ecosystems.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:spotwebs04@gmail.com" className="flex items-center gap-2 text-foreground/60 hover:text-warm-gold transition-colors text-sm group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                spotwebs04@gmail.com
              </a>
              <a href="tel:+919989900229" className="flex items-center gap-2 text-foreground/60 hover:text-warm-gold transition-colors text-sm group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                +91 99899 00229
              </a>
              <a href="https://spotwebs.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/60 hover:text-warm-gold transition-colors text-sm group">
                <Globe className="w-4 h-4 group-hover:scale-110 transition-transform" />
                spotwebs.in
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={socialLinks.linkedin}
                onClick={(e) => handleSocialClick(e, "linkedin")}
                aria-label="Visit our LinkedIn page"
                className="w-10 h-10 rounded-full bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center hover:bg-warm-gold hover:border-warm-gold transition-all group"
              >
                <Linkedin className="w-5 h-5 text-warm-gold group-hover:text-graphite transition-colors" />
              </a>
              <a
                href={socialLinks.twitter}
                onClick={(e) => handleSocialClick(e, "twitter")}
                aria-label="Visit our Twitter page"
                className="w-10 h-10 rounded-full bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center hover:bg-warm-gold hover:border-warm-gold transition-all group"
              >
                <Twitter className="w-5 h-5 text-warm-gold group-hover:text-graphite transition-colors" />
              </a>
              <a
                href={socialLinks.github}
                onClick={(e) => handleSocialClick(e, "github")}
                aria-label="Visit our GitHub page"
                className="w-10 h-10 rounded-full bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center hover:bg-warm-gold hover:border-warm-gold transition-all group"
              >
                <Github className="w-5 h-5 text-warm-gold group-hover:text-graphite transition-colors" />
              </a>
              <a
                href={socialLinks.instagram}
                onClick={(e) => handleSocialClick(e, "instagram")}
                aria-label="Visit our Instagram page"
                className="w-10 h-10 rounded-full bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center hover:bg-warm-gold hover:border-warm-gold transition-all group"
              >
                <Instagram className="w-5 h-5 text-warm-gold group-hover:text-graphite transition-colors" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-foreground mb-4 font-semibold">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    {category === "Services" ? (
                      <a
                        href="#services"
                        onClick={handleServiceClick}
                        className="text-foreground/60 hover:text-warm-gold transition-colors text-sm cursor-pointer"
                      >
                        {link}
                      </a>
                    ) : (
                      <a
                        href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={(e) => handleLinkClick(e, link)}
                        className="text-foreground/60 hover:text-warm-gold transition-colors text-sm cursor-pointer"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-sm">
            © 2025 Spotwebs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#privacy-policy"
              onClick={(e) => handlePolicyClick(e, "Privacy Policy")}
              className="text-foreground/40 hover:text-warm-gold transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#terms-of-service"
              onClick={(e) => handlePolicyClick(e, "Terms of Service")}
              className="text-foreground/40 hover:text-warm-gold transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
            <a
              href="#cookie-policy"
              onClick={(e) => handlePolicyClick(e, "Cookie Policy")}
              className="text-foreground/40 hover:text-warm-gold transition-colors cursor-pointer"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
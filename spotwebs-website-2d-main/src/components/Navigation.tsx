import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { scrollToSection, scrollToTop } from "../utils/scroll";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Optimized scroll handler with throttling for better performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto container-spacing">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-warm-gold to-copper rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-graphite font-bold text-xl">S</span>
            </div>
            <span className="text-2xl tracking-tight text-foreground">
              Spotwebs
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href === "#") {
                    e.preventDefault();
                    scrollToTop();
                  } else if (link.href.startsWith("#")) {
                    e.preventDefault();
                    scrollToSection(link.href.substring(1));
                  }
                }}
                className="text-foreground/70 hover:text-foreground transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-warm-gold to-copper transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side - Theme + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-warm-gold to-copper text-graphite hover:shadow-lg hover:shadow-warm-gold/20 transition-all text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5"
            >
              Start Your Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (link.href === "#") {
                    e.preventDefault();
                    scrollToTop();
                  } else if (link.href.startsWith("#")) {
                    e.preventDefault();
                    scrollToSection(link.href.substring(1));
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            <Button 
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-warm-gold to-copper text-graphite py-3 text-base"
            >
              Start Your Project
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
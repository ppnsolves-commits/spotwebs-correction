import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useRef, useState, FormEvent } from "react";

export function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrors({});

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Project Inquiry - ${formData.service || "General"}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.company || "Not provided"}\n` +
        `Service Needed: ${formData.service || "Not specified"}\n\n` +
        `Message:\n${formData.message}`
      );
      
      // Open email client with pre-filled data
      window.location.href = `mailto:spotwebs04@gmail.com?subject=${subject}&body=${body}`;
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
      
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setErrors({ submit: "Failed to send message. Please try again." });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="py-12 container-spacing relative overflow-hidden bg-secondary/20" aria-label="Contact section">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-warm-gold/5 via-transparent to-copper/5 -z-10"
        style={{ y }}
      />
      
      {/* Floating Blobs */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-warm-gold/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-copper/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <motion.div 
        className="max-w-[1200px] mx-auto relative z-10"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warm-gold/10 border border-warm-gold/20 mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-warm-gold" />
              <span className="text-sm text-warm-gold">Get in Touch</span>
            </motion.div>

            <motion.h2 
              className="text-5xl md:text-6xl mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let's Create Your
              <br />
              <span className="bg-gradient-to-r from-warm-gold to-copper bg-clip-text text-transparent">
                Digital Future
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-foreground/60 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform your vision into a digital reality. Our team is ready to
              bring your ideas to life with intelligence and precision.
            </motion.p>

            {/* Contact Info */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a 
                href="mailto:spotwebs04@gmail.com" 
                className="flex items-center gap-4 text-foreground/70 hover:text-warm-gold transition-colors group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-12 h-12 rounded-xl bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center group-hover:bg-warm-gold/20 group-hover:scale-110 transition-all">
                  <Mail className="w-5 h-5 text-warm-gold" />
                </div>
                <div>
                  <p className="text-sm text-foreground/50">Email Us</p>
                  <span>spotwebs04@gmail.com</span>
                </div>
              </motion.a>
              <motion.a 
                href="tel:+919989900229" 
                className="flex items-center gap-4 text-foreground/70 hover:text-warm-gold transition-colors group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-12 h-12 rounded-xl bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center group-hover:bg-warm-gold/20 group-hover:scale-110 transition-all">
                  <Phone className="w-5 h-5 text-warm-gold" />
                </div>
                <div>
                  <p className="text-sm text-foreground/50">Call Us</p>
                  <span>+91 99899 00229</span>
                </div>
              </motion.a>
              <div className="flex items-center gap-4 text-foreground/70">
                <div className="w-12 h-12 rounded-xl bg-warm-gold/10 border border-warm-gold/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-warm-gold" />
                </div>
                <div>
                  <p className="text-sm text-foreground/50">Location</p>
                  <span>India</span>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: "24h", label: "Response Time" },
                { value: "100%", label: "Confidential" },
                { value: "Free", label: "Consultation" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="text-3xl text-warm-gold mb-1">{stat.value}</div>
                  <p className="text-foreground/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(184, 144, 90, 0.25)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-gold/5 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 1 }}
              />

              <h3 className="text-2xl mb-6 text-foreground relative z-10">Start a Project</h3>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate aria-label="Contact form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label htmlFor="name" className="block text-foreground/70 mb-2 text-sm">
                      Name <span className="text-warm-gold">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      placeholder="John Doe"
                      aria-label="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`bg-input-background border-border text-foreground placeholder:text-foreground/30 focus:border-warm-gold h-12 transition-all ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-destructive text-sm mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                  >
                    <label htmlFor="email" className="block text-foreground/70 mb-2 text-sm">
                      Email <span className="text-warm-gold">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: "" });
                      }}
                      placeholder="john@company.com"
                      aria-label="Your email address"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`bg-input-background border-border text-foreground placeholder:text-foreground/30 focus:border-warm-gold h-12 transition-all ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-destructive text-sm mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label htmlFor="company" className="block text-foreground/70 mb-2 text-sm">
                    Company
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your Company"
                    aria-label="Your company name"
                    className="bg-input-background border-border text-foreground placeholder:text-foreground/30 focus:border-warm-gold h-12 transition-all"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                >
                  <label htmlFor="service" className="block text-foreground/70 mb-2 text-sm">
                    I need help with...
                  </label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger 
                      id="service"
                      name="service"
                      aria-label="Select a service"
                      className="bg-input-background border-border text-foreground focus:border-warm-gold h-12 transition-all"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website Development</SelectItem>
                      <SelectItem value="app">App Development</SelectItem>
                      <SelectItem value="ai">AI Integration</SelectItem>
                      <SelectItem value="data">Data Analytics</SelectItem>
                      <SelectItem value="marketing">SEO & Marketing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <label htmlFor="message" className="block text-foreground/70 mb-2 text-sm">
                    Tell us about your project <span className="text-warm-gold">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    placeholder="Share your vision with us..."
                    rows={4}
                    aria-label="Project details message"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`bg-input-background border-border text-foreground placeholder:text-foreground/30 focus:border-warm-gold resize-none transition-all ${errors.message ? "border-destructive" : ""}`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-destructive text-sm mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                  {errors.submit && (
                    <p className="text-destructive text-sm mt-1" role="alert">
                      {errors.submit}
                    </p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-warm-gold to-copper text-graphite hover:shadow-2xl hover:shadow-warm-gold/30 transition-all group py-4 sm:py-6 h-auto relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-copper to-warm-gold"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        "Sending..."
                      ) : submitStatus === "success" ? (
                        "Message Sent!"
                      ) : (
                        <>
                          <Send className="mr-2 w-5 h-5" />
                          Send Message
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>

                {/* AI Assistant Note */}
                <motion.div 
                  className="p-4 bg-warm-gold/5 border border-warm-gold/20 rounded-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <p className="text-sm text-foreground/60">
                    💡 <span className="text-warm-gold">AI-powered assistance:</span> Our intelligent system will analyze your requirements and match you with the perfect team.
                  </p>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

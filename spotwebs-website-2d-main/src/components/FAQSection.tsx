import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "../utils/scroll";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What services does Spotwebs offer?",
    answer: "Spotwebs offers comprehensive digital transformation services including custom web development, mobile app development, AI integration, data analytics, SEO optimization (including GEO and AEO), UI/UX design, e-commerce development, and ongoing technical support. We provide end-to-end solutions from initial consultation to deployment and maintenance."
  },
  {
    question: "How long does it take to develop a website?",
    answer: "Website development timelines vary based on project complexity. A simple website typically takes 2-4 weeks, while complex web applications may take 2-6 months. We provide detailed timelines during the consultation phase and keep you updated throughout the development process. Factors affecting timeline include project scope, features required, design complexity, and third-party integrations."
  },
  {
    question: "What is the cost of web development?",
    answer: "Web development costs depend on several factors including project scope, complexity, features, design requirements, and timeline. We offer competitive pricing tailored to your specific needs. Contact us for a free consultation and detailed quote. We provide transparent pricing with no hidden costs and can work within various budget ranges."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, Spotwebs provides comprehensive ongoing support and maintenance services. This includes 24/7 technical assistance, regular updates, security patches, performance monitoring, bug fixes, and feature enhancements. We offer flexible support packages to meet your business needs and ensure your digital solutions remain up-to-date and secure."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, industry-standard technologies including React, Next.js, Node.js, Python, TypeScript, and various cloud platforms. For mobile apps, we work with React Native, Flutter, and native iOS/Android development. We also specialize in AI/ML technologies, data analytics tools, and SEO optimization platforms. Our technology stack is chosen based on your specific project requirements."
  },
  {
    question: "How do you ensure website security?",
    answer: "Security is a top priority at Spotwebs. We implement multiple security layers including SSL certificates, secure authentication, regular security audits, data encryption, secure hosting, and compliance with industry standards. We follow best practices for secure coding, perform regular vulnerability assessments, and provide security monitoring services to protect your digital assets."
  },
  {
    question: "Do you provide SEO services?",
    answer: "Yes, Spotwebs provides comprehensive SEO services including on-page optimization, technical SEO, local SEO (GEO), and AI-based search optimization (AEO). We help improve your search engine rankings through keyword research, content optimization, link building, performance optimization, and ongoing SEO monitoring. Our services are designed to increase organic traffic and improve search visibility."
  },
  {
    question: "What is AI integration?",
    answer: "AI integration involves incorporating artificial intelligence capabilities into your business processes and digital solutions. This includes AI-powered chatbots, predictive analytics, automation systems, machine learning models, natural language processing, and intelligent data analysis. We help businesses leverage AI to improve efficiency, make data-driven decisions, and enhance customer experiences."
  },
  {
    question: "How do you handle data analytics?",
    answer: "Our data analytics services include data collection, processing, analysis, and visualization. We help businesses extract meaningful insights from their data through advanced analytics, predictive modeling, business intelligence dashboards, and custom reporting solutions. We work with various data sources and analytics tools to provide actionable insights that drive business growth."
  },
  {
    question: "What makes Spotwebs different from other digital agencies?",
    answer: "Spotwebs stands out through our comprehensive approach to digital transformation, combining technical expertise with business acumen. We offer end-to-end solutions, use cutting-edge technologies, provide personalized service, maintain transparent communication, and focus on delivering measurable results. Our team combines years of experience with innovative approaches to solve complex business challenges."
  },
  {
    question: "Do you work with businesses in USA, UK, and UAE?",
    answer: "Yes, Spotwebs serves clients globally including businesses in the United States, United Kingdom, United Arab Emirates, and India. We understand the unique requirements of different markets and provide localized solutions. Our team is experienced in working across time zones and can accommodate various business cultures and requirements."
  },
  {
    question: "Can you help with existing website improvements?",
    answer: "Absolutely! We provide website revamp and improvement services. Whether you need to modernize your design, improve performance, enhance functionality, or optimize for SEO, we can help. We analyze your current website, identify areas for improvement, and implement enhancements that align with your business goals and current web standards."
  }
];

export function FAQSection() {
  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* Add FAQ Schema to page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <section id="faq" className="py-12 container-spacing relative overflow-hidden bg-secondary/10">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-warm-gold/5 via-transparent to-copper/5 -z-10" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-warm-gold/10 border border-warm-gold/20 mb-4 backdrop-blur-sm"
            >
              <span className="text-sm text-warm-gold">Frequently Asked Questions</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl mb-4 text-foreground">
              Questions?
              <br />
              <span className="bg-gradient-to-r from-warm-gold to-copper bg-clip-text text-transparent">
                We Have Answers
              </span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Find answers to common questions about our services, processes, and how we can help transform your business.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 py-2 hover:border-warm-gold/40 transition-colors"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-warm-gold transition-colors py-4">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-foreground/60 mb-4">
              Still have questions? We're here to help!
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center text-warm-gold hover:text-copper transition-colors font-semibold"
            >
              Contact Us
              <ChevronDown className="ml-2 w-4 h-4 rotate-[-90deg]" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}


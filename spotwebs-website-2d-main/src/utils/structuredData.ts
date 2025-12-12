// Structured Data utilities for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Spotwebs",
  "url": "https://spotwebs.in",
  "logo": "https://spotwebs.in/logo.png",
  "description": "Digital transformation experts providing web development, AI solutions, and SEO services",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressLocality": "India"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-99899-00229",
    "contactType": "Customer Service",
    "email": "spotwebs04@gmail.com",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/spotwebs",
    "https://twitter.com/spotwebs",
    "https://www.facebook.com/spotwebs"
  ],
  "areaServed": [
    { "@type": "Country", "name": "United States" },
    { "@type": "Country", "name": "United Kingdom" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "India" }
  ]
};

export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Choose the Right Digital Transformation Partner",
  "description": "Step-by-step guide to choosing the right digital transformation partner for your business",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Assess Your Business Needs",
      "text": "Identify your current challenges, future goals, and specific requirements for digital transformation. Consider what problems you need to solve and what outcomes you want to achieve."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Research Potential Partners",
      "text": "Look for companies with relevant experience, proven track record, and expertise in your industry. Review portfolios, case studies, and client testimonials."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Evaluate Technical Capabilities",
      "text": "Assess the partner's technical expertise, technology stack, and ability to deliver solutions that align with your business objectives. Check their certifications and partnerships."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Consider Communication and Support",
      "text": "Ensure the partner has clear communication processes, responsive support, and a collaborative approach. Good communication is crucial for project success."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Request Proposals and Compare",
      "text": "Request detailed proposals from shortlisted partners. Compare pricing, timelines, deliverables, and approach. Choose a partner that offers the best value and alignment with your goals."
    }
  ]
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Future of Digital Transformation in 2024",
  "description": "Exploring the latest trends and technologies shaping digital transformation in 2024",
  "author": {
    "@type": "Organization",
    "name": "Spotwebs"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Spotwebs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://spotwebs.in/logo.png"
    }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-15"
};

export const localBusinessSchemaUSA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Spotwebs - USA",
  "description": "Digital transformation services in the United States",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "priceRange": "$$",
  "telephone": "+1-XXX-XXX-XXXX"
};

export const localBusinessSchemaUK = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Spotwebs - UK",
  "description": "Digital transformation services in the United Kingdom",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "priceRange": "$$",
  "telephone": "+44-XXX-XXX-XXXX"
};

export const localBusinessSchemaUAE = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Spotwebs - UAE",
  "description": "Digital transformation services in the United Arab Emirates",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AE"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Arab Emirates"
  },
  "priceRange": "$$",
  "telephone": "+971-XXX-XXX-XXXX"
};


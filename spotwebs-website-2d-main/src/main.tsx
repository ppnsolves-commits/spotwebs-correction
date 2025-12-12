import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/performance.css";

// Performance optimization: Use requestIdleCallback for non-critical operations
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Preconnect to external resources
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link);
  });
}

createRoot(document.getElementById("root")!).render(<App />);
  
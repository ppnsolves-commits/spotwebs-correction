/**
 * Smooth scroll utility functions - Optimized for performance
 */

/**
 * Smoothly scrolls to an element by ID with optimized performance
 * @param id - The ID of the element to scroll to (without #)
 * @param offset - Optional offset from the top (default: 100 to account for fixed nav)
 */
export const scrollToSection = (id: string, offset: number = 100) => {
  const element = document.getElementById(id);
  if (!element) return;

  // Use requestAnimationFrame for smooth scrolling
  requestAnimationFrame(() => {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    // Use smooth scroll behavior
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
};

/**
 * Scroll to top of the page with optimized performance
 */
export const scrollToTop = () => {
  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

/**
 * Debounce function for scroll events
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for scroll events
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};


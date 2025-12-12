/**
 * Performance optimization utilities
 */

/**
 * Optimize viewport visibility for better performance
 */
export const optimizeViewport = () => {
  if (typeof window === 'undefined') return;

  // Enable passive event listeners for better scroll performance
  const supportsPassive = (() => {
    let supportsPassive = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get() {
          supportsPassive = true;
          return false;
        },
      });
      window.addEventListener('testPassive', () => {}, opts);
      window.removeEventListener('testPassive', () => {}, opts);
    } catch (e) {
      // ignore
    }
    return supportsPassive;
  })();

  return supportsPassive;
};

/**
 * Request animation frame wrapper for smooth animations
 */
export const requestFrame = (callback: () => void) => {
  if (typeof requestAnimationFrame !== 'undefined') {
    return requestAnimationFrame(callback);
  }
  return setTimeout(callback, 16);
};

/**
 * Cancel animation frame wrapper
 */
export const cancelFrame = (id: number) => {
  if (typeof cancelAnimationFrame !== 'undefined') {
    return cancelAnimationFrame(id);
  }
  return clearTimeout(id);
};


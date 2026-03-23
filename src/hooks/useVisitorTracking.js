import { useEffect } from 'react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';

/**
 * Sends a visit beacon to the portfolio backend on initial page load.
 * Fire-and-forget — never blocks or affects the UI.
 */
const useVisitorTracking = () => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        const payload = {
          page: window.location.pathname,
          referrer: document.referrer || '',
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
          language: navigator.language || '',
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
        };

        await fetch(`${BACKEND_URL}/visit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        });
      } catch (err) {
        // Silently fail — tracking should never affect user experience
      }
    };

    trackVisit();
  }, []);
};

export default useVisitorTracking;

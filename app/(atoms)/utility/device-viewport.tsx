'use client';
// ==================== Imports ====================//

//React
import { useState, useEffect, useCallback } from 'react';

// ==================== Imports ====================//

// ==================== Render ====================//

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener('change', updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener('change', updateTarget);
  }, [width]);

  return targetReached;
};

export default useMediaQuery;

// ==================== Render ====================//

// A simple throttle hook
import { useRef, useEffect, useCallback } from 'react';

function useThrottle(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef(null);
  const lastRanRef = useRef(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback((...args) => {
    if (!timeoutRef.current) {
      const now = Date.now();
      const elapsed = now - lastRanRef.current;
      if (elapsed >= delay) {
        callbackRef.current(...args);
        lastRanRef.current = now;
      } else {
        timeoutRef.current = setTimeout(() => {
          callbackRef.current(...args);
          lastRanRef.current = Date.now();
          timeoutRef.current = null;
        }, delay - elapsed);
      }
    }
  }, [delay]);
}

export default useThrottle;
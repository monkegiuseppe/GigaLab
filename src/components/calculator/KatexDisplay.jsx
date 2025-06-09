"use client"

import katex from 'katex';
import { useRef, useEffect } from 'react';

export default function KatexDisplay({ tex, className }) {
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current && tex) {
      try {
        katex.render(tex, containerRef.current, {
          throwOnError: false, // Don't crash on invalid LaTeX
          displayMode: false, // Render inline
        });
      } catch (e) {
        console.error('KaTeX rendering error:', e);
        containerRef.current.textContent = tex; // Fallback to plain text
      }
    } else if (containerRef.current) {
        containerRef.current.textContent = '...'; // Default text
    }
  }, [tex]);

  return <span ref={containerRef} className={className} />;
}
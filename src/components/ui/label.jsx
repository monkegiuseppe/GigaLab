import React from 'react';

export function Label({ className, ...props }) {
  // Combine a default style with any custom classes passed in
  const defaultClasses = "text-sm font-medium leading-none text-slate-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70";
  
  const combinedClassName = [defaultClasses, className].filter(Boolean).join(' ');

  return (
    <label
      className={combinedClassName}
      {...props}
    />
  );
}
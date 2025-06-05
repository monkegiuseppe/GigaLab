import React from 'react';

export function Input({ className, type, ...props }) {
  // Combine a default style with any custom classes passed in
  const defaultClasses = "flex h-10 w-full rounded-md border border-slate-600 bg-slate-800 px-3 py-2 text-sm text-slate-50 ring-offset-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  
  const combinedClassName = [defaultClasses, className].filter(Boolean).join(' ');

  return (
    <input
      type={type}
      className={combinedClassName}
      {...props}
    />
  );
}
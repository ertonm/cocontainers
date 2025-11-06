'use client';

export default function FixCSSVars() {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;
    root.style.setProperty('--orange-600', '#ea580c');
    root.style.setProperty('--orange-700', '#dc2d04');
    root.style.setProperty('--gray-100', '#f3f4f6');
    root.style.setProperty('--gray-700', '#374151');
    root.style.setProperty('--gray-900', '#111827');
    // add all your vars here
  }
  return null;
}
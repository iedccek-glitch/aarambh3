// Application Constants

export const APP_CONFIG = {
  name: 'AARAMBH 3.0',
  description: 'Tech Fest by IEDC CEK',
  version: '1.0.0',
  author: 'IEDC CEK',
} as const;

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/iedccek',
  linkedin: 'https://linkedin.com/company/iedc-cek',
  twitter: 'https://twitter.com/iedccek',
} as const;

export const CONTACT_INFO = {
  email: 'iedccek@gmail.com',
  phone: '+91-XXXXXXXXXX',
} as const;

export const THEME_OPTIONS = {
  light: 'light',
  dark: 'dark',
} as const;

export type ThemeOption = (typeof THEME_OPTIONS)[keyof typeof THEME_OPTIONS];

export const ANIMATION_CONFIG = {
  duration: 300,
  easing: 'ease-in-out',
} as const;

export const BREAKPOINTS = {
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

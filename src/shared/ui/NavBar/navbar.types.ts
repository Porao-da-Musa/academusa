export const NavbarVariant = {
  PUBLIC: "public",
  DASHBOARD: "dashboard",
  HOME: "home",
} as const;

export type NavbarVariant = (typeof NavbarVariant)[keyof typeof NavbarVariant];

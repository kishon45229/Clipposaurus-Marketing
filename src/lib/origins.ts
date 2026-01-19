export const COMPONENT_ORIGINS = [
  "HeroComponent",
  "HowItWorksComponent",
  "CTAComponent",
  "TermsOfServiceComponent",
  "PrivacyPolicyComponent",
  "FAQComponent",
  "NavbarComponent",
  "FooterComponent",
  "WhatCanShareComponent",
  "PrivacyComponent",
  "ComparisonComponent",
  "AboutComponent",
];

export function isValidOrigin(origin: string): boolean {
  return COMPONENT_ORIGINS.includes(origin);
}

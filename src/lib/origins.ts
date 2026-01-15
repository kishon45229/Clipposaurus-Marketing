export const COMPONENT_ORIGINS = ["HeroComponent", "FeaturesComponent", "HowItWorksComponent", "SecurityComponent", "CTAComponent", "TermsOfServiceComponent", "FAQComponent", "NavbarComponent", "FooterComponent", "WhatCanShareComponent", "PrivacyComponent", "ComparisonComponent"];

export function isValidOrigin(origin: string): boolean {
  return COMPONENT_ORIGINS.includes(origin);
}

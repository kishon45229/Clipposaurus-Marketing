export const COMPONENT_ORIGINS = ["HeroComponent", "FeaturesComponent", "HowItWorksComponent", "SecurityComponent", "CTAComponent", "TermsOfServiceComponent", "FAQComponent", "NavbarComponent", "FooterComponent"];

export function isValidOrigin(origin: string): boolean {
  return COMPONENT_ORIGINS.includes(origin);
}

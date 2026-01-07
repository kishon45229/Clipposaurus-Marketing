export const COMPONENT_ORIGINS = ["HeroComponent", "FeaturesComponent", "HowItWorksComponent", "SecurityComponent", "CTAComponent", "TermsOfServiceComponent", "FAQComponent"];

export function isValidOrigin(origin: string): boolean {
  return COMPONENT_ORIGINS.includes(origin);
}

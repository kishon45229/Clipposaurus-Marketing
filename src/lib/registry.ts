import { z } from "zod";
import {
  HeroComponentSchema,
  FeaturesComponentSchema,
  HowItWorksComponentSchema,
  SecurityComponentSchema,
  FAQComponentSchema,
  TermsOfServiceComponentSchema,
  CTAComponentSchema,
} from "@/lib/schema";

export const COMPONENT_SCHEMAS: Record<string, z.ZodSchema> = {
  HeroComponent: HeroComponentSchema,
  FeaturesComponent: FeaturesComponentSchema,
  HowItWorksComponent: HowItWorksComponentSchema,
  SecurityComponent: SecurityComponentSchema,
  CTAComponent: CTAComponentSchema,
  FAQComponent: FAQComponentSchema,
  TermsOfServiceComponent: TermsOfServiceComponentSchema,
};

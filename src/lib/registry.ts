import { z } from "zod";
import {
  HeroComponentSchema,
  HowItWorksComponentSchema,
  FAQComponentSchema,
  TermsOfServiceComponentSchema,
  CTAComponentSchema,
  NavbarComponentSchema,
  FooterComponentSchema,
  WhatCanShareComponentSchema,
  PrivacyComponentSchema,
  ComparisonComponentSchema
} from "@/lib/schema";

export const COMPONENT_SCHEMAS: Record<string, z.ZodSchema> = {
  HeroComponent: HeroComponentSchema,
  HowItWorksComponent: HowItWorksComponentSchema,
  PrivacyComponent: PrivacyComponentSchema,
  CTAComponent: CTAComponentSchema,
  FAQComponent: FAQComponentSchema,
  TermsOfServiceComponent: TermsOfServiceComponentSchema,
  FooterComponent: FooterComponentSchema,
  NavbarComponent: NavbarComponentSchema,
  WhatCanShareComponent: WhatCanShareComponentSchema,
  ComparisonComponent: ComparisonComponentSchema
};
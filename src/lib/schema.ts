import { z } from "zod";

// Hero
const HeroTrustBadges = z.object({
  label: z.string(),
  subtext: z.string(),
});

const HeroCTA = z.object({
  primary: z.string(),
  secondary: z.string(),
  divider: z.string(),
});

export const HeroComponentSchema = z.object({
  title: z.string(),
  titleHighlight: z.string(),
  description: z.string(),
  trustBadges: z.array(HeroTrustBadges),
  cta: HeroCTA,
  consentDescription: z.string(),
  consentLink: z.string(),
});

// How It Works
const HowItWorksStepSchema = z.object({
  iconName: z.string(),
  title: z.string(),
  description: z.string(),
  stepNumber: z.string(),
});

const HowItWorksCTASchema = z.object({
  primary: z.string(),
  secondary: z.string(),
});

export const HowItWorksComponentSchema = z.object({
  title: z.string(),
  titleHighlight: z.string(),
  description: z.string(),
  steps: z.array(HowItWorksStepSchema),
  cta: HowItWorksCTASchema,
});

// FAQ
const FAQQuestionSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const FAQCategorySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  questions: z.array(FAQQuestionSchema),
});

export const FAQComponentSchema = z.object({
  headline: z.string(),
  description: z.string(),
  lastUpdated: z.string(),
  categories: z.array(FAQCategorySchema),
});

// Terms of Service
const AccordionItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});

export const TermsOfServiceComponentSchema = z.object({
  headline: z.string(),
  lastUpdated: z.string(),
  sections: z.array(AccordionItemSchema),
});

// CTA
const CTAStatSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const CTAContrastSchema = z.object({
  left: z.string(),
  right: z.string(),
});

export const CTAComponentSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  titleHighlight: z.string(),
  description: z.string(),
  primaryAction: z.string(),
  secondaryAction: z.string(),
  trustBadges: z.array(z.string()),
  stats: z.array(CTAStatSchema),
  contrasts: z.array(CTAContrastSchema),
});

// Footer
export const FooterComponentSchema = z.object({
  brand: z.object({
    name: z.string(),
    description: z.string(),
    ariaLabel: z.string(),
    text: z.string(),
  }),
  columns: z.array(
    z.object({
      category: z.string(),
      links: z.array(z.string()),
    })
  ),
  copyrightNote: z.string(),
});

// Navbar
export const NavbarComponentSchema = z.object({
  brand: z.object({
    name: z.string(),
    alt: z.string(),
    ariaLabel: z.string(),
    beta: z.object({
      text: z.string(),
      ariaLabel: z.string(),
    }),
  }),
  links: z.object({
    docs: z.string(),
    github: z.string(),
    resources: z.string(),
    help: z.string(),
  }),
  menus: z.object({
    resourcesDropDown: z.object({
      changelog: z.object({
        title: z.string(),
        description: z.string(),
      }),
      terms: z.object({
        title: z.string(),
        description: z.string(),
      }),
      support: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
    helpDropDown: z.object({
      faq: z.object({
        title: z.string(),
        description: z.string(),
      }),
      issue: z.object({
        title: z.string(),
        description: z.string(),
      }),
      contact: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
    hamburger: z.object({
      openMenu: z.string(),
      documentation: z.string(),
      faq: z.string(),
      github: z.string(),
      changelog: z.string(),
      reportIssue: z.string(),
      termsOfService: z.string(),
      contactUs: z.string(),
      supportProject: z.string(),
    }),
  }),
  themeToggle: z.object({
    ariaLabel: z.string(),
  }),
  ariaLabels: z.object({
    mainNavigation: z.string(),
  }),
});

// What Can Share
const StackItemSchema = z.object({
  type: z.string(),
  label: z.string(),
  preview: z.string().optional(),
  language: z.string().optional(),
  icon: z.string(),
});

export const WhatCanShareComponentSchema = z.object({
  headline: z.string(),
  headlineHighlight: z.string(),
  subtext: z.string(),
  trustReinforcement: z.string(),
  stackItems: z.array(StackItemSchema),
  ctaLabel: z.string(),
});

// Privacy
const StageSchema = z.object({
  id: z.string(),
  label: z.string(),
  description: z.string(),
  detail: z.string(),
});

const CTASchema = z.object({
  primary: z.string(),
  secondary: z.string(),
});

export const PrivacyComponentSchema = z.object({
  title: z.string(),
  titleHighlight: z.string(),
  description: z.string(),
  stages: z.array(StageSchema),
  cta: CTASchema,
});

// Comparison
const ComparisonPointSchema = z.object({
  label: z.string(),
  description: z.string(),
});

const ComparisonHighlightSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const ComparisonCalloutSchema = z.object({
  traditional: z.string(),
  clipposaurus: z.string(),
});

const ComparisonLaneSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  comparisonPoints: z.array(ComparisonPointSchema),
  endState: z.string(),
  theme: z.enum(["traditional", "clipposaurus"]),
});

export const ComparisonComponentSchema = z.object({
  title: z.string(),
  titleHighlight: z.string(),
  description: z.string(),
  tagline: z.string(),
  lanes: z.object({
    traditional: ComparisonLaneSchema,
    clipposaurus: ComparisonLaneSchema,
  }),
  ctaText: z.string(),
  ctaHelper: z.string(),
});

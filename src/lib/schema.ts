import { z } from "zod";

// Hero
export const HeroComponentSchema = z.object({
  title: z.string(),
  titleHighlight: z.string(),
  description: z.string(),
  ctaButton1: z.string(),
  ctaButton2: z.string(),
  consentDescription: z.string(),
  consentLink: z.string(),
});

// Features
const FeatureItemSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

export const FeaturesComponentSchema = z.object({
  headline: z.string(),
  description: z.string(),
  features: z.array(FeatureItemSchema),
});

// How It Works
const HowItWorksStepSchema = z.object({
  iconName: z.string(),
  title: z.string(),
  description: z.string(),
  stepNumber: z.string(),
});

export const HowItWorksComponentSchema = z.object({
  title: z.string(),
  titleHighlight: z.string(),
  description: z.string(),
  steps: z.array(HowItWorksStepSchema),
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

// Security
const SecurityFeatureSchema = z.object({
  title: z.string(),
  stat: z.string(),
  description: z.string(),
});

const TrustIndicatorSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const SecurityComponentSchema = z.object({
  badgeText: z.string(),
  title: z.string(),
  titleHighlight: z.string(),
  description: z.string(),
  features: z.array(SecurityFeatureSchema),
  trustIndicators: z.array(TrustIndicatorSchema),
});

// CTA
export const CTAComponentSchema = z.object({
  title: z.string(),
  titleHighlight: z.string(),
  description: z.string(),
  buttonText: z.string(),
  trustBadges: z.array(z.string()),
});

// Footer
export const FooterComponentSchema = z.object({
  brand: z.object({
    name: z.string(),
    description: z.string(),
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


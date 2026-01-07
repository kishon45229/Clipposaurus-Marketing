//FAQ types
interface FAQQuestion {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  description?: string;
  questions: FAQQuestion[];
}

export interface FAQComponent {
  headline: string;
  description: string;
  lastUpdated: string;
  categories: FAQCategory[];
}

// Terms of Service types
interface AccordionItem {
  id: number;
  title: string;
  description: string;
}

export interface TermsOfServiceComponent {
  headline: string;
  lastUpdated: string;
  sections: AccordionItem[];
}

// Features types
interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesComponent {
  headline: string;
  description: string;
  features: FeatureItem[];
}

// How It Works types
export interface HowItWorksStep {
  iconName: string;
  title: string;
  description: string;
  stepNumber: string;
}

export interface HowItWorksComponent {
  title: string;
  titleHighlight: string;
  description: string;
  steps: HowItWorksStep[];
}

// Security types
interface SecurityFeature {
  title: string;
  stat: string;
  description: string;
}

interface TrustIndicator {
  value: string;
  label: string;
}

export interface SecurityComponent {
  badgeText: string;
  title: string;
  titleHighlight: string;
  description: string;
  features: SecurityFeature[];
  trustIndicators: TrustIndicator[];
}

// CTA types
export interface CTAComponent {
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  trustBadges: string[];
}

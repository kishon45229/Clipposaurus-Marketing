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
interface TechnicalProofItem {
  metric: string;
  label: string;
  detail: string;
}

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  technicalDetail?: string;
}

export interface FeaturesComponent {
  headline: string;
  subheadline?: string;
  description: string;
  technicalProof?: TechnicalProofItem[];
  features: FeatureItem[];
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
export interface CTAStat {
  value: string;
  label: string;
}

export interface CTAContrast {
  left: string;
  right: string;
}

export interface CTAComponent {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
  trustBadges: string[];
  stats: CTAStat[];
  contrasts: CTAContrast[];
}

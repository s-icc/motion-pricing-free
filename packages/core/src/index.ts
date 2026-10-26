export type BillingCycle = 'monthly' | 'yearly';
export type PricingTheme = 'light' | 'dark';

export interface PricingFeature {
  label: string;
  included?: boolean;
  detail?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  currency?: string;
  currencySymbol?: string;
  features: Array<string | PricingFeature>;
  badge?: string;
  featured?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  ctaAriaLabel?: string;
}

export const defaultPlans: PricingPlan[] = [
  {
    id: 'starter', name: 'Starter', description: 'For shipping a focused first product.',
    monthlyPrice: 0, yearlyPrice: 0, features: ['One project', 'Core pricing layout', 'Community support'],
    ctaLabel: 'Start free', ctaHref: '#download'
  },
  {
    id: 'studio', name: 'Studio', description: 'For teams building products together.',
    monthlyPrice: 24, yearlyPrice: 228, badge: 'Most popular', featured: true,
    features: ['Unlimited projects', 'All layout variants', 'Advanced motion presets', 'Priority support'],
    ctaLabel: 'Choose Studio', ctaHref: '#buy'
  },
  {
    id: 'scale', name: 'Scale', description: 'For growing product organizations.',
    monthlyPrice: 64, yearlyPrice: 612, features: ['Everything in Studio', 'Extended team license', 'Design token recipes', 'Migration guidance'],
    ctaLabel: 'Choose Scale', ctaHref: '#buy'
  }
];

export function normalizeFeature(feature: string | PricingFeature): Required<Pick<PricingFeature, 'label' | 'included'>> & Pick<PricingFeature, 'detail'> {
  return typeof feature === 'string'
    ? { label: feature, included: true }
    : { label: feature.label, included: feature.included ?? true, ...(feature.detail ? { detail: feature.detail } : {}) };
}

export function getPrice(plan: PricingPlan, cycle: BillingCycle): number {
  return cycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
}

export function formatPrice(plan: PricingPlan, cycle: BillingCycle, locale = 'en-US'): string {
  const amount = getPrice(plan, cycle);
  if (plan.currencySymbol) return `${plan.currencySymbol}${amount.toLocaleString(locale)}`;
  return new Intl.NumberFormat(locale, {
    style: 'currency', currency: plan.currency ?? 'USD', maximumFractionDigits: 0
  }).format(amount);
}

export function monthlyEquivalent(plan: PricingPlan): number {
  return Math.round((plan.yearlyPrice / 12) * 100) / 100;
}

export function annualSavings(plan: PricingPlan): number {
  return Math.max(0, plan.monthlyPrice * 12 - plan.yearlyPrice);
}

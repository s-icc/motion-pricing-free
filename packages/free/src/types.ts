import type { BillingCycle, PricingPlan, PricingTheme } from '@motion-pricing/core';
import type { CSSProperties, ReactNode } from 'react';

export interface BillingToggleProps {
  value: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
  yearlyLabel?: string;
  monthlyLabel?: string;
  savingsLabel?: string;
  className?: string;
  style?: CSSProperties | undefined;
  buttonStyle?: CSSProperties | undefined;
}

/** Inline-style slots for individual parts of a pricing table. */
export interface PricingTableStyles {
  root?: CSSProperties;
  header?: CSSProperties;
  billingToggle?: CSSProperties;
  billingToggleButton?: CSSProperties;
  tabs?: CSSProperties;
  grid?: CSSProperties;
  card?: CSSProperties;
  featuredCard?: CSSProperties;
  cardHeader?: CSSProperties;
  badge?: CSSProperties;
  description?: CSSProperties;
  price?: CSSProperties;
  featureList?: CSSProperties;
  feature?: CSSProperties;
  cta?: CSSProperties;
}

export interface PricingTableProps {
  plans: PricingPlan[];
  billingCycle: BillingCycle;
  onBillingCycleChange?: (cycle: BillingCycle) => void;
  theme?: PricingTheme;
  heading?: ReactNode;
  subheading?: ReactNode;
  showBillingToggle?: boolean;
  yearlySavingsLabel?: string;
  priceSuffix?: { monthly: string; yearly: string };
  className?: string;
  style?: CSSProperties;
  styles?: PricingTableStyles;
  onPlanSelect?: (plan: PricingPlan) => void;
}

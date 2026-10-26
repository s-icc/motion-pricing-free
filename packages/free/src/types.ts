import type { BillingCycle, PricingPlan, PricingTheme } from '@motion-pricing/core';
import type { CSSProperties, ReactNode } from 'react';

export interface BillingToggleProps {
  value: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
  yearlyLabel?: string;
  monthlyLabel?: string;
  savingsLabel?: string;
  className?: string;
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
  onPlanSelect?: (plan: PricingPlan) => void;
}

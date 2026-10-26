import { useState } from 'react';
import { PricingTable, defaultPlans, type BillingCycle } from '@motion-pricing/free';
import '@motion-pricing/free/styles.css';

export function PricingExample() {
  const [cycle, setCycle] = useState<BillingCycle>('monthly');
  return <PricingTable plans={defaultPlans} billingCycle={cycle} onBillingCycleChange={setCycle} heading="Plans that scale calmly." theme="light" />;
}

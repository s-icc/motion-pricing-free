# Installation

Install React and the package in a React 18+ project:

### npm

```sh
npm install react react-dom @motion-pricing/free
```

### pnpm

```sh
pnpm add react react-dom @motion-pricing/free
```

### Yarn

```sh
yarn add react react-dom @motion-pricing/free
```

```tsx
import { useState } from 'react';
import { PricingTable, defaultPlans, type BillingCycle } from '@motion-pricing/free';
import '@motion-pricing/free/styles.css';

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>('monthly');
  return <PricingTable plans={defaultPlans} billingCycle={cycle} onBillingCycleChange={setCycle} />;
}
```

The package emits ESM and TypeScript declarations, requires React 18 or newer, and expects browsers with CSS custom property and `color-mix()` support.


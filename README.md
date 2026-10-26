# Motion Pricing Free

Accessible, responsive React pricing components with typed props, monthly/yearly billing, light and dark themes, and no runtime dependencies beyond React.

```sh
npm install
npm run validate
```

```tsx
import { PricingTable, defaultPlans } from '@motion-pricing/free';
import '@motion-pricing/free/styles.css';

<PricingTable plans={defaultPlans} billingCycle="monthly" />
```

The public component lives in `packages/free`; shared framework-neutral types and pricing helpers live in `packages/core`.

See `docs/INSTALLATION.md`, `docs/API.md`, and `docs/CUSTOMIZATION.md` for the complete public guidance.



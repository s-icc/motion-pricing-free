# Motion Pricing Free

Accessible, responsive React pricing components with typed props, monthly/yearly billing, light and dark themes, and no third-party runtime dependencies beyond React.

Install the public package:

```sh
npm install @motion-pricing/free
```

Or use `pnpm add @motion-pricing/free` / `yarn add @motion-pricing/free`.

For repository development:

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

Before publishing, run `npm run release:check` and inspect both package manifests. The framework-neutral Core package is public because Free depends on it, but consumers only need to install `@motion-pricing/free`.

See `docs/INSTALLATION.md`, `docs/API.md`, `docs/CUSTOMIZATION.md`, and `docs/PUBLISHING.md` for the complete public guidance.



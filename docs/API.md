# API

## `PricingTable`

The table is controlled: the host owns the billing cycle and any checkout behavior.

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `plans` | `PricingPlan[]` | required | Plan content and pricing. On mobile, each plan automatically becomes a tab. |
| `billingCycle` | `'monthly' \| 'yearly'` | required | Selects which plan price and suffix are displayed. |
| `onBillingCycleChange` | `(cycle) => void` | — | Enables the built-in billing control and receives the requested cycle. |
| `theme` | `'light' \| 'dark'` | `'light'` | Selects the scoped visual theme. |
| `heading` | `ReactNode` | — | Optional section heading. |
| `subheading` | `ReactNode` | — | Supporting copy below the heading. |
| `showBillingToggle` | `boolean` | `true` | Hides the built-in control when false; the host can supply its own control. |
| `yearlySavingsLabel` | `string` | `'Save 20%'` | Copy shown beside Yearly. This is display text, not a calculated discount. |
| `priceSuffix` | `{ monthly: string; yearly: string }` | `'/month'`, `'/year'` | Replaces the cadence copy beside each price. |
| `className` | `string` | `''` | Adds a class to the outer section. |
| `style` | `CSSProperties` | — | Adds inline styles or scoped CSS custom-property overrides. |
| `styles` | `PricingTableStyles` | — | Adds inline styles to named component parts. See [Style slots](#style-slots). |
| `onPlanSelect` | `(plan) => void` | — | Runs when a CTA is selected. The component does not initiate checkout. |

## Style slots

`styles` accepts `CSSProperties` for `root`, `header`, `billingToggle`, `billingToggleButton`, `tabs`, `grid`, `card`, `featuredCard`, `cardHeader`, `badge`, `description`, `price`, `featureList`, `feature`, and `cta`. `featuredCard` is merged after `card` for featured plans; the top-level `style` prop is merged after `styles.root`.

## `BillingToggle`

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `value` | `'monthly' \| 'yearly'` | required | Controlled selected cadence. |
| `onChange` | `(cycle) => void` | required | Receives keyboard and pointer selections. |
| `monthlyLabel` | `string` | `'Monthly'` | Monthly option copy. |
| `yearlyLabel` | `string` | `'Yearly'` | Yearly option copy. |
| `savingsLabel` | `string` | `'Save yearly'` | Supplemental Yearly copy. |
| `className` | `string` | `''` | Adds a class to the radiogroup. |
| `style` | `CSSProperties` | — | Adds inline styles to the radiogroup. |
| `buttonStyle` | `CSSProperties` | — | Adds inline styles to both option buttons. |

Arrow keys change the selected cadence. The active option uses radio semantics and participates in the tab order.

## Shared data

`PricingPlan` requires `id`, `name`, `description`, `monthlyPrice`, `yearlyPrice`, and `features`. Currency defaults to USD when formatting; set either an ISO `currency` code or a literal `currencySymbol`. `badge` adds short status copy, `featured` selects the initially visible mobile plan, and the CTA fields control its label, destination, and accessible name. A feature can be a string or `{ label, included, detail }`; omitted `included` values are treated as true.

All billing state is controlled. No plan selection, network call, or checkout side effect occurs unless the consumer supplies it.


# API

## `PricingTable`

Required props are `plans` and the controlled `billingCycle`. Optional props include `onBillingCycleChange`, `theme`, `heading`, `subheading`, `showBillingToggle`, `yearlySavingsLabel`, `priceSuffix`, `className`, `style`, and `onPlanSelect`.

## `BillingToggle`

Accepts `value` and `onChange`, plus optional monthly, yearly, and savings labels and `className`. Arrow keys toggle the selected cadence.

## Shared data

`PricingPlan` requires `id`, `name`, `description`, monthly and yearly prices, and a feature list. Optional fields configure currency, badges, featured state, and CTA content. A feature can be a string or `{ label, included, detail }`.

All billing state is controlled. No plan selection, network call, or checkout side effect occurs unless the consumer supplies it.


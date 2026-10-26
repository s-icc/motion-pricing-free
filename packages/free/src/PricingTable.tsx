import { formatPrice, normalizeFeature } from '@motion-pricing/core';
import { BillingToggle } from './BillingToggle.js';
import type { PricingTableProps } from './types.js';

function FeatureIcon({ included }: { included: boolean }) {
  return <span className="mp-feature-icon" aria-hidden="true">{included ? '✓' : '–'}</span>;
}

export function PricingTable({
  plans, billingCycle, onBillingCycleChange, theme = 'light', heading, subheading,
  showBillingToggle = true, yearlySavingsLabel = 'Save 20%',
  priceSuffix = { monthly: '/month', yearly: '/year' }, className = '', style, onPlanSelect
}: PricingTableProps) {
  return (
    <section className={`mp-pricing mp-pricing--${theme} ${className}`} style={style} aria-label="Pricing plans">
      {(heading || subheading || (showBillingToggle && onBillingCycleChange)) && (
        <div className="mp-pricing__header">
          {heading && <h2>{heading}</h2>}
          {subheading && <p>{subheading}</p>}
          {showBillingToggle && onBillingCycleChange && (
            <BillingToggle value={billingCycle} onChange={onBillingCycleChange} savingsLabel={yearlySavingsLabel} />
          )}
        </div>
      )}
      <div className="mp-pricing__grid">
        {plans.map((plan) => (
          <article className={`mp-card${plan.featured ? ' mp-card--featured' : ''}`} key={plan.id}>
            {plan.badge && <span className="mp-badge">{plan.badge}</span>}
            <div className="mp-card__top">
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
            </div>
            <p className="mp-price" aria-label={`${formatPrice(plan, billingCycle)} ${billingCycle}`}>
              <strong>{formatPrice(plan, billingCycle)}</strong>
              <span>{priceSuffix[billingCycle]}</span>
            </p>
            <ul>
              {plan.features.map((item, index) => {
                const feature = normalizeFeature(item);
                return <li className={feature.included ? '' : 'mp-feature--muted'} key={`${feature.label}-${index}`}><FeatureIcon included={feature.included} /><span>{feature.label}{feature.detail && <small>{feature.detail}</small>}</span></li>;
              })}
            </ul>
            <a className="mp-cta" href={plan.ctaHref ?? '#'} aria-label={plan.ctaAriaLabel ?? plan.ctaLabel ?? `Choose ${plan.name}`} onClick={() => onPlanSelect?.(plan)}>
              {plan.ctaLabel ?? `Choose ${plan.name}`}<span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

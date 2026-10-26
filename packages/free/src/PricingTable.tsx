import { formatPrice, normalizeFeature } from '@motion-pricing/core';
import { useId, useState } from 'react';
import type { KeyboardEvent } from 'react';
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
  const planTabsId = useId();
  const [activePlan, setActivePlan] = useState(() => Math.max(0, plans.findIndex((plan) => plan.featured)));
  const activePlanIndex = Math.min(activePlan, Math.max(0, plans.length - 1));
  const onPlanTabsKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key) || plans.length === 0) return;
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    const current = Number(target.dataset.index ?? activePlanIndex);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? plans.length - 1
      : event.key === 'ArrowLeft' ? (current - 1 + plans.length) % plans.length : (current + 1) % plans.length;
    setActivePlan(next);
    event.currentTarget.querySelector<HTMLButtonElement>(`[data-index="${next}"]`)?.focus();
  };
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
      <div className="mp-plan-tabs" role="tablist" aria-label="Choose a pricing plan" tabIndex={-1} onKeyDown={onPlanTabsKeyDown}>
        {plans.map((plan, index) => <button id={`${planTabsId}-tab-${index}`} key={plan.id} type="button" role="tab" aria-selected={activePlanIndex === index} aria-controls={`${planTabsId}-panel-${index}`} tabIndex={activePlanIndex === index ? 0 : -1} data-index={index} onClick={() => setActivePlan(index)}>{plan.name}</button>)}
      </div>
      <div className="mp-pricing__grid">
        {plans.map((plan, planIndex) => (
          <article id={`${planTabsId}-panel-${planIndex}`} aria-labelledby={`${planTabsId}-tab-${planIndex}`} className={`mp-card${plan.featured ? ' mp-card--featured' : ''}${activePlanIndex === planIndex ? ' mp-card--active' : ''}`} key={plan.id}>
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

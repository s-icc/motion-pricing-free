import type { BillingCycle } from '@motion-pricing/core';
import type { KeyboardEvent } from 'react';
import type { BillingToggleProps } from './types.js';

export function BillingToggle({
  value, onChange, monthlyLabel = 'Monthly', yearlyLabel = 'Yearly', savingsLabel = 'Save yearly', className = '', style, buttonStyle
}: BillingToggleProps) {
  const select = (cycle: BillingCycle) => onChange(cycle);
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      select(value === 'monthly' ? 'yearly' : 'monthly');
    }
  };

  return (
    <div className={`mp-toggle ${className}`} style={style} role="radiogroup" aria-label="Billing frequency" tabIndex={0} onKeyDown={onKeyDown}>
      <button type="button" style={buttonStyle} role="radio" aria-checked={value === 'monthly'} tabIndex={value === 'monthly' ? 0 : -1} onClick={() => select('monthly')}>
        {monthlyLabel}
      </button>
      <button type="button" style={buttonStyle} role="radio" aria-checked={value === 'yearly'} tabIndex={value === 'yearly' ? 0 : -1} onClick={() => select('yearly')}>
        {yearlyLabel}<span>{savingsLabel}</span>
      </button>
    </div>
  );
}

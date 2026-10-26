import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { defaultPlans } from '@motion-pricing/core';
import { BillingToggle } from './BillingToggle.js';
import { PricingTable } from './PricingTable.js';

describe('PricingTable', () => {
  it('renders plans and monthly pricing', () => {
    render(<PricingTable plans={defaultPlans} billingCycle="monthly" />);
    expect(screen.getByRole('heading', { name: 'Studio' })).toBeInTheDocument();
    expect(screen.getByLabelText('$24 monthly')).toBeInTheDocument();
  });

  it('exposes useful plan links', () => {
    render(<PricingTable plans={defaultPlans} billingCycle="yearly" />);
    expect(screen.getByRole('link', { name: 'Choose Studio' })).toHaveAttribute('href', '#buy');
  });
});

describe('BillingToggle', () => {
  it('supports click and arrow-key interaction', () => {
    const onChange = vi.fn();
    render(<BillingToggle value="monthly" onChange={onChange} />);
    fireEvent.click(screen.getByRole('radio', { name: /yearly/i }));
    expect(onChange).toHaveBeenCalledWith('yearly');
    fireEvent.keyDown(screen.getByRole('radiogroup'), { key: 'ArrowRight' });
    expect(onChange).toHaveBeenCalledWith('yearly');
  });
});

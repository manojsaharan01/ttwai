'use client';

import { RadioGroup } from '@headlessui/react';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { cn } from '@/utils/utils';
import { TypeFrequency, TypeTier } from '@/types/pricing';
import ButtonPayment from './ButtonPayment';
import SeparatorOr from '@/components/ui/separator-or';

const frequencies = [
  { value: 'monthly', label: 'Billed Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Billed Annually', priceSuffix: '/year' },
];

const tiers = [
  {
    name: 'Trial',
    id: 'trial',
    description: '50% Off on Annual Plans',
    actualPrice: { monthly: '', annually: '' },
    sellingPrice: { monthly: '', annually: '' },
    features: [
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    ],
  },
  {
    name: 'Standard',
    id: 'standard',
    description: '50% Off on Annual Plans',
    actualPrice: { monthly: '', annually: '$150' },
    sellingPrice: { monthly: '$15', annually: '$75' },
    features: [
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    ],
  },
  {
    name: 'Premium',
    id: 'premium',
    description: '50% Off on Annual Plans',
    actualPrice: { monthly: '', annually: '$300' },
    sellingPrice: { monthly: '$50', annually: '$150' },
    features: [
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    ],
  },
];

export default function Plans() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <>
      <div className='flex justify-center mb-8'>
        <RadioGroup
          value={frequency}
          onChange={setFrequency}
          className='grid grid-cols-2 bg-white gap-x-1 rounded-full p-1 text-center text-[10px] md:text-xs leading-5 ring-1 ring-inset ring-gray-200'>
          <RadioGroup.Label className='sr-only'>Payment frequency</RadioGroup.Label>
          {frequencies.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option}
              className={({ checked }) =>
                cn(checked && 'bg-primary text-white', 'cursor-pointer rounded-full px-2 py-1 md:py-2')
              }>
              {option.label}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>

      <div className='flex flex-col md:flex-row items-start justify-center gap-10'>
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className='md:w-1/4 flex flex-col items-center justify-center gap-6 md:gap-10 p-6'>
            <Badge className='bg-primary/10 text-primary shadow-none uppercase'>{tier.name}</Badge>
            <div className='text-center'>
              <div className='mb-4'>
                {tier.id === 'trial' ? (
                  <p className='text-5xl'>Free</p>
                ) : (
                  <div className='flex items-end gap-1'>
                    <p className='text-2xl font-semibold line-through text-black/50 decoration-black/70 decoration-2 px-0.5'>
                      {(tier.actualPrice as any)[frequency.value]}
                    </p>
                    <p className='text-5xl font-semibold tracking-tight'>
                      {(tier.sellingPrice as any)[frequency.value]}
                    </p>
                    <p className='text-sm font-medium leading-loose'>{frequency.priceSuffix}</p>
                  </div>
                )}
              </div>
              <p className='text-sm opacity-60'>{tier.description}</p>
            </div>
            <ul role='list' className='h-20 space-y-2 text-sm opacity-60'>
              {tier.features.map((feature) => (
                <li key={feature} className='text-center leading-relaxed'>
                  {feature}
                </li>
              ))}
            </ul>

            <div>
              <ButtonPayment
                provider='stripe'
                tier={tier.id as TypeTier}
                frequency={frequency.value as TypeFrequency}
              />
              <SeparatorOr />
              <ButtonPayment
                provider='lemonSqueezy'
                tier={tier.id as TypeTier}
                frequency={frequency.value as TypeFrequency}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

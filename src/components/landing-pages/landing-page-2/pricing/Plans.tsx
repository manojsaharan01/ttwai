// This component renders the pricing plans for different subscription tiers.
// It utilizes the <RadioGroup> from HeadlessUI to toggle between 'monthly' and 'annually' payment frequencies.
// Tiers data is mapped to display each plan with its respective price, features, and a call-to-action.

'use client';
import BoldRightIcon from '@/assets/landing-page-2/icons/BoldRightIcon';
import OrangeArrowIcon from '@/assets/landing-page-2/icons/OrangeArrowIcon';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const tiers = [
  {
    name: 'Free',
    id: 'free',
    sellingPrice: { monthly: '$0' },
    features: ['NextJS Boilerplate', 'AI Models', '5 Demo Apps'],
  },
  {
    name: 'Pro',
    id: 'pro',
    sellingPrice: { monthly: '$149' },
    features: [
      'NextJS Boilerplate',
      'AI Models',
      '5 Demo Apps',
      'GAuth & Magic Link',
      'Stripe & Lemon Squeezy Payments',
      'Privacy Policy & ToS',
    ],
  },
  {
    name: 'Ultimate',
    id: 'ultimate',
    sellingPrice: { monthly: '$199' },
    features: [
      'NextJS Boilerplate',
      'AI Models',
      '5 Demo Apps',
      'GAuth & Magic Link',
      'Stripe & Lemon Squeezy Payments',
      'Privacy Policy & ToS',
      'Supabase',
      'Email integration',
      'SEO',
      'App Admin Dashboard',
      'Advanced API Set Up on Digital Ocean',
    ],
  },
];

// Each plan might have different components rendered based on its type (e.g., Trial vs. Standard vs. Premium).
// It uses internal state to manage the selected frequency of payments (monthly/annually).
// This component dynamically renders plan details and pricing based on the selected frequency.
export default function Plans() {
  return (
    <>
      <div className='grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {tiers.map((tier) => (
          // Card for each plan with its respective details and pricing.
          <div
            key={tier.id}
            className='w-full max-w-[23rem] h-fit bg-gradient-to-b shadow-sm from-white via-[rgba(249, 249, 250, 0.80)] to-transparent border border-[#E5E7EB] p-6 rounded-2xl flex mx-auto flex-col mt-6'>
            <div className='text-center space-y-2 w-full mt-10'>
              {tier.name === 'Pro' && (
                <p className='flex gap-3 py-1.5 px-3.5 text-center bg-[#FCF9F7] w-fit mx-auto text-xs font-medium text-lp2-primary rounded-sm justify-center items-center'>
                  {' '}
                  <span className='size-1.5  text-center bg-lp2-primary rounded-full block' /> MOST POPULAR
                </p>
              )}
              <p className='text-lg font-semibold'>{tier.name.toUpperCase()}</p>

              <p className='font-semibold text-4xl'>
                <span>{tier.sellingPrice.monthly}</span>
                <span className='text-[#9CA3AF]'>/mo</span>
              </p>
            </div>
            <ul role='list' className='space-y-2 mt-6'>
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className='leading-relaxed grid grid-cols-[auto,1fr] gap-4 font-medium items-center'>
                  <OrangeArrowIcon /> <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA button for the specific plan. */}

            <Button
              variant={'ghost'}
              className={`mt-16 border border-gray-200 bg-gradient-to-b from-white to-gray-100 w-full py-3 px-8 rounded-xl flex-1 ${tier.name === 'Pro' && 'bg-gradient-to-t from-lp2-primary to-lp2-primary/80  hover:bg-lp2-primary hover:text-white text-white '}`}>
              Get Now{' '}
              {tier.name === 'Pro' ? (
                <span className='ml-2'>
                  <BoldRightIcon />
                </span>
              ) : (
                <ArrowRightIcon className='ml-4' />
              )}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

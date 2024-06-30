// This is the entry component for the landing page of the application.
// It sequentially renders the primary sections of the landing page including Hero, Features, Product, Pricing, Faq, and Footer components.

import LandingPage2 from '@/components/landing-pages/landing-page-2';

export default async function Home() {
  return <LandingPage2 />;
}

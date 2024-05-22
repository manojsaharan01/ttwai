// This is the entry component for the landing page of the application.
// It sequentially renders the primary sections of the landing page including Hero, Features, Product, Pricing, Faq, and Footer components.

// import LandingPage1 from '@/components/landing-pages/landing-page-1';
import LandingPage3 from '@/components/landing-pages/landing-page-3';
import LandingPage4 from '@/components/landing-pages/landing-page-4';
export default async function Home() {
  return (
    <>
      {/* <LandingPage1 /> */}
      <LandingPage3 />
    </>
  );
}

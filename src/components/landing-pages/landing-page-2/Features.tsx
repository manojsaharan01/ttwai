// Features component to display the services provided by the application in the landing page.

import ServiceImageIcon1 from '@/assets/landing-page-2/icons/DesignerIcon';

const cardContent = [
  {
    icon: ServiceImageIcon1,
    colorText: 'Fast',
    title: 'Build your AI apps',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: ServiceImageIcon1,
    colorText: 'Fast',
    title: 'Build your AI apps',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
  {
    icon: ServiceImageIcon1,
    colorText: 'Fast',
    title: 'Build your AI apps',
    description:
      'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
  },
];

export default async function Features() {
  return (
    <div id='features' className='max-w-6xl mx-auto p-4 space-y-20 my-20'>
      <div className='flex flex-col items-center justify-center'>
        <div className='space-y-7 max-w-3xl'>
          <p className='text-center text-6xl max-sm:text-3xl font-semibold '>
            Explore the power of AI apps generation
          </p>
          <p className='text-lp2-secondary text-center text-lg font-normal md:text-xl md:leading-8 tracking-wide'>
            Highly modular NextJS AI Boilerplate that allows you to ship any AI Apps within days. Save Hours
            of Effort and Use our robust Deployable code.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 '>
        {cardContent.map((item, index) => (
          <div key={index} className='rounded-2xl space-y-8'>
            <div className='flex justify-center -mb-10'>
              <item.icon />
            </div>

            <p className='text-3xl font-semibold'>
              {item.title} <span className='text-lp2-primary'>{item.colorText}</span>{' '}
            </p>
            <p className='font-normal -mt-2 text-lp2-secondary'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

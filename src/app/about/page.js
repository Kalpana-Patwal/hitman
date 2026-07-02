export const metadata = {
  title: 'About Us | Hitman Digital - Digital Marketing Agency in South Delhi',
  description: 'Partner with Hitman Digital, a top digital marketing agency in Delhi. We provide customized digital marketing services that help startups and brands drive growth and achieve real results.',
  keywords: [
    'Hitman Digital',
    'top digital marketing agency in Delhi',
    'digital marketing services',
    'digital marketing agency for startups'
  ],
  alternates: {
    canonical: 'https://hitmandigital.in/about'
  },
  robots: {
    index: true,
    follow: true
  }
};

import About from './about';

export default function Page() {
  return <About />;
}

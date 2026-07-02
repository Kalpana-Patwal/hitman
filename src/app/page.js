// page.js - Server Component
export const metadata = {
  
  metadataBase: new URL('https://hitmandigital.in'),
  title: 'Hitman Digital | Best Digital Marketing Company in South Delhi',
  description: 'Looking for the best digital marketing company in South Delhi? Hitman Digital Marketing Agency offers expert SEO, PPC, social media, and web design services to grow your business. Contact us today!',
  keywords:["Hitman Digital Marketing Agency, Digital Marketing Agency, Digital Marketing Agency in Delhi, Best Digital Marketing Agency in Delhi,digital marketing agency in south delhi"],
  alternates: {
    canonical: 'https://hitmandigital.in/'
  },
  robots: {
      index: true,
      follow: true
    },

  openGraph: {
    title: 'Hitman Digital | Best Digital Marketing Company in South Delhi',
    description: 'Looking for the best digital marketing company in South Delhi? Hitman Digital Marketing Agency offers expert SEO, PPC, social media, and web design services to grow your business. Contact us today!',
    url: 'https://hitmandigital.in/',
    type: 'website',
    siteName: 'Hitman Digital',
    images: [
      {
        url: 'https://hitmandigital.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'Hitman Digital'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hitman Digital | Best Digital Marketing Company in South Delhi',
    description: 'Looking for the best digital marketing company in South Delhi? Hitman Digital Marketing Agency offers expert SEO, PPC, social media, and web design services to grow your business. Contact us today!',
    images: ['https://hitmandigital.in/logo.png'] 
  }
  
};

import HomePage from './HomePage';

export default function Page() {
  return <HomePage />;
} 
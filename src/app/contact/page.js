// src/app/contact/page.js - Server Component
export const metadata = {
  title: 'Contact Us | Hitman Digital Marketing Agency in South Delhi',
  description: 'At our digital marketing and web development agency, we specialize in driving success for your business in the digital world. Get in touch to learn how we can help.',
  keywords: [
    'Contact Hitman Digital',
    'digital marketing agency in Delhi',
    'best SEO agency in South Delhi',
    'web development services', 
    'social media marketing consultation',
    'PPC advertising agency',   
    'branding and strategy experts',
    'website design and development'
  ],
  alternates: {
    canonical: 'https://hitmandigital.in/contact'
  },
  robots: {
    index: true,
    follow: true
  }
};

import ContactUs from './contact';

export default function Page() {
  return <ContactUs />;
}

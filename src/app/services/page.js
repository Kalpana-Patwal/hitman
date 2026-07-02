// src/app/services/page.js - Server Component
export const metadata = {
    title: 'Services | Hitman Digital - Marketing Agency in South Delhi',
    description: 'Boost your business with expert digital marketing services in Delhi. We offer SEO, social media marketing, PPC, and web development to drive traffic and deliver real results.',
    keywords: [
      'digital marketing services in Delhi',
      'SEO agency in Delhi',
      'social media marketing Delhi',
      'PPC advertising experts',
      'web development company in Delhi',
      'content marketing services',
      'Hitman Digital marketing agency',
      'email marketing solutions'
    ],
    alternates: {
      canonical: 'https://hitmandigital.in/services'
    },
    robots: {
      index: true,
      follow: true
    }
  };
  
  import Services from './services';
  
  export default function Page() {
    return <Services />;
  }
  
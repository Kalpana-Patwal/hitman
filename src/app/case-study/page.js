// src/app/case-studies/page.js - Server Component
export const metadata = {
  title: 'Case Studies | Hitman Digital Marketing Agency in South Delhi',
  description: "Discover how we've partnered with clients to create success stories in digital marketing and development.",
  keywords: [
    'Hitman Digital',
    'digital marketing case studies',
    'SEO success stories',
    'PPC campaign results',
    'website development projects',
    'branding case studies',
    'social media growth strategies'
  ],
  alternates: {
    canonical: 'https://hitmandigital.in/case-study'
  },
  robots: {
    index: true,
    follow: true
  }
};

import CaseStudy from './case-study';

export default function Page() {
  return <CaseStudy />;
}

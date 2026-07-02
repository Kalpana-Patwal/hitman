// src/app/contact/page.js - Server Component
export const metadata = {
  title: 'Write for Us – Become a Contributor at Hitman Digital',
  description: '',
  keywords: [
 "digital marketing blog write for us","guest post for marketing","write for us SEO","submit guest post India","digital marketing agency South Delhi"

  ],
  alternates: {
    canonical: 'https://hitmandigital.in/write-for-us'
  },
  robots: {
    index: true,
    follow: true
  }
};

import WriteForUs from './write-for-us';

export default function Page() {
  return <WriteForUs />;
}

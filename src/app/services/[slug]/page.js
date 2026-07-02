import { serviceMeta } from '../content/serviceMeta.js'; // Adjust path as needed


export async function generateMetadata({ params }) {
  const { slug } = params;
  const baseUrl = 'https://hitmandigital.in';
  
 
  const { serviceMeta } = await import('../content/serviceMeta.js');
  
  const metadata = serviceMeta[slug] || {};
    
  return {
    metadataBase: new URL(baseUrl),
    title: metadata.title || `${slug.replace(/-/g, ' ')} | Hitman Digital`,
    description: metadata.description || `Professional ${slug.replace(/-/g, ' ')} services by Hitman Digital Marketing Agency`,
    keywords: metadata.keywords || `${slug.replace(/-/g, ' ')}, Delhi, digital marketing`,
    robots: {
      index: true,
      follow: true,
     
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: metadata.canonical || `${baseUrl}/services/${slug}/`,
    },
    openGraph: {
      title: metadata.title || `${slug.replace(/-/g, ' ')} | Hitman Digital`,
      description: metadata.description || `Professional ${slug.replace(/-/g, ' ')} services by Hitman Digital Marketing Agency`,
      url: `/services/${slug}/`,
      siteName: 'Hitman Digital Marketing Agency',
      
      locale: 'en_US',
      type: 'website', 
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(serviceMeta).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }) {
  const { slug } = params;
  

  const { default: services } = await import('../content/index.js');

  const formattedSlug = slug.replace(/-/g, '_');
  
  if (!services[formattedSlug]) {
    const { notFound } = await import('next/navigation');
    return notFound();
  }
  
  const Component = services[formattedSlug];
  return <Component />;
}
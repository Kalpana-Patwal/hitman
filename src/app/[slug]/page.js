import { getPostData, getAllPostSlugs } from '../../lib/posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  try {
    const postData = await getPostData(params.slug);
    const featuredImage= postData.image || 'https://hitmandigital.in/logo.png';
    
  
    const robotsDirective = postData.robot || postData.robots || 'index,follow';
    
    return {
      metadataBase: new URL('https://hitmandigital.in'),
      title: postData.title || postData.Heading,
      description: postData.description || postData.excerpt || '',
      keywords: postData.keywords || [],
      authors: postData.author ? [{ name: postData.author }] : undefined,
         
    
      alternates: {
        canonical: postData.canonical || `https://hitmandigital.in/posts/${params.slug}/`
      },
      
   
      robots: robotsDirective,
      
      openGraph: {
        title: postData.title || postData.Heading,
        description: postData.description || postData.excerpt || '',
        type: 'article',
        publishedTime: postData.date,
        authors: postData.author ? [postData.author] : undefined,
        url: postData.canonical || `https://hitmandigital.in/posts/${params.slug}/`,
        siteName: 'Hitman Digital',
        images:[
          {
            url:featuredImage,
            width:1200,
            height:630,
            alt: postData.title || postData.Heading,
          }

        ],
        type:"website"
      },
      
      // Twitter Card
      twitter: {
        card: 'summary_large_image',
        title: postData.title || postData.Heading,
        description: postData.description || postData.excerpt || '',
         image: [featuredImage],
      }
    };
  } catch (error) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
      robots: 'noindex,nofollow'
    };
  }
}

export default async function BlogPost({ params }) {
  let postData;
  
  try {
    postData = await getPostData(params.slug);
  } catch (error) {
    notFound();
  }

  // Create JSON-LD structured data
  const canonicalUrl = postData.canonical || `https://hitmandigital.in/posts/${params.slug}/`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: postData.title || postData.Heading,
    description: postData.description || postData.excerpt,
    author: {
      '@type': 'Organization',
      name: postData.author || 'Hitman Digital'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hitman Digital',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hitmandigital.in/logo.png'
      }
    },
    datePublished: postData.date,
    dateModified: postData.date,
    url: canonicalUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    image: postData.image ? {
      '@type': 'ImageObject',
      url: postData.image,
      width: 1200,
      height: 630
    } : undefined,

  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {postData.Heading || postData.title}
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <time dateTime={postData.date}>
              {new Date(postData.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            {postData.author && (
              <>
                <span className="mx-2">•</span>
                <span>By {postData.author}</span>
              </>
            )}
          </div>
           {postData.image && (
         <div className="w-full h-[60vh] relative mb-8">
          <Image
            src={postData.image}
            alt={postData.title || postData.Heading}
            fill
            className="object-cover rounded-md"
            priority
          />{postData.readTime && (
              <>
                <span className="mx-2">•</span>
                <span>{postData.readTime} min read</span>
              </>
            )}
        </div>

        )}

        </header>
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </>
  );
}
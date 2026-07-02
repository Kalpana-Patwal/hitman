export const revalidate = false;
export async function GET() {
    const baseUrl = "https://hitmandigital.in";
  
    const urls = [
      { loc: "/", lastmod: new Date().toISOString() },
      
      { loc: "/contact/", lastmod: new Date().toISOString() },
      { loc: "/about/", lastmod: new Date().toISOString() },
      { loc: "/seo-audit-tools/", lastmod: new Date().toISOString() },
      { loc: "/services/", lastmod: new Date().toISOString() },
      { loc: "/case-study/", lastmod: new Date().toISOString() },
      { loc: "/services/b2b-lead-generation-company-in-delhi-ncr/", lastmod: new Date().toISOString() },
      { loc: "/services/best-app-development-services-in-delhi/", lastmod: new Date().toISOString() },
      { loc: "/services/best-web-development-services-in-delhi/", lastmod: new Date().toISOString() },
      { loc: "/services/google-ads-services-in-delhi/", lastmod: new Date().toISOString() },
      { loc: "/services/seo-services-in-delhi/", lastmod: new Date().toISOString() },
      { loc: "/services/smo-services-in-delhi/", lastmod: new Date().toISOString() },
      { loc: "/services/social-media-marketing-agency-in-delhi-ncr/", lastmod: new Date().toISOString() },
      { loc: "/services/website-designing-services-in-delhi/", lastmod: new Date().toISOString() },
      { loc: "/write-for-us/", lastmod: new Date().toISOString() },
      { loc: "/difference-between-b2b-seo-and-b2c-seo/", lastmod: new Date().toISOString() },
      { loc: "/what-elements-are-foundational-for-seo-with-ai/", lastmod: new Date().toISOString() },
      { loc: "/discovery-phase-google-ads-audit/", lastmod: new Date().toISOString() },
      { loc: "/generate-organic-visits-for-google-business-profile/", lastmod: new Date().toISOString() },
      { loc: "/improving-user-experience-for-local-searches/", lastmod: new Date().toISOString() },
      { loc: "/best-time-to-post-on-instagram-on-a-friday/", lastmod: new Date().toISOString() },
      { loc: "/can-you-see-who-views-your-instagram-profile/", lastmod: new Date().toISOString() },
      { loc: "/seo-for-jewelers/", lastmod: new Date().toISOString() },
      { loc: "/cyber-security-seo/", lastmod: new Date().toISOString() },
      { loc: "/why-is-social-media-an-important-part-of-inbound-marketing/", lastmod: new Date().toISOString() },
      { loc: "/ctr-manipulation-seo/", lastmod: new Date().toISOString() },
      { loc: "/ai-personas-for-b2b-marketing/", lastmod: new Date().toISOString() },
      { loc: "/ai-seo-tools-scale-agile-solutions/", lastmod: new Date().toISOString() },
      { loc: "/improve-website-ranking-with-garage2global/", lastmod: new Date().toISOString() },
      { loc: "/local-seo-services-by-garage2global/", lastmod: new Date().toISOString() },
      { loc: "/boost-organic-traffic-with-garage2global/", lastmod: new Date().toISOString() },
      
     
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.map(
            (url) => `
          <url>
            <loc>${baseUrl}${url.loc}</loc>
            <lastmod>${url.lastmod}</lastmod>
          </url>
        `
          ).join("")}
      </urlset>`;
  
    return new Response(sitemap, {
      headers: { "Content-Type": "application/xml" },
    });
  }
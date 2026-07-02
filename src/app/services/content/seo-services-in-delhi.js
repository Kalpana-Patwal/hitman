"use client"
import React from 'react';
import { Award, Target, LineChart, Settings, Globe } from 'lucide-react';
import{ShoppingCart,Building2,Briefcase,Book,Plane} from 'lucide-react';
import RelatedServices from '@/components/RelatedServices';
import Link from "next/link"


const SEO = () => {
    const industries = [
      { name: "E-commerce", icon: ShoppingCart },
      { name: "Real Estate", icon: Building2 },
      { name: "Healthcare", icon: Briefcase },
      { name: "Education", icon: Book },
      { name: "Blogging and Media", icon: Globe },
      { name: "Retail", icon: ShoppingCart },
      { name: "Travel & Hospitality", icon: Plane }
    ];
  
    return (
      <>
      <div className="min-h-screen  font-times relative mt-10  ">
      {/* Hero Section */}
      <section className="relative bg-[url('/seo1.webp')] bg-cover bg-center text-white py-16 px-4 md:px-8 lg:px-16 min-h-[500px]">
      <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.3)'}}></div>
        <div className=" container my-10 mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Top SEO Services provider Agency in Delhi NCR</h1>
           
            <p className="text-xl leading-relaxed mb-8">
            At Hitman Digital, we pride ourselves on being the best SEO services agency in Delhi NCR. With a proven track record of delivering top-notch results, our expert team builds every SEO strategy to elevate your online presence, boost website traffic, and improve search engine rankings in the day’s world of Digital Marketing
            </p>
           <Link href="/contact">
            <button className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg">
              Get Started Today
            </button>
            </Link>
          </div>
        </div>
      </section>
  
      {/* Introduction */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
            We deliver top <Link href="/services/smo-services-in-delhi/" className='text-blue-500 underline'>SEO  SMO services in Delhi NCR </Link>, helping your busi  ness gain the prestige it deserves. Our expert team works with those companies who are in  startups stages and as well as those who already have well developed brands, creating and customized  strategies that ensure long-term success in the competitive digital world. We are a renowned provider of SEO services in South Delhi​ those customized and personalized strategies involve creative content, selective platforms or implementing tactics that are specifically suited to a brand’s goals, industry, and marketing conditions. We Welcome You to Work with Us and Achieve Success Together.
            </p>
          </div>
        </div>
      </section>
  
      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10 text-blue-950">Why Choose Hitman Digital: Delhi &apos;s Best SEO Companies</h2>
          <p className='text-lg  text-gray-600 text-justify  px-6 font-times pb-8'>We believe in delivering not just results at Hitman Digital, but believe in a long- lasting impact. Choosing Hitman Digital means choosing one of the best SEO services in south Delhi for a strategic, results-driven approach to SEO. With customized strategies, proven expertise, transparency, affordable solutions, and the use of advanced tools. Below, we explore the key reasons why our services stand out. </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="w-12 h-12 text-blue-950" />,
                title: "Customized SEO Plans: ",
                description: "We apply customized SEO plans to maximize your online visibility by focusing on what is best for you. That helps us to target the right audience and achieve better Google rankings, and attract more traffic to your website."
              },
              {
                icon: <Award className="w-12 h-12 text-blue-950" />,
                title: "Proven Success & Expertise: ",
                description: "Our expertise team ensures you that our SEO campaign is best to get your business to the top. We have a proven track record that gives us this type of confidence. "
              },
              {
                icon: <Globe className="w-12 h-12 text-blue-950" />,
                title: "Transparent & Collaborative Approach: ",
                description: "When we make our strategies we always approach a transparent method between our clients that helps us to build trust between us and allows us for better decision-making and continuous improvement."
              },
              {
                icon: <LineChart className="w-12 h-12 text-blue-950" />,
                title: "Cost-Effective Solutions:",
                description: "We plan budget friendly and high-quality SEO that are accessible to businesses within their budgets and they don't need to sacrifice quality. That is why we are a top-notch seo services agency in Delhi."
              },
              {
                icon: <Settings className="w-12 h-12 text-blue-950" />,
                title: "Advanced SEO Tools & Techniques: ",
                description: "We use the latest technologies to make decisions according to data, and make your SEO efforts more target oriented and effective. We can also identify opportunities for improvement and that helps us to stay ahead of your competitor or evolving SEO trends."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-xl transition">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-950">{feature.title}</h3>
                <p className="text-gray-700 text-justify">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  
      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-950">Hitman Digital: The SEO Agency Near Me for Powerful Business Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "On-Page SEO",
                description: "We include elements in On-page SEO like: title tags, meta descriptions, heading tags, URL structure, and images. We also ensure that the content on the page is high-quality, keyword-rich, and relevant to what your audience is searching for. We also provide you additional features like improving internal linking and optimizing page speed that help to improve user experience"
              },
              {
                title: "Off-Page SEO",
                description: "At Hitman Digital, our team focuses on how to influence your rankings on search engines. The most common thing we do is link building, where we give your site high-quality backlinks from authentic websites.This helps your site to gain trust and relevant sign from search engines. We also offer services like media marketing, guest blogging, influencer outreach, etc.., Our goal of off-page SEO is to build credibility, authority, and trust for your website around the internet."
              },
              {
                title: "Local SEO",
                description: "In Local SEO, we make your presence in the local area, by optimizing your Google My Business profile,here we mention your business name, address, and phone number and post positive reviews from your customers. This way we get our goal is your business appear in local search results like Google map. When users search your services like an SEO agency near me they get your details."
              },
              {
                title: "Technical SEO",
                description: "We provide you with Technical SEO support where we improve your backend(website structure, code and server setting) this way search engine crawlers crawl in your site easily and make your site index properly and that helps in your site rank. Here we provide this feature: website speed optimization, mobile friendliness, improving site scallton, fishing broken links, implementing secure HTTPS encryption, and creating a XML sitemap.At Hitman Digital we believe on solid technical foundation that is why we are best seo companies. "
              },
              {
                title: "Content Marketing",
                description: "With the help of Content Marketing we drive organic traffic to your sites. Here we focus on creating and distributing valuable, relevant, and consistent content to attract and engage your targeted audience. We achieve this by including blog posts, articles, videos, podcasts, and more. We believe in content marketing help in link building, social sharing, and increasing user time on the website, that is why people say Hitman Digital is the best seo agency near me."
              },
              {
                title: "E-Commerce SEO",
                description: "In E-Commerce SEO we work in improving online store visibility on search engines and increasing more targeted traffic.This way we also improve the user experience by making the site faster, mobile-friendly and build an easy to navigate site. The main goal of increasing visibility in search result pages is to attract more potential customers and in the end increase your products sales. This is the way of our work in Hitman Digital."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold mb-4 text-blue-950">{service.title}</h3>
                <p className="text-gray-700 text-justify">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  
      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-950">The Hitman Digital Approach: How We Deliver Results</h2>
           <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            step: "1",
            title: "Goal Setting",
            description: "At Hitman Digital, we believe in results-oriented strategies. That is why we have the best seo services in Delhi. So our next step is setting to understand your unique business objectives, target audience, and industry challenges. For increasing organic traffic, improving your website's conversion rate, or boosting your local visibility. We believe goal setting isn;t just a task - it's the foundation for everything we do, and ensure that every strategy is tailored for your business's success. "
          },
          {
            step: "2",
            title: "Strategy Development",
            description: "Once we have a clear understanding of your goals then we move to strategy Development. This is where the Hitman Digital  magic happens. We create a goal oriented SEO strategy to achieve your objectives. Here, we combine data from your Site SEO Audit with insights into your market and competitors to develop a plan that maximizes your site's potential. At Hitman Digital , we ensure that every element of the strategy is synchronized with your business needs, so here you can experience long-term growth and consistent results."
          },
          {
            step: "3",
            title: "Execution",
            description: "In this step we bring our strategy in life, This is where we roll up our sleeves and get to work. Our expert team executes the plan with accuracy, implementing on-page optimization, improving site speed, optimizing content for the right keywords, and executing off-page strategies like link building and local SEO, At Hitman Digital, whether you want fine-tuning in technical aspects, enhancing user experience, or create attractive content, our expert team always says yes."
          },
          {
            step: "4",
            title: "Monitoring and Optimization",
            description: "After exciting our strategy Hitman Digital work is not finished, we provide you services that help you continuous growth and refinement. We believe that SEO is not a one-time effort, it's a continuous journey. That is why SEO is a constantly evolving field, and we always stay ahead because of closely monitoring trends and algorithms updates regularly track the performance of your site, analyzing keyword rankings, traffic patterns, bounce rates, and conversions. That is why Hitman Digital is the best provider of "
          }
        ].map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-950 text-white rounded-full flex items-center justify-center font-bold">
              {step.step}
            </div>
            <div>
             <h3 className="text-xl font-semibold mb-2 text-blue-950">{step.title}</h3>
              <p className="text-gray-700 text-justify text-sm">
                {step.description}
                {step.step === "4" && (
                  <>
                    <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                      SEO SMO services in Delhi NCR
                    </Link>.
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  
        </div>
      </section>
  
      {/* Industries We Serve */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800 text-center">Industries We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-6 rounded-lg shadow-sm">
                  <industry.icon className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700 font-medium">{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
  
  
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-600 to-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Are You Ready to Uncover the Full Power of Your Online Presence?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
          Release  your brand&apos;s true potential with Hitman Digital. We&apos;ll help you to activate powerful strategies to dominate the digital space, increase traffic, engagement, and growth. It&apos;s time to set free your online presence and lead the competition just like Hitman Digital, provider of the best SEO services in Delhi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link href="/contact">
            <button className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
              Get Started Now
            </button>
            </Link>
             <Link href="/contact">
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-950 transition">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </section>
       
            <RelatedServices currentService="seo" />
    </div>
    </>
      
    );
  };
  export default SEO;

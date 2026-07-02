"use client"
import React from 'react';
import RelatedServices from '@/components/RelatedServices';
import Link from 'next/link';
import { useState } from 'react';
import{ShoppingCart,Building2,Briefcase,Book,Globe,Plane} from 'lucide-react';
import { ChevronUp, ChevronDown } from 'lucide-react';


const Lead = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const benefits = [
    {
      icon: "📈",
      title: "Find more potential customers",
      description: "Lead Generation helps you to connect to people and businesses who need what you are offering. Instead of waiting for customers to find you, you can find them."
    },
    {
      icon: "💰",
      title: "Grow Your Revenue",
      description: "By lead generation you can target the right audience that can convert more leads into paying customers. When you generate more leads then your chances of getting revenue also increase."
    },
    {
      icon: "⏱️",
      title: "Save Time and Money",
      description: "When you get quality leads who are interested in your product then you can focus on marketing effort and engage them in your product. This way you save your time and waste money on trying to reach people who are not interested in your product."
    },
    {
      icon: "🤝",
      title: "Build Strong Relationships",
      description: "Lead generated is about starting a conversation not about making sales. When you choose lead generation you can engage with your customers, answer their questions and build trust between them and make long lasting relationships."
    },
    {
      icon: "🚀",
      title: "Scale Your Business",
      description: "Lead Generation also helps you in business grow and also help you reach in new markets and industries. It allows you to continuous find fresh opportunities and stay ahead of your competitor."
    }
  ];

  const industries = [
    { name: "E-commerce", icon: ShoppingCart },
    { name: "Real Estate", icon: Building2 },
    { name: "Healthcare", icon: Briefcase },
    { name: "Education", icon: Book },
    { name: "Blogging and Media", icon: Globe },
    { name: "Retail", icon: ShoppingCart },
    { name: "Travel & Hospitality", icon: Plane }
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  
  const services = [
    {
      title: "Content Marketing",
      description: "We create and distribute valuable, relevant, and consistent content to attract and engage your target audience.",
      bullets: [
        "Blog posts, articles, and studies: Provide useful information to educate your audience and position your brand as a trusted source.",
        "E-books, whitepapers, and guides: Offer in-depth resources to capture leads via gated downloads.",
        "Videos and infographics: Use engaging visual content to explain complex concepts and showcase your offerings.",
        "In this way, we can give knowledge to our customers and also generate traffic on your website and generate leads. And our company is the best b2b content marketing agency in Delhi.."
      ],
      color: "bg-blue-100"
    },
    {
      title: "Email Marketing",
      description: "Email Marketing is a direct form of communication that helps send emails to your leads and subscribers, build a relationship with your potential customers, and encourage them to purchase.",
      bullets: [
        "Newsletters: Here, you can send regular emails to your subscribers to provide them with regular updates, insights, and content that is related to your customers. That helps to keep your audience engaged.",
        "Lead Engagement Emails: These are automated emails designed for moving leads through mail to sales pages. For e.g., you might send a series of emails that educate a lead about your product and guide them towards purchase.",
        "Promotions & Offers: We send a time-limited offer, discounts, or exclusive deals where customers have to take immediate action, like making a purchase and signing up for the services.",
        "In this way, we can build relationships with our customers by providing valuable content and personalized offers to move leads towards becoming customers."
      ],
      color: "bg-indigo-100"
    },
    {
      title: "Social Media Campaigns",
      description: "Through Social Media Campaigns, we aim to attract leads through social media platforms like Facebook, Instagram, LinkedIn, and Twitter.",
      bullets: [
        "Social Media Post organic: This post is a non-paid post that you share from your social media profile. That might include updates, entertaining content, or information posts that can relate to your customer or audience.",
        "Paid Social Media Ads by Google Ads: Here, you provide targeted ads that you pay for. You can define an audience based on their location, area, interest, and behaviour, which can help to generate leads.",
        "Contests, Polls, and Giveaways: In this way, you can engage your users on your sites, through interactive post design, and ask them what they like and dislike through polls, and provide a prize exchange for signing up",
        "In this way, you can increase your brand awareness, connect with your potential customers, and also drive traffic to your website"
      ],
      color: "bg-purple-100"
    },
    {
      title: "SEO Optimization",
      description: "Improve visibility in search results to drive organic traffic",
      bullets: [
        "Keyword research to target high-intent search terms",
        "On-page optimization to improve content relevance",
        "Link building strategies to boost domain authority"
      ],
      color: "bg-teal-100"
    },
    {
      title: "Pay-Per-Click Advertising",
      description: "This pay-per-click helps you earn money and leads when someone clicks on your ads. These ads facilities are provided by many platforms like Google ads and social media ads.",
      bullets: [
        "<a href='/services/google-ads-services-in-delhi/' className='text-blue-600 hover:underline'>Google Ads</a>: You can research keywords that are regularly searched by users, and then traffic occurs on your site through those ads, and you get an audience.",
        "Remarketing: In this remarketing strategy, we can attract those audiences who visit our site and interact with our brand and not convert into customers. These ads aim to bring them back and make them your customers. And you also get benefits in b2b lead generation."
      
      ],
      color: "bg-rose-100"
    },
    {
    title: "SEO (Search Engine Optimization)",
      description: "Search Engine Optimization is used to optimize your website and content to rank higher in SERP (search engine result page), which helps customers to reach your website more easily. We are the best SEO agency in Delhi. ",
      bullets: [
        "Keyword optimization: Choose those words that your targeted audience is searching and add them into your content so that your website will easily rank higher in search results.",
        "On-page SEO: Here we optimize your title, heading, and meta description, which help your site to rank high.",
        "Off-page SEO: Here, we provide valid backlinks to websites that have high Domain Authority and Page Authority.",
        "In this way, we can rank our site in Google SERP and make our site easier for the customer to reach."
      ],
      color: "bg-blue-100"
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <>
    <div className="min-h-screen font-times mt-10 relative bg-gray-50">
      {/* Hero Section */}
      <section className="relative   bg-[url('/Lead-Generation-1.webp')] bg-cover bg-center   text-white py-16 px-4 md:px-8 lg:px-16 min-h-[500px]" >
      <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.3)'}}></div>
      
        <div className=" relative  my-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto  text-center">
            <h1 className="text-4xl  md:text-5xl font-time font-bold mb-6">B2B Lead Generation Company in Delhi NCR</h1>
            <p className="text-xl leading-loose mb-8">Transform your business growth with Hitman Digital Marketing Agency &apos;s proven lead generation strategies</p>
            <Link href="/contact">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Get Started
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
            Greetings from Hitman Digital Marketing Agency-We are B2B Lead Generation Company located in Delhi NCR, dedicated to providing cost-effective and best lead generation solutions. Whether you &apos;re a large B2B firm or a small business looking to expand your market reach no problem, our personalized strategies are designed to help you grow and succeed digitally.
            </p>
          </div>
        </div>
      </section>

      {/* What is Lead Generation */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-times mb-6 text-blue-950">Do You Know What is Lead Generation?
            </h2>
            <p className="text-gray-700 font-times text-lg leading-relaxed">
            Lead generation is the process where we identify potential customers or businesses that are likely to be interested in your product. At Hitman Digital Marketing Agency, we use proven strategies by top strategists to help you connect with the right Potential clients. As a B2B lead generation company in Delhi NCR, we specialize in expanding your reach and driving sales growth. Our personalized approach ensures that your business generates high-quality leads that convert into long-term clients, delivering real, tangible results through both large-scale and targeted marketing effortsegiesand in detailed communication and marketing initiatives, the result achieved is tangible.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-blue-950">The Hitman Digital Advantages : Why Choose Us ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Personalized Strategies",
                description: "Campaigns are designed that way it matches your Business-Specific, ensuring every detail receives fair importance. And we make strategies that way, you get b2b or b2c lead generation.."
              },
              {
                title: "Expert Team",
                description: "Our specialties have worked with various industries to create campaigns that suit the unique needs of each one. That makes our company the best in demand generation agency."
              },
              {
                title: "Affordable Pricing",
                description: "We provide cost-effective services designed to deliver the best possible return on investment and also provide you b2b lead generation services."
              },
              {
                title: "Data-Driven Insights: ",
                description: "We use analytical tools to make decisions, strategies, or actions. Our insights are based on actual data not any intuitions or guesswork. So, we can manage campaigns for result-oriented execution. "
              },
              {
                title: " Multi-Channel Approach",
                description: "We also manage your lead generation through various marketing channels to attract and engage potential leads. Like: Social Media, Email, Paid-per click etc."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-slate-700">{feature.title}</h3>
                <p className="text-blue-900">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      
<section className="py-16 bg-white flex flex-col md:flex-row items-center justify-between px-6">
      {/* Left side - Vertical Services Carousel */}
      <div className="w-full md:w-3/5 mb-10 md:mb-0">
        <div className="border-2 border-blue-900 rounded-lg p-4 shadow-lg bg-white h-96">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-blue-900">Our Services</h3>
            <div className="flex space-x-2">
              <button 
                onClick={prevSlide}
                className="p-1 rounded-full bg-blue-900 text-white hover:bg-blue-700 transition"
              >
                <ChevronUp size={20} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-1 rounded-full bg-blue-900 text-white hover:bg-blue-700 transition"
              >
                <ChevronDown size={20} />
              </button>
            </div>
          </div>
          
          {/* Vertical scrollable container */}
          <div className="overflow-y-auto h-72 pr-2 custom-scrollbar">
  {services.map((service, index) => (
    <div 
      key={index} 
      className={`mb-4 p-4 rounded-lg transition-all duration-300 border-l-4 ${index === activeIndex ? `${service.color} border-blue-900` : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
      onClick={() => setActiveIndex(index)}
    >
      <h4 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h4>
      <p className={`text-gray-700 mb-3 ${index === activeIndex ? 'block' : 'hidden'}`}>
        {service.description}
      </p>
      {index === activeIndex && (
        <ul className="list-disc list-inside space-y-2 text-gray-800">
  {service.bullets.map((bullet, i) => (
    <li key={i} className="text-sm">
      {bullet.includes('Google Ads') ? (
        <span dangerouslySetInnerHTML={{ 
          __html: bullet.replace(
            'Google Ads', 
            '<a href="/services/google-ads-services-in-delhi/" class="text-blue-600 ">Google Ads</a>'
          ) 
        }} />
      ) : (
        bullet
      )}
    </li>
  ))}
</ul>
      )}
    </div>
  ))}
</div>

          {/* Indicator dots */}
          <div className="flex justify-center mt-2 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-blue-900 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Right side - Main Heading */}
      <div className="w-full md:w-2/5 md:pl-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 leading-tight">
          Powerful Lead Generation Solutions at Hitman Digital
        </h1>
      </div>
    </section>

<section className="w-full py-20 bg-gradient-to-b from-slate-100 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Why <span className="text-blue-600">Lead Generation</span> Matters
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Unlock key benefits with Delhi&apos;s premier B2B marketing company
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${
                hoveredIndex === index ? 'scale-105 shadow-xl' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600`}></div>
              <div className="p-8">
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500 ${
                hoveredIndex === index ? 'w-full' : 'w-0'
              }`}></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/contact">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
          </Link>
        </div>
      </div>
    </section>

      {/* How We Work */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">How We Work</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col space-y-8">
              {[
                {
                  step: 1,
                  title: "Understanding Your Goals",
                  description: "We estimate your goals and understand how your customers' needs will be met."
                },
                {
                  step: 2,
                  title: "Strategy Development",
                  description: "Our team develops a customized lead generation plan tailored to your needs."
                },
                {
                  step: 3,
                  title: "Execution",
                  description: "We execute your campaign using a multichannel approach for maximum impact."
                },
                {
                  step: 4,
                  title: "Monitoring and Optimization",
                  description: "Continuous monitoring and adjustment of campaigns to maximize effectiveness."
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
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
      <section className="bg-gradient-to-r from-slate-600 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Generate More Leads?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our professionals steer your company to success and obtain effective leads for your enterprise.
          </p>
        <Link href="/contact"><button className="bg-white text-blue-900 px-8 py-3 font-times  rounded-lg font-semibold hover:bg-blue-50 transition">
            Contact Us Today
          </button></Link>  
        </div>
      </section>

    <RelatedServices currentService="lead" />
    </div>
    </>
  );
};

export default Lead
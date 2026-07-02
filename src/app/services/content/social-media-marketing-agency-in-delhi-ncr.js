// app/smm/page.jsx
"use client"
import React from 'react';
import Link from 'next/link';
import { 
  Users, TrendingUp,Zap,Briefcase,
  Target,  MessageCircle,BarChart2,
  Layout, 
  BarChart, 
  PenTool,
  Building2,
  Music,
  Hotel,
  CheckCircle,
  Share2
} from 'lucide-react';
import RelatedServices from '@/components/RelatedServices';

const services = [
  {
    title: "Content Creation and Management",
    content: "We publish organic and professional content within your targeted audience niches on Facebook, Instagram, LinkedIn, and Twitter.",
    icon: Layout
  },
  {
    title: "Paid Advertising Campaigns",
    content: "These targeted pay-per-ad promotions have high rates of return that will take your product to the next level.",
    icon: Target
  },
  {
    title: "Brand Strategy Development",
    content: "As your Social Media Strategists we help in the development of a conceptual framework that will help harmonize the brand in the identified social media platforms.",
    icon: Share2
  },
  {
    title: "Influencer Marketing",
    content: "In this case, gain approval from those stakeholders involved in the industry so that the message gets out and people begin to accept the message.",
    icon: Users
  },
  {
    title: "Social Media Analytics and Reporting",
    content: "Track the success of your campaigns using further metrics to optimize their effectiveness for advanced results.",
    icon: BarChart
  }
];

const industries = [
  {
    name: "Interior Designing",
    description: "To attract clients and sell your services, showcasing the designs you want to offer is an important step.",
    icon: PenTool
  },
  {
    name: "Restaurants",
    description: "Gaining your audience and attracting more traffic to your business premises.",
    icon: Building2
  },
  {
    name: "Real Estate",
    description: "Business development and lead generation for property sales.",
    icon: Building2
  },
  {
    name: "Hotels",
    description: "Building up your reputation for your online business and or sales bookings.",
    icon: Hotel
  },
  {
    name: "Musicians",
    description: "Getting more followers and the marketing of your work.",
    icon: Music
  }
];

const advantages = [{
  title:"Social Media Page Management",
  description:"Social Media Page Management involves handling and managing your social media platform profile like: Facebook, Instagram, LinkedIn, and X(Twitter). This included posting regular content, engaging with followers, responding to the comments, and also ensuring that your brand name stays top in Google search. The main goal of SMM is to build a positive image of your brand online. ",
},
{
  title:"Sponsored Ads:",
  description:"Sponsored ads are paid advertisements on social media platforms that target specific environment and user behaviors. These ads you can see in your feeds, stories, and sidebars. Sponsored ads are highly customizable, here you can reach your specific audiences based on these factors like location, age, and interests, etc.., Their goal is to increase your brand visibility and drive traffic to your sites and help to convert views into customers.",
},
{
title:"Creative Branding:",
description: (
<p>
Creative Branding means designing and posting your brand in a way that can understand and match with your target audience. This includes creative eye-catching visuals, a unique design, and a consistent style across all social media platforms.{" "}
Hitman Digital is the best 
<Link
  href="https://hitmandigital.in/services/social-media-marketing-agency-in-delhi-ncr/"
  className="text-blue-800 hover:text-blue-950"
  target="_blank"
  // rel="noopener noreferrer"
>
social media marketing agency in Delhi NCR
</Link>{" "}
, providing branding solutions that differentiate your business and help connect emotionally with your audience.
</p>)
},  
{
  title:"Influencer Marketing:",
  description:"Influencer Marketing involves collaborating with individuals who have a strong following on social media to promote your products or services. Hitman Digital has relationships with celebrities, creators, influencers, and YouTubers; they have good reach and credibility to endorse your brand. So, your brand value is boosted like a sky rocket.",
},
{
  title:"Social Media Campaigns:",
  description:"Social media campaigns are strategic efforts designed to achieve specific goals such as increasing brand awareness, website traffic, or promoting a product launched. We Hitman Digital Provide you best organic content, sponsored ads, and engagement tactics. A well-executed campaign that reaches the right audience and maximizes results.",
}
];

const businessValues = [
  {
    icon: BarChart,
    name: "Accountability",
    description: "At Hitman Digital, we hold ourselves accountable for the performance of your social media campaigns. We track important data and deliver the results we promise, keeping you updated every step of the way."
  },
  {
    icon: CheckCircle,
    name: "Quality",
    description: "At Hitman Digital, quality is at the heart of everything we do. From designing eye-catching graphics to creating engaging content and running optimized campaigns, we ensure your social media marketing efforts deliver top results."
  },
  {
    icon: TrendingUp,
    name: "Proactivity",
    description: "Hitman Digital's team is always proactive. We monitor industry trends, track audience behavior, and suggest new approaches before issues arise, ensuring your brand stays ahead of the competition."
  },
  {
    icon: Zap,
    name: "Agility",
    description: "At Hitman Digital, we pride ourselves on agility. If a social media trend shifts or new platform features emerge, we quickly adjust your campaigns to take advantage of those changes, keeping your business competitive in a fast-paced environment."
  }
];

const strategies = [
  {
    icon: Briefcase,
    title: "Custom Social Media Strategies",
    description: "We are creating personalized social media strategies that help in your branding and ensure your message reaches the right audience. That is why we are the best SMM marketing agency."
  },
  {
    icon: Layout,
    title: "Engaging Content Creation",
    description: "Our team specializes in creating eye-catching visuals posters and engaging content that connects with your audiences."
  },
  {
    icon: Target,
    title: "Targeted Advertising",
    description: "Through paid social media ads campaigns, we target specific ages, categories, locations, and persons interests. That ads reach the people who are likely to convert into your customers."
  },
  {
    icon: MessageCircle,
    title: "Community Engagement",
    description: "We also manage your social media account, respond to the comments, messages on your behalf and engage with your followers and build a loyal community around your brand."
  },
  {
    icon: BarChart2,
    title: "Analytics & Optimization",
    description: "We track and analyze the performance of the campaigns, we time to change in the campaigns to optimize the result and ensure continued growth over time."
  }
];

export default function SMM() {
  return (
    <div className="min-h-screen mt-10 relative font-times bg-gray-50">    
      <section className="relative bg-[url('/smm1.webp')] bg-cover bg-center text-white py-16 px-4 md:px-8 lg:px-16 min-h-[500px]">
      <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.3)'}}></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-14">
          Social Media Marketing Agency in Delhi NCR for Website Growth
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          In today’s Digital World, Social Media has created an unshakable platform where businesses come to connect with consumers and increase their sales. At Hitman Digital, we take pride in being the best social media marketing agency in Delhi NCR. We offer unique strategies to boost your business’s presence, ensuring that you stand out and succeed in the current Digital Environment. 
          </p>
        </div>
      </section>
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-950 text-center">
          Join with Hitman Digital Social Media Agency in Delhi to Boost Business Growth
        </h2>
        
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          In today&apos;s fast-paced digital world, social media has become the ultimate platform for businesses to connect with their audience, build brand awareness, and boost growth. Partnering with <span className="font-semibold">Hitman Digital</span>, one of the <Link className="text-blue-800 hover:text-blue-950" href="https://hitmandigital.in/">best digital marketing Company in Delhi NCR</Link>, you&apos;ll stay ahead of trends and quickly achieve measurable results.
        </p>
        
        <h3 className="text-xl md:text-2xl font-bold mb-8 text-blue-950 text-center">
          Business Context Points For You
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          {businessValues.map((value, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div> 
                <h3 className="text-xl font-semibold text-blue-950">{value.name}</h3>
              </div>
              <p className="text-gray-800">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Contact Hitman Digital Today
          </Link>
        </div>
      </div>
    </section>
  
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-950 text-center">Industry-Specific Expertise on SMM services in South Delhi</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <industry.icon className="w-6 h-6 text-blue-600" />
                  </div> 
                  <h3 className="text-xl font-semibold text-blue-950">{industry.name}</h3>
                </div>
                <p className="text-gray-800">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-950 text-center">
        The Hitman Digital Advantages: Why Choose Us?
        </h2>
        <p className='text-lg text-justify pb-10 text-gray-700'>If you choose us you get many benefits that distinguishes you from the competition. Our experts know social media marketing and they are experienced, so your campaigns are effective. Every campaign is unique and creative by Hitman Digital, that makes your brand stand out  online. Our experts tell engaging stories, understand trends, and experience social media marketing.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantages, index) => (
            <div key={index} className="flex flex-col bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-blue-950">{advantages.title}</h3>
              </div>
              <p className="text-gray-700 text-justify text-sm">{advantages.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-950 text-center">
          How Hitman Digital Helps You Grow with Social Media
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <strategy.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-950">{strategy.title}</h3>
              </div>
              <p className="text-gray-700">{strategy.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 p-6 md:p-8 rounded-lg border border-blue-100">
          <p className="text-gray-800 text-center">
            With <span className="font-semibold text-blue-600">Hitman Digital</span>, we drive your social media marketing to meaningful results and take your business to the next level. This is why we are renowned as the best <span className="font-semibold">Social Media Marketing agency in Delhi NCR</span>.
          </p>
        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-600 to-slate-800 text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Started Today!</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Contact Hitman Digital Marketing Agency, currently the premier social media marketing agency for small businesses, to talk about how you reach out to your target market with our uniquely tailored service.
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Contact Us  
            </button>
          </Link>
          
          <p className="mt-8 text-lg font-light italic">
            We should discuss developing the efficient social media strategy for you today!
          </p>
        </div>
      </section>

      <RelatedServices currentService="smm" />
    </div>
  );
}
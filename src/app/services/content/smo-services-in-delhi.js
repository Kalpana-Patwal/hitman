// app/smo/page.js

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Building2, Briefcase, Book, Plane } from 'lucide-react';
import { Users, Target, BarChart2, Globe, MessageCircle, PieChart, Share2, LineChart } from 'lucide-react';
import RelatedServices from '@/components/RelatedServices';



export default function SMO() {
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
    <div className="min-h-screen mt-10 font-times relative bg-gradient-to-r from-slate-600 to-slate-800">
      {/* Hero Section */}
      <section className="relative bg-[url('/smo1.webp')] bg-cover bg-center text-white py-16 px-4 md:px-8 lg:px-16 min-h-[500px]">
      <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.3)'}}></div>
        <div className="container my-10 mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">SMO Service in Delhi NCR for Your Organic Growth </h1>
           
            <p className="text-xl leading-relaxed mb-8">
            Here at Hitman Digital , we focus and deliver the best SMO(Social Media Optimization) services in Delhi for companies who are looking to grow their followers, improve interactions, or boost their website traffic and also want to know how to improve their connections to readers and customers. And increase engagement across all platforms.
            </p>
            
            <Link href="/contact">
            <button className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg">
              Get Started Today
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* What is SMO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-950">What Are SMO Services?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Social Media Optimization, or SMO, is the process by which the organization can make its social media profiles and contents easier to be indexed on search engines, improve customer engagements, and broker more traffic. The following comprehensive social media optimization services will help your business remain relevant in the highly saturated market.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-950">
          Why Choose Hitman Digital – The Best Social Media Optimization Company in Delhi</h2>
          <div className="grid grid-cols-1 text-justify text-sm md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="w-12 h-12 text-blue-950" />,
                title: "Tailored Strategies",
                description: "At Hitman Digital, we understand that no two businesses are similar, That’s why we don’t rely on the same strategies approach. Instead, we create customized social media strategies that match and prefer your needs and objectives. Work with us, and with our specific strategies,we provide you with a certain type of content that speaks directly to your audience, optimized posting schedules, and measurable results that align with your goals, whatever you’re aiming to increase website traffic, boost brand awareness, or want customer loyalty. "
              },
              {
                icon: <Users className="w-12 h-12 text-blue-950" />,
                title: "Experienced Team",
                description: " At FarSight, Hitman Digital is backed by a team that has a lot of experience and expertise in the digital marketing field. We are known as the best SMO agency in Delhi, Whether it’s Facebook, Instagram, LinkedIn, or Twitter, our experienced team knows how to engage audiences, optimize maximum form posts, and track performance for refine strategies on a continuous basis."
              },
              {
                icon: <LineChart className="w-12 h-12 text-blue-950" />,
                title: "Affordable Solutions",
                description: "At Hitman Digital, we believe that quality social media optimization is available to all sizes of businesses. Our affordable solutions ensure that even small startups can benefit from expert-level social media strategies without thinking about their bank balance. We offer you various budgets and requirements that fit in your packages where you are looking for basic optimization or a more social media approach, we welcome you."
              },
              {
                icon: <Globe className="w-12 h-12 text-blue-950" />,
                title: "Cross-Platform Expertise",
                description: "In today’s interconnected world, it's most important to have a presence across multiple social media platforms. Hitman Digital has specialized in all the popular platforms, which means that we don’t just specialize in one social platform - we can help you optimize your presence on all the major platforms. From Facebook to Twitter and Instagram to LinkedIn etc."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-950">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-950">Our Comprehensive SMO Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Share2 className="w-12 h-12 text-blue-950" />,
                title: "Profile Optimization",
                description: "They help to improve your social media accounts presence and make them correspond to your business."
              },
              {
                icon: <MessageCircle className="w-12 h-12 text-blue-950" />,
                title: "Content Creation and Scheduling",
                description: "Our team develops posts, infographics, and videos, preferring to target an audience and its interests."
              },
              {
                icon: <Users className="w-12 h-12 text-blue-950" />,
                title: "Community Management",
                description: "Create relevant conversations with your audience and respond promptly in order to create engagement."
              },
              {
                icon: <BarChart2 className="w-12 h-12 text-blue-950" />,
                title: "Paid Social Media Campaigns",
                description: "Analyze metrics and improve reach and conversions for your ads through campaigns on Facebook, Instagram, or LinkedIn."
              },
              {
                icon: <PieChart className="w-12 h-12 text-blue-950" />,
                title: "Analytics and Reporting",
                description: "Get relevant reports and real-time analysis of your social media campaign's achievements."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-950">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center pt-10 mb-16 text-blue-950">Solve Social Media Optimization Challenges for Startups with Hitman Digital</h2>
          <div className="grid grid-cols-1 text-justify md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              {
                title: "Limited Affordable Budget and Resources:",
                description: "It's the first challenge which startups face. They often operate with tight budgets and limited resources, which can make it harder to invest in paid advertisement,and higher professional social media management teams. So, Hitman Digital offers affordable social media optimization packages that deliver high-quality results without breaking their capital. Our solutions focus on delivering value while working within your startup’s budget."
              },
              {
                title: "Building Brand Awareness from Scratch:",
                description: "Startups face problems to get noticed in a crowded digital marketplace, and make it harder to build brand awareness and recognition of a brand quickly.At Hitman Digital we help startups to develop a strong presence online by creating targeting content and utilizing our personalized social media optimization strategies. We build your brand presence across all platforms that help your business to build trust by content marketing, influence collaboration or spreading engaging storytelling."
              },
              {
                title: "Inconsistent Content Creation and Quality:",
                description: "They always lack time or resources to create regular content, high-quality content that engages with their audience. This inconsistency reduces the effectiveness of social media campaigns and leads to diminished brand visibility.We offer them content creation services that maintain quality and consistency. Through strategic content calendars, they ensure a regular stream of engaging posts that synchronizes with your startup’s brand. Additionally our team focuses on high quality and visual and written content and provides professionals help to evaluate your social media presence."
              },
              {
                title: "Difficulty in Identifying and Engaging the Right Audience",
                description: (
                <p>
                  One of the most important challenges for startups is knowing whom to target and how to attract them into their site. Without proper market research and understanding of audience behavior, startups can waste their time, money and resources creating content and campaigns that lead to their low conversion rates.At Hitman Digital, we provide data-driven personalized strategies and audience research to identify the best target audience. Our team also analyzes  your competitors, conducts market research, and segment audiences to create personalized strategies. That is why we are the best{" "}<Link href="/services/seo-services-in-delhi/" className="text-blue-800 hover:text-blue-950">SEO</Link>{" "} SMO services in Delhi NCR.
                </p>)
              },
              {
                title: "Keeping up with social media trends",
                description: "The startups may fall behind due to the result of not adapting to new trends or audience preferences. Because their preference shifts from time to time and Social media trends change rapidly.Hitman Digital ensures you that your startup can stay ahead of your competitors by continually monitoring industry trends, or Google algorithm changes and evolving social platforms. We work with the latest strategies, including the use of AI, video content, to ensure startups remain relevant and competitive in the field"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold  text-blue-950">{benefit.title}</h3>
                {typeof benefit.description === "string" ? (
    <p className="pt-6 text-gray-700">{benefit.description}</p>
  ) : (
    <div className="pt-6 text-gray-700">{benefit.description}</div>
  )}
  </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-950 text-center">Hitman Digital: Serving a Range of Industries with Expert Marketing</h2>
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

      {/* How We Work */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-blue-950">The Hitman Digital: How We Deliver Results</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: "1",
                  title: "Understanding Your Goals",
                  description: "The first step is, therefore, understanding your goals and the market or demographic you're likely to be serving."
                },
                {
                  step: "2",
                  title: "Strategy Development",
                  description: "Here at Smitex, our team works on a strategy that will help you improve your social media accounts."
                },
                {
                  step: "3",
                  title: "Implementation",
                  description: "We implement solutions on Facebook services and Instagram campaigns and the like."
                },
                {
                  step: "4",
                  title: "Performance Tracking",
                  description: "The current trend of campaign monitoring helps your campaigns to be effective in delivering tangible outcomes."
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-950 text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-blue-950">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-600 to-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Enhance Your Social Media Presence?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Looking for an<Link href="/" className="text-blue-400 underline"> SMO agency in Delhi</Link>  or do you require overall social media solutions? Our team of professionals is here to assist you.
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
      <RelatedServices currentService="smo" />
    </div>
  );
}
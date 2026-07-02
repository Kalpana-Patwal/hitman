'use client';

import React from 'react';
import { CheckCircle, Target, BarChart2, Users, Search, FileText,Check } from 'lucide-react';
import RelatedServices from '@/components/RelatedServices';
import Link from 'next/link';


const PPC = () => {
  const benefits = [
    {
      title: "Reach their audience instantly",
      description: "Google Ads provide you features where you can connect immediately with your target audience, as soon as your campaign starts and goes live. This instant visibility allows you to gain attention to potential customers without facing a waiting game and also ensure that you get target audiences."
    },
    {
      title: "Gain high-quality leads",
      description: "With Google Ads, you can target audiences based on their search intent, that means your ads shown to those people who are already interested in your services or products. This way Hitman Digital provides you high-quality leads that want to convert into your customers."
    },
    {
      title: "Increase website traffic",
      description: "Google Ads helps drive relevant traffic to your website. Through highly targeted campaigns, your ads show up in front of people actively looking for solutions, boosting the number of visitors to your site. As traffic increases, so do the opportunities for conversions, sales, and customer engagement, making Google Ads an essential tool for growing your online presence."
    },
    {
      title: "Build brand recognition",
      description: "Even when users don't click on your ads, they're still seeing your brand name and messaging. This repeated exposure is crucial for increasing brand recognition. Over time, users will become familiar with your business, this way we not only build trust we also remember them when they want to purchase or take services from you in the future."
    }
  ];
  return (
    <>
      

      <div className="min-h-screen relative font-times mt-10 from-gray-50 to-white">
      <section className="relative bg-[url('/google-ads-1.webp')] bg-cover bg-center text-white py-16 px-4 md:px-8 lg:px-16 min-h-[500px]">
      <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.3)'}}></div>
          <div className="relative my-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Best Google Ads Service Provider in Delhi</h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              At Hitman Digital, we specialize in delivering the best Google Ads services in Delhi NCR, in the fast-paced world of digital marketing. Whether you&apos;re a local startup or an established brand, our team provides you with the best Google Ads campaigns.
              </p>
           <Link href="/contact">
              <button className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition shadow-lg">
                Get Started Today
              </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
              In today’s competitive Digital marketing, standing our online is more important than ever. Hitman Digital is proud to be recognized as the best google adwords marketing agency in delhi, delivering unparalleled advertising solutions that help businesses to capture the attention of the right audience. With Hitman Digital, you don’t just get a service - you get a partner who is invested in your success. So, let’s grow your business together. Contact us today to start your journey with the best Google Ads services in Delhi NCR! 

              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10  text-blue-950">Why choose us? Expert Google ads account managers for your success </h2>
            <p className='text-lg px-1 pb-6 text-blue-950 text-justify'>We believe that every business deserves specific, high-performing Google Ads campaigns that drive measurable results. Our Google Ads account managers are dedicated to understanding your unique goals and optimizing your campaigns to success. At Hitman Digital we believe in continuous improvement, transparency, and client satisfaction, that is why we are the best  Google Ad Agency in Delhi. Below point’s given how we help:</p>
            <div className="grid grid-cols-1 text-justify tetx-lg md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[{ icon: <Search className="w-12 h-12 text-blue-600" />, title: "Targeted Keyword Research with SEO",
                link: "https://hitmandigital.in/services/seo-services-in-delhi/", description: "At this point, we start Google Ads campaigns by choosing the right keywords. Our expert teams ensure that we research and identify the right keyword with high traffic and most profitable and those keywords are most searched by your target audience. That is why people believe in Hitman Digital Google's advertising, that your ads reach the right people at the right time." },
                { icon: <Target className="w-12 h-12 text-blue-600" />, title: "Customized Campaigns", description: "Our team is expertise in customized campaigns based on your specific business needs, whether you want to increase traffic, generate leads, or increase brand awareness. We synchronize the campaign structure with your unique goals and ensure that every ad and budget decision gives maximum results just like Google PPC campaigns." },
                { icon: <FileText className="w-12 h-12 text-blue-600" />, title: "Eye-Catching Ad Copy", description: "At Hitman Digital, we create eye-catching, attention-grabbing ads that match your audience's needs and desires. We focus on clarity, interests, and strong calls to action Ads. Our best Google Ads services in Delhi are known for engaging potential customers, leading them to high click-through rates(CTR)" },
                { icon: <BarChart2 className="w-12 h-12 text-blue-600" />, title: "Ongoing Optimization", description: "Our Google Ads services in Delhi never “set and forget” your campaigns.Our ongoing optimization ensures that your ads performing are their best. We continually monitor and perform small adjustments or changes in your campaigns to improve performance and stay ahead of competitions. Hitman Digital dynamic approach ensures that you get the highest return on investment (ROI) possible" },
                { icon: <CheckCircle className="w-12 h-12 text-blue-600" />, title: "Transparent Reporting", description: "At Hitman Digital, we believe in full transparency when it comes to campaign performance, We provide you detailed reporting, that will ensure you how your campaigns are performing and where you money is investing. Our transparent reporting helps you make decisions about your advertising strategy" },
                { icon: <Users className="w-12 h-12 text-blue-600" />, title: "Expert Support", description: "At Hitman Digital, we pride ourselves on providing expert support every step of the way. Our team is always available to answer questions, provide guidance, and offer strategic advice to help you navigate the ever-changing world of Google Ads. Whether you need assistance with campaign adjustments or general Google Ads tips, we’re here to support your success" }].map((service, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.link ? (
      <Link href={service.link} className="hover:text-blue-700 text-blue-950 ">{service.title}</Link>
    ) : (
      service.title
    )}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-4 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-950">
          Why Google Ads? The Smart Choice for Targeted Growth
        </h2>
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-gray-700">
            <span className="font-bold">Google Ads</span> is an incredibly powerful tool for businesses looking to <span className="font-bold">target the right audience</span>, generate <span className="font-bold">high-quality leads</span>, and see <span className="font-bold">measurable results</span>. With its ability to provide <span className="font-bold">instant visibility</span>, <span className="font-bold">boost website traffic</span>, and <span className="font-bold">build brand recognition</span>, it &apos;s the <span className="font-bold">smart choice</span> for anyone serious about <span className="font-bold">growing their business</span> in today&apos;s competitive digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-blue-950">{benefit.title}</h3>
              </div>
              <p className="text-gray-700 text-justify">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

        <section className="py-20 bg-gradient-to-r from-slate-600 to-slate-800 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Take Your Business to the Next Level?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">Hitman Digital,<Link href="/" className='text-gray-300 hover:text-white'>  Best Digital Marketing Agency in South Delhi </Link>, we don’t just run ads—we build growth engines. Our expert team creates personalized Google Ads strategies that generate real results, from high-quality leads to increased traffic and brand visibility. If you&apos;re ready to scale your business and outshine the competition, let’s fight together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">Let&apos;s Take Your Business Higher with Hitman Digital—Are You Ready?</button>
            <Link href="/contact">  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition">Contact Us</button></Link>
          </div>
        </section>

        <RelatedServices currentService="ppc" />
      </div>
    </>
  );
};

export default PPC;

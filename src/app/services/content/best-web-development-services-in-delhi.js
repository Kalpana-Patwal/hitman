"use client"
import React from 'react'
import Link from 'next/link'

import { Code, Users, Search, Scale, Settings, PenTool,
  Building2, ShoppingCart, Layout, Award, CheckCircle, Globe,Hotel,Music, 
  User,
  Rocket,
  Lock} from 'lucide-react';

import RelatedServices from '@/components/RelatedServices';
const WebDevelopment = () => {
  const whyChooseUs = [
    {
      title: "Customized Solutions",
      content: "At Hitman Digital, we understand that your businesses are unique. That’s why we don’t rely on unoriginal designs. Each website is created custom-built to fit your brand images, business needs, and targeted audience. That is why we are top web development agencies for custom-built website designs and provide personalized digital solutions that grow your online presence.",
      icon: Users
    },
    {
      title: "Affordable Services",
      content: "We believe in providing high-quality services at a cost that is accessible to all sizes of businesses. At Hitman Digital, we offer the best UI designs solutions to ensure that you don’t have to sacrifice quality for budget. It’s why our cost-effective Services in Web Development provide maximum value without compromising on quality.",
      icon: CheckCircle
    },
    {
      title: "Scalability and Support",
      content: "We believe that when your business expands, your website should too. That is why at Hitman Digital, we offer scalable solutions that allow your website to scale seamlessly to accommodate more content, features, and functionality. We’re always here to ensure your website continues to perform at its best by providing regular updates, maintenance, and troubleshooting.",
      icon: Search
    },
    {
      title: "Responsive Design",
      content: "In today’s digital Environment, having a website that performs well across all devices is essential. At Hitman Digital, our team ensures your users enjoy a seamless and engaging experience, whether they’re browsing on a phone, tablet, or desktop. With our responsive UI designs, your website automatically adjusts to every screen size, delivering the best possible viewing experience    ",
      icon: Scale
    },
    {
      title: "Fast Loading Speed",
      content: "Website loading speed plays an important role in user experience and SEO rankings. At Hitman Digital, we specialize in backend in web development that ensures your website loads quickly and efficiently. By using the latest programming languages and optimization techniques, we help you deliver a smooth browsing experience that keeps visitors engaged, boosts your SEO performance, and increases conversion rates.",
      icon:Rocket
    },
    {
      title: "Secure Integrations & Advanced Website Protection",
      content: "At Hitman Digital, we ensure your website not only performs well but also connects with other tools without compromising safety and security. We offer you smooth third-party API integrations, including payment gateways, CRMs, social media logins, live chat, etc, alongside website security at every level. From Secure Socket Layer encryption and secure firewalls, to time-to-time updates, and malware protection. With us, you get a feature-rich website that is secure and smart.",
      icon:Lock
    },
    
  ];

  const services = [
    {
      title: "Corporate and Enterprise Web Development",
      content: "At Hitman Digital, we specialize in developing powerful, secure, and scalable websites custom-built to the unique needs of corporate and enterprise clients. Our solutions are built to support complex workflows, handle large volumes of data, and seamlessly integrate with third-party systems. Whether you need a large-scale business website, internal platform, or client portal, we ensure your digital infrastructure is robust, reliable, and ready for growth.",
      icon: Code
    },
    {
      title: "Ecommerce Website Development",
      content: "We build visually appealing, user-friendly, and secure e commerce development that gives results. Our e-commerce solutions are designed to boost conversions, build customer trust, and provide a smooth, complex-free shopping experience. From shopping cart functionality and payment gateway implementations to inventory management and order tracking, we deliver everything you need to run a successful online store.",
      icon: ShoppingCart
    },
    {
      title: "WordPress Website Development",
      content: "At Hitman Digital, we took advantage of the power of WordPress web design—the world’s leading Content Management System—to build fast, secure, and fully responsive websites. Our WordPress solutions are user-friendly, mobile-optimized, and SEO-ready, ensuring a smooth experience for both visitors and site owners. Each website is custom-built to reflect your brand’s unique identity, packed with powerful features, and easy to manage without any technical knowledge.",
      icon: Globe
    },
    {
      title: "Custom Web Development",
      content: "We develop unique and custom-built web solutions that align with your business ideas. Whether you need a static website for a strong online presence, a dynamic website with interactive features, or a fully functional web application focused on your operations, we build it all with precision and purpose. Every solution is created to reflect your brand, support your goals, and deliver error-free performance across all devices.",
      icon: Code
    },
    {
      title: "Landing Page Design",
      content: "We specialize in designing high-quality landing pages that motivate users to take action. Whether you’re launching a product or running a campaign, we create conversion-focused pages focused on your specific goals. Each page is strategically designed with your brand in mind, with a clean feature, responsive layout that enhances user experience, and attracts higher engagement.",
      icon: Layout
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

  const advantages = [
    "We have a proven and well-documented experience record in superior outcomes.",
    "A team of professionals those dedicated to your success",
    "Award received in set design, and a pleasant and easy-to-navigate website",
    "We offer reliable services with no hidden charges."
  ];

  return (
    <>
    
    <div className="min-h-screen font-times  relative mt-10 bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[url('/google-ads-1.webp')] bg-cover bg-center text-white py-16 px-4 md:px-8 lg:px-16 min-h-[500px]">
      <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.3)'}}></div>
  <div className=" relative my-10 container mx-auto text-center">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Best Web Development Services in Delhi NCR | Hitman Digital</h1>
    <p className="text-lg font-semibold md:text-xl mb-8 max-w-3xl mx-auto">

    At Hitman Digital, we offer professional and customized best web development services in Delhi NCR, customized to fit your unique business needs. Our team is an expert in building responsive, <Link  className="text-blue-900 font-bold" href="/services/seo-services-in-delhi/" >SEO</Link>-friendly websites using the latest technologies at affordable costs. Whether you&apos;re a startup or an established business, with our solutions, you get the best user engagement website and custom web applications that have high-converting landing pages. With our partnership, you&apos;re not just getting a website, you&apos;re getting digital success.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-950 text-center">Why Hitman Digital for Web Design and Development?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <item.icon className="w-8 h-8 text-blue-950 mr-3" />
                  <h3 className="text-xl font-semibold text-blue-950">{item.title}</h3>
                </div>
                <p className="text-gray-700 text-justify">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-950 text-center">Custom Web Development Company in Delhi, Hitman Digital</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-950 mr-3" />
                  <h3 className="text-xl font-semibold text-blue-950">{service.title}</h3>
                </div>
                <p className="text-gray-700 text-sm text-justify">{service.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-950 text-center">Industry-Specific Expertise</h2>
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

      {/* Why We're the Best Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-blue-950 text-center">What makes us the best Web Development Services in Delhi
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-blue-950 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-600 to-slate-800 text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Take the Next Step in Your Online Success with Hitman Digital!</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
          Your website represents your business in the Digital World. Partner with Hitman Digital, the <Link href="/" className='text-slate-500 hover:text-white'>best Web Development Company in Delhi NCR</Link> , to create a custom-built solution that synchronizes with your business goals. From responsive designs to secure, high-performance websites, let’s start building your digital future with us!
          </p>
          <Link href="/contact">
          <button className="bg-white text-blue-950 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get a Quote
          </button>
          </Link>
          <p className="mt-8 text-lg font-light italic">
            Pack your dreams into our bags with the best web development services in Delhi.
          </p>
        </div>
      </section>
     
     <RelatedServices currentService="webDev" />
    </div>
    </>
  )
}

export default WebDevelopment
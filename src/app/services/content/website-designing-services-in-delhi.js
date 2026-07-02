"use client"
import React from 'react';
import RelatedServices from '@/components/RelatedServices';
import Link from "next/link";

import { 
  Palette, 
  ShoppingCart, 
  DollarSign, 
  Search, 
  Clock, 
  Layout, 
  Globe, 
  Smartphone, 
  Settings,
  Building2,
  Briefcase,
  Book,
  Plane
} from 'lucide-react';


const WebDesign = () => {
  const whyChooseUs = [
    {
      title: "Customized Designs",
      content: "At Hitman Digital, we believe that every business is unique, and so is their website too. Our customized designs ensure that your website is not the same as a predefined template–it’s a true reflection of your brand images. Whether you are looking for Modern business design or a bold, creative feel, our team will make every pixel to suit your requirements. By understanding your ideas, future goals, and targeted audiences. ",
      icon: Palette
    },
    {
      title: "Expertise in E-commerce Websites",
      content: "If you talk about e-commerce websites, there is nobody able to come around us. Our team creates e-commerce platforms that not only look visually appealing but also deliver a seamless shopping experience. Because we understand that your online store needs to be functional, user-friendly, and Goal-oriented. We provide you with secure payment gateways and assurance that we have built an E-commerce website to perform and grow with your business. ",
      icon: ShoppingCart
    }, 
    {
      title: "Affordable Services",
      content: "At Hitman Digital, we offer affordable services without compromising on quality because we believe that web design doesn’t have to come with a big price tag. Hitman Digital cost-effective solutions are designed to satisfy businesses of all sizes, from startups to established enterprises. That is why people say the website designer near me is always the best. Because with us, you get the balance of the best quality and cost efficiency.  ",
      icon: DollarSign
    },
    {
      title: "SEO-Optimized Websites",
      content: "In today’s digital age, having a beautiful website is only half the battle. The other half is making sure it’s easily ranked in search engines. At Hitman Digital, we provide you best  <a href='/services/seo-services-in-delhi/' className='text-blue-700 hover:text-blue-950'>SEO-optimized websites</a> with insurance that your site ranks higher on search engines like Google and Yahoo! We focus on all the details like keyword intention, fast loading speeds, mobile responsiveness, etc. With us, your site traffic increases and grows your online presence.",
      icon: Search
    },
    {
      title: "Timely Delivery and Support",
      content: "We know the importance of time in business, and that’s why we put timely delivery first for every project. We follow strict deadlines to ensure that your website is ready in designated time. At Hitman Digital, our team's commitment doesn't end at the prospectus – we offer continuous support to ensure that our website is working smoothly. Our dedicated customer service ensures that your website is not only completed on time but also supported for a long period.",
      icon: Clock
    }
  ];

  const services = [
    {
      title: "Custom Website Design",
      content: "We believe your business is unique, and your website should be. With Hitman Digital custom website design services, we build every element to reflect your brand image, values and goals. It depends on what you want, bold, modern, or something creative, we ensure that your website is synchronized with your audience from the very first click.",
      icon: Layout
    },
    {
      title: "<a href='/services/best-web-development-services-in-delhi/'>E-commerce Website Design</a>",
      content: "In the time of Online Shopping, your website needs to do more than just look good — it has to perform. At Hitman Digital, e-commerce website solutions are designed to create a seamless, secure, and highly functional online shopping website that converts visitors into loyal customers. Whether you are in your industry, we provide the tools you need for increased sales and growth",
      icon: ShoppingCart
    },
    {
      title: "Engaging Blog & Content Websites",
      content: "At Hitman Digital, we believe that a website is more than just a digital Display window; it’s a platform where you connect with your audience. So, we provide you with features like engaging layouts, interactive features, smooth user experience, and engaging blogs. That way, your thoughts, ideas, and expertise are shared with the world, and our audience grows. ",
      icon: Globe
    },
    {
      title: "Responsive Web Design",
      content: "In today’s world, your website needs to function properly on all devices. So, our responsive web design services ensure that your website automatically adjusts to any screen size, from desktop to smartphone to tablet. With our responsive design, your user gets a user-friendly experience and can come consistently, and their bounce rate is reduced. ",
      icon: Smartphone
    },
    {
      title: "Content Management Systems (CMS)",
      content: "Are you facing a problem in the control of your site’s content? Come with us. We provide you Content Management Systems(CMS) that help you in updating blog posts, adding a new product, or changing images. With our CMS, you don’t need any technical expertise to manage everything. At Hitman Digital, we provide you with a user-friendly interface, with which your website content changes with minimal effort.",
      icon: Settings
    },
    {
      title: "User Experience (UX) Focused Design",
      content: "We believe websites should do more than just look attractive, they should be user-friendly and enjoyable. At Hitman Digital, we are focused on UI UX designing. With optimized UX design, we can make websites easily navigate, have fast page loading times, and have a clear call to action. We ensure that your website conversion is boosted, and your first-time visitors convert into loyal customers.",
      icon: Settings
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

  return (
    <>  
   
    <div className="min-h-screen text-center  font-times mt-10 relative bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-[url('/web-designing-1.webp')] bg-cover bg-center text-white py-16 px-4 md:px-8 lg:px-16 min-h-[500px]">
      <div className="absolute inset-0" style={{backgroundColor: 'rgba(0,0,0,0.3)'}}></div>
        <div className=" relative my-10 container mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Cost-Effective Website Designing Services in Delhi | Hitman Digital</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl">
          Looking for a website that stands out without breaking your budget? Hitman Digital is here to make it real! We offer Next-gen, cost-effective website designing services in Delhi, with creativity, functionality, and affordability. We offer personalized, custom-made solutions that bring your vision to life and help you in the competitive Digital World. Are you excited to see your ideas transformed into a stunning website? Let’s build an extraordinary website together!
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
  <div className="container mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800 text-center">Find Out Why We&apos;re the Best Choice for Your Website Design Journey.</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {whyChooseUs.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-6">
          <div className="mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          </div>
          <p 
            className="text-gray-600 hover:text-gray-800 text-justify"
            dangerouslySetInnerHTML={{ __html: item.content }}
          ></p>
        </div>
      ))} 
    </div>
  </div>
</section>
      {/* Services Section */}
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-gray-800 text-center">Create a Stunning Website with Our Creative Web Design Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-sm p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 hover:text-blue-950" dangerouslySetInnerHTML={{ __html: service.title }}></h3>  
                  </div>
                </div>
                <p className="text-gray-600 text-justify">{service.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
      <section className="bg-gradient-to-r from-slate-600 to-slate-800 text-white py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Start Building Your Dream Website with Hitman Digital Now!</h2>
            <p className="mt-8 text-lg font-light italic">
          Ready to take your business online? The best Website Designing and <Link href="/" className='font-bold  underline  '>Digital Marketing Company in South Delhi</Link>, Hitman Digital, we create stunning, custom websites that are affordable, user-friendly, and designed to achieve results. We also make one web page design. Let’s make your vision real — start building your dream website today!
          </p>
        
          <Link href="/contact">
          <button className="bg-white text-blue-600 px-8 mt-4 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Get Started
          </button>
          </Link>
        
        </div>
      </section>
      <RelatedServices currentService="web" />
      </div>
      </>
  );
};

export default WebDesign;
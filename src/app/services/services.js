// app/services/page.jsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";



// Dynamically import AOS to prevent SSR issues
const AOS = dynamic(() => import("aos").then((module) => module.default), {
  ssr: false,
});

const Services = () => {
 

  const services = [
    {
      services: [
        { 
          name: "SMM", 
          image: "/dm.webp", 
          description: "Social media marketing is the process of using social media platforms and websites to promote a product or service.", 
          link: "/services/social-media-marketing-agency-in-delhi-ncr" 
        },
        { 
          name: "SMO", 
          image: "/dm2.jpg", 
          description: "Social media optimization is using social media to amplify the message of an organization.", 
          link: "/services/smo-services-in-delhi" 
        }, 
        { 
          name: "Google Ads", 
          image: "/dm3.png", 
          description: "Google Ads is an online advertising model where the advertiser pays a publisher every time someone clicks on their ad.", 
          link: "/services/google-ads-services-in-delhi" 
        },
        { 
          name: "SEO", 
          image: "/dm1.png", 
          description: "Search Engine Optimization (SEO) improves web page presence using digital marketing and makes content more accessible.", 
          link: "/services/seo-services-in-delhi" 
        },
        { 
          name: "Lead Generation", 
          image: "/image3.png", 
          description: "A lead is a prospect who expresses interest in a company&apos;s products or services but isn&apos;t ready to buy yet.", 
          link: "/services/b2b-lead-generation-company-in-delhi-ncr" 
        },
        { 
          name: "Web Designing", 
          image: "/web1.png", 
          description: "Web design is the process of planning and organizing the content of a website.", 
          link: "/services/website-designing-services-in-delhi" 
        },
        { 
          name: "Website Development", 
          image: "/Web development.webp", 
          description: "A website is an online space where you can share information for others to view.", 
          link: "/services/best-web-development-services-in-delhi" 
        },
        { 
          name: "App Development", 
          image: "/appImage.webp", 
          description: "App development is the process of creating software applications for mobile devices and the web", 
          link: "/services/best-app-development-services-in-delhi" 
        },
      ],
    },
  ];

  return (
    <>
      
      <div className="bg-blue-200 mt-10 rounded-t-full py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold font-times py-8 text-gray-800 heading">
            Top Digital Marketing Services in Delhi – Grow Your Business with Hitman Digital
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Hitman Digital Marketing Agency, where you will find professional digital marketing services in Delhi for your business. We offer SEO, social media marketing, paid ads, and many other services for your brand to help you attract the right customers. Using our highly qualified stuff, we develop clear and efficient navigation to enhance your establishment&apos;s presence and popularity in the online environment. If you want your brand to get noticed and drive actual results online, join the ranks of Hitman Digital
          </p>
        </div>

        <div className="container x-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
          {services[0].services.map((subService, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white shadow-lg mt-10 mx-auto rounded-sm border-2 border-blue-950 overflow-hidden group transition transform hover:shadow-2xl hover:border-gray-500 w-full h-[400px]"
              data-aos="fade-up" 
            >
              <Link href={subService.link} className="relative block w-full h-full">
                <div className="relative w-full h-full overflow-hidden">
                  {/* Image */}
                  <div className="w-full h-full relative">
                    <Image
                      src={subService.image}
                      alt={subService.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  {/* Hover Effect for Small Circle */}
                 <div className="absolute bottom-0 right-0 w-32 h-20 bg-[rgba(0,0,0,0.5)] bg-opacity-50 rounded-l-full flex items-center justify-center group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:left-0 group-hover:top-0 group-hover:bottom-0 group-hover:right-0  transition-colors duration-1000">
                    {/* Text inside the circle that expands */}
                    <p className="text-white text-lg font-times font-bold absolute group-hover:opacity-0 group-hover:text-xl transition-opacity duration-300 p-2 text-center">
                      {subService.name}
                    </p>

                    {/* Expanded content on hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h2 className="text-lg font-times font-thin">{subService.name}</h2>
                      <p className="text-sm text-justify p-4 mt-2">{subService.description}</p>
                      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-sm">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
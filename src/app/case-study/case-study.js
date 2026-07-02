"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";



const ScrollingImage = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="overflow-hidden h-72 w-full relative rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute top-0 left-0 w-full"
        initial={{ y: 0 }}
        animate={{ 
          y: isHovered ? "-75%" : 0
        }}
        transition={{ 
          duration: 8,
          ease: "linear",
          type: "tween"
        }}
      >
        
        <Image 
          src={src} 
          alt="Scrolling Screenshot" 
          className="w-full"
          width={500}
          height={2000}
          style={{ maxWidth: "100%" }}
        />
      </motion.div>
    </div>
  );
};

const CaseStudyPage = () => {
  
  const caseStudies = [
    {
      client: "MetaVerse Of things",
      industry: "Technology & IOT Solution",
      description: "Increased organic traffic by 150% and improved local search rankings with a tailored SEO strategy.",
      scrollingImage: "/MetaVerseScreen.webp",  
      link: "https://metaverseofthing.com/",
      results: [
        "200% increase in organic website traffic within 6 months.",
        "Secured top 3 rankings for competitive IoT-related keywords.",
      ],
    },
    {
      client: "MakeanApp",
      industry: "Mobile App Development",
      description: "Increase brand visibility and attract potential clients in the competitive app development industry.",
      scrollingImage: "/MakeAnAppScreen.webp",  
      link :"https://makeanapplike.com/",
      results: [
        "Conducted a full SEO audit and implemented technical fixes to enhance site performance.",
        "Published guest posts on high-authority tech platforms to establish thought leadership",
      ],
    },
    {
      client: "Nourish And Care Foundation",
      industry: "Social Sector",
      description: "Increased organic traffic by 150% and improved local search rankings with a tailored SEO strategy.",
      scrollingImage: "/nourishandcarefoundation.webp",  
      link: "https://nourishandcarefoundation.com/",
      results: [
        "Design and full Development",
        "100% increase in organic website traffic within 3 months.",
        "Secured top 4 rankings for competitive IoT-related keywords.",
      ],
    },
    {
      client: "Apps For Start Up",
      industry: "IT and Apps",
      description: "Increase brand visibility and attract potential clients in the competitive app development industry.",
      scrollingImage: "/appsforstartup.webp",
      results: [
        "Conducted a full SEO audit and implemented technical fixes to enhance site performance.",
        "Published guest posts on high-authority tech platforms to establish thought leadership",
        "On and Off Page SEO",
      ],
    },
    {
      client: "MetaVerse Of things",
      industry: "Technology & IOT Solution",
      description: "Increased organic traffic by 150% and improved local search rankings with a tailored SEO strategy.",
      scrollingImage: "/MetaVerseScreen.webp",  
      results: [
        "200% increase in organic website traffic within 6 months.",
        "Secured top 3 rankings for competitive IoT-related keywords.",
      ],
    },
    {
      client: "MakeanApp",
      industry: "Mobile App Development",
      description: "Increase brand visibility and attract potential clients in the competitive app development industry.",
      scrollingImage: "/MakeAnAppScreen.webp",  
      results: [
        "Conducted a full SEO audit and implemented technical fixes to enhance site performance.",
        "Published guest posts on high-authority tech platforms to establish thought leadership",
      ],
    },
  ];

  return (
    <div className="mt-10 min-h-screen p-8">
      <div className="container mx-auto text-center">
        <h1 className="text-6xl font-bold font-times text-blue-950 mb-5">
          Case Studies
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Discover how we&apos;ve partnered with clients to create success stories in
          digital marketing and development.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="relative bg-slate-900 rounded-xl overflow-hidden hover:border-2 hover:border-blue-900"
          >
            
            <div className="relative">
              {study.scrollingImage && (
                <div className="mt-4">
                  
                  <ScrollingImage src={study.scrollingImage} />
                </div>
              )}
            </div>

            <div className="p-6 h-80">
              <h3 className="text-xl font-semibold text-white">{study.client}</h3>
              <p className="text-xs text-gray-400 italic mb-4">
                {study.industry}
              </p>
              <p className="text-gray-300 mb-4">{study.description}</p>
              <ul className="list-disc text-sm list-inside text-white">
                {study.results.map((result, i) => (
                  <li key={i}>{result}</li>
                ))}
              </ul>
            </div>

            <div className="absolute bottom-4 right-4">
               <a href={study.link} target="_blank" rel="noopener noreferrer">
              <button
                className="px-2 py-2 bg-blue-800 text-white text-sm rounded-lg shadow-md hover:bg-blue-400 transition"
              >
                Read More
              </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyPage;
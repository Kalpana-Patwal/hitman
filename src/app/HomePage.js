"use client"
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [startCounter, setStartCounter] = useState(false);
  const sectionRef = useRef(null);
  const counters = [
    { value: 100, label: "Increased Revenue", image: "/Revenue.webp" },
    { value: 12000, label: "Optimized Process", image: "/browser.webp" },
    { value: 24, label: "Expanded Market", image: "/group.webp" },
    { value: 84, label: "Efficiency", image: "/innovation.png" },
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounter(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      question: "What is Digital Marketing?",
      answer: "Digital Marketing is about promoting your business on different Digital platforms, Such as search engines (Google, Bing, etc.), social media, email, and websites online, to boost product or service sales and build a strong brand presence. As a leading Digital Marketing Agency in Delhi, we handle it all with expertise."
    },
    {
      question: "What does a digital marketing agency do?",
      answer: "The core task of a digital marketing agency is to create leads for companies, raise website traffic, and ensure these leads become customers. Our team is skilled at helping to drive visitors to your site and developing successful strategies for SEO, social media marketing, PPC, Lead Generation, Web Design, Web Development and many more."
    },
    {
      question: "How much should I pay a digital marketing agency?",
      answer: "The cost of a project can change based on the type of services offered, the project capabilities, and how experienced the agency is. The majority of small to mid-sized companies pay between $400 and $4,000 per month for their internet. Often, prices are set based on business aims and the complexity of the advertising effort."
    },
    {
      question: "What amount of money is necessary for a digital marketing agency?",
      answer: "You may need to invest between $1,000 and $10,000 or even more to open a digital marketing agency. It all depends on your working situation, the tools and software involved, any website you have, and how much you spend on marketing. Since you won't have to run a physical store, the business can bring in substantial returns with a small investment if it is run properly."
    },
    {
      question: "Differences between B2B SEO and B2C SEO?",
     
      answer: (<>The <Link href="/difference-between-b2b-seo-and-b2c-seo" className="underline text-blue-600">
        difference between B2B SEO and B2C SEO</Link> is about who wants to reach the business and how. B2B SEO is for companies that sell to other companies. It works by receiving the management of the business, helping to share useful information and buy slowly. B2C SEO is for companies that sell to ordinary people. It uses emotions, fun materials, popular keywords and quickly to buy people quickly.
      
      </>) 
    },
    {
      question: "What elements are foundational for SEO with AI?",
      answer: (
      <>This field depends on classic {' '} <Link  href="/what-elements-are-foundational-for-seo-with-ai"  className="text-blue-600 underline"> SEO methods as well as AI-powered ways</Link>, such as: Understanding user Intent, Better Keyword Search, Making content of an excellent standard, Taking advantage of Voice Search, and Tools for Optimizing Content by Using AI. By using AI, businesses can automate many processes and use data more effectively in their SEO.
        </>)
      
    },
    {
      question: "Do Digital Marketing agencies create content?",
      answer: "Most agencies that focus on digital marketing create content for their clients. Some examples are blog posts, videos, social media pictures, emails, infographics, and the text found on landing pages. You want to make the content attention-grabbing, enhance your brand image, improve ranking in search results, and collect a higher number of leads."
    }
  ];

  return (
    <>
      <div>
      <div className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
  {/* Background Image for small screens */}
  <div className="absolute md:relative inset-0 w-full h-full md:w-[85%] md:min-h-screen order-2 md:order-2 -z-10">
    <Image
      src="/Hitman digital marketing agency.webp"
      alt="Hitman digital marketing agency"
      className="object-cover blur-sm md:blur-none"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
      priority
    />
    <div className="absolute inset-0 bg-black/50 md:bg-transparent"></div>
  </div>

  {/* Text Section */}
  <div
    className="flex flex-col w-full  justify-start items-start px-6 md:px-10 z-10 order-1 md:order-1"
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
  >
    <div className="text-center md:text-left bg-white/70 md:bg-transparent mt-[10rem]  md:mt-0 rounded-lg md:rounded-none w-full">
      <main className="flex flex-col items-center md:items-start justify-start text-center md:text-left pt-10 md:pt-12 w-full md:max-w-6xl p-10 mx-auto">
        <h1 className="text-4xl md:text-5xl pt-10 text-blue-950 font-times font-bold mb-4 break-words md:whitespace-normal md:leading-tight md:max-w-5xl">
          Hitman Digital Marketing Company in South Delhi
        </h1>
        <p className="text-lg md:text-xl mt-5 text-justify font-times text-slate-900 max-w-2xl">
          Best Creative Digital Marketing Services For Startups that are tailored to fit your unique goals and challenges.
        </p>
      </main>

      <div className="flex flex-col ml-10 md:flex-row mt-6 gap-5 justify-center md:justify-start pb-10">
        <Link href="/services">
          <button className="text-md font-bold font-opensans border-2 border-blue-950  bg-blue-950 text-white rounded-full 
          px-6 py-3 transition-all ">
            Check Service
          </button>
        </Link>
        <Link href="/contact">
          <button className="text-md font-bold font-opensans border-2 border-blue-950 text-blue-950 rounded-full px-6 py-3 transition-all">
            Contact Now
          </button>
        </Link>
      </div>
    </div>
  </div>
</div>




        <div className="h-auto mt-10 flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex w-full md:w-[40%] flex-col gap-5 md:gap-10 justify-center items-center bg-gray-700 px-6 py-10 md:px-10">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-white leading-normal font-bold font-Tinos, serif"
              data-aos="fade-right"
            >
              Hitman Digital Marketing Agency  -
            </h2>
            <p
              className="text-lg sm:text-xl md:text-2xl text-white font-Tinos, serif font-bold font-tinos text-center"
              data-aos="fade-left"
            >
              Your affordable digital marketing agency in Saket!
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-gray-300 flex flex-col gap-4 w-full md:w-[60%] px-6 py-10 md:px-10 text-justify">
            <p className="text-xl sm:lg md:text-lg text-blue-950 font-tinos">
              Would you like to have the services of an effective digital marketing agency? Does your business need a solution that is result oriented and specifically tailored to the needs of <a className="text-gray-600 font-bold hover:text-blue-700" href="https://hitmandigital.in/">Hitman Digital Marketing Agency in South Delhi</a>? Being one of the cheap companies in digital marketing, we help you accomplish your online goals while making a small dent in your budget.
            </p>
            <p className="text-lg sm:text-base md:text-lg text-blue-950 font-tinos">
              From visibility of your business to traffic and conversion rates, we develop some of the best strategies involving today&apos;s best brains and give you that unbeatable edge. From the small businessman and growing company, our services have been created to help you get success now in this highly competitive environment.
            </p>
            <p className="text-lg sm:text-base md:text-lg text-blue-950 font-tinos">
              Your future is well made at The Hitman Digital Marketing Agency - the best digital marketing company in Delhi - partner for the best. Now, incorporate some help from a business towards development, and let one online step to become with stride.
            </p>
            <p className="text-lg sm:text-base md:text-lg text-blue-950 font-tinos">
              Call us now and be part of the wagon in changing your online world today!
            </p>
            <div className="flex justify-center items-center mt-6 md:mt-10 gap-5">
              <Link href="/contact">
                <button
                  className="text-sm sm:text-md font-bold font-opensas border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white rounded-full px-6 py-3 transition-all"
                  data-aos="fade-up"
                >
                  Contact Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="h-auto flex flex-col md:flex-row w-full mb-5 mt-16 justify-start items-start">
          {/* Left Section */}
          <div className="flex flex-col w-full md:w-2/5 px-5 md:px-10 gap-5 mb-10 md:mb-0">
            <p className="text-lg sm:text-2xl md:text-3xl font-tinos text-gray-700">
              Our Expertise in Digital Marketing
            </p>
            <h2 className="text-3xl leading-normal sm:text-4xl md:text-5xl font-tinos font-bold text-blue-950">
              Digital Marketing Services
            </h2>

            <p className="text-xl font-ti text-justify text-gray-700">With a focus on innovation skills, Hitman Digital Marketing Agency in South Delhi offers the best creative digital marketing services for startups.We provide service ranging from <Link href="services/seo-services-in-delhi/" className="text-blue-800 hover:text-blue-950">Search Engine Optimization</Link> for increased organic search,<Link href="services/smo-services-in-delhi/" className="text-blue-800 hover:text-blue-950" > Social Media Optimization</Link> for better social presence, <Link href="services/social-media-marketing-agency-in-delhi-ncr/" className="text-blue-800 hover:text-blue-950" > Social Media Marketing</Link> targeted for paid presence,<Link href="services/google-ads-services-in-delhi/" className="text-blue-800 hover:text-blue-950">Pay per click</Link>  for quick boost, and<Link href="services/website-designing-services-in-delhi/"  className="text-blue-800 hover:text-blue-950"> web designing </Link> for a better user interface. Our approach is to assist your organization in achieving its objectives and flourishing in the digital world by offering high-impact online marketing solutions.</p>

            {/* Service Icons */}
            <div className="flex flex-wrap justify-center items-center gap-5 md:gap-10 mt-1">
              <div
                className="h-12 w-12 sm:h-16 sm:w-16 border-2 border-gray-800 rounded-full relative"
                data-aos="zoom-in"
              >
                <Image
                  src="/search engine optimization.webp"
                  className="rounded-full"
                  alt="seo"
                  fill
                  sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 64px"
                />
              </div>
              <div
                className="h-12 w-12 sm:h-16 sm:w-16 border-2 border-gray-800 rounded-full relative"
                data-aos="zoom-in"
              >
                <Image
                  src="/smm.webp"
                  className="rounded-full"
                  alt="Network"
                  fill
                  sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 64px"
                />
              </div>
              <div
                className="h-12 w-12 sm:h-16 sm:w-16 border-2 border-gray-800 rounded-full relative"
                data-aos="zoom-in"
              >
                <Image
                  src="/strategy.webp"
                  className="rounded-full"
                  alt="strategy"
                  fill
                  sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 64px"
                />
              </div>
              <div
                className="h-12 w-12 sm:h-16 sm:w-16 border-2 border-gray-800 rounded-full relative"
                data-aos="zoom-in"
              >
                <Image
                  src="/webDesign.png"
                  className="rounded-full"
                  alt="Web Design"
                  fill
                  sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 64px"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full gap-2 md:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 h-auto w-full gap-2 aos-init aos-animate" data-aos="zoom-in-up">
              <div className="w-full h-48 sm:h-64 md:h-[44rem] relative">
                <Image 
                  className="rounded-md object-cover" 
                  src="/social-media-marketing-services.webp" 
                  alt="social media marketing services"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 30vw"
                />
              </div>
              <div className="w-full h-48 sm:h-64 md:h-[44rem] relative">
                <Image 
                  className="rounded-md object-cover" 
                  src="/digital marketing services.webp" 
                  alt="digital marketing services"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 30vw"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto py-2s sm:py-12">
          <h2 className="text-center mb-10 sm:mb-20 text-4xl sm:text-5xl md:text-6xl font-tinos text-gray-700 font-bold">
            Services We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 sm:gap-6 mx-5 sm:mx-10">
            <div className="bg-gray-700 border-2 h-40 sm:h-60 md:h-80 relative">
              <Image 
                src="/business.png" 
                alt="Business"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="bg-white border-2 flex flex-col pt-4 justify-start items-center">
              <div className="h-8 w-8 sm:h-10 sm:w-10 relative">
                <Image
                  src="/search engine optimization.webp"
                  alt="seo"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-gray-700 font-tinos pt-2 font-bold text-base sm:text-lg">SEO</h2>
              <p className="text-gray-700 font-tinos py-4 px-4 text-justify text-sm sm:text-base">
                SEO is the best way to increase the visibility and ranking of your website in search engines. It follows keyword optimization, on-page improvement, and link building to ramp up the amount of organic traffic to your page. Its strategies ensure that the right audience is captured for your business, thereby boosting online visibility and conversions.
              </p>
            </div>
            <div className="bg-gray-700 border-2 h-40 sm:h-60 md:h-80 relative">
              <Image
                src="/pay per click.webp"
                alt="pay per click"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="bg-white border-2 flex flex-col pt-4 justify-start items-center">
              <div className="h-8 w-8 sm:h-10 sm:w-10 relative">
                <Image
                  src="/PPC.png"
                  alt="PPC Icon"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-gray-700 font-tinos pt-2 font-bold text-base sm:text-lg">PPC</h2>
              <p className="text-gray-700 font-tinos py-4 px-4 text-justify text-sm sm:text-base">
                PPC is a very effective approach to generating immediate traffic and results. We work on your customized ad campaigns on Google Ads and social media to target your required visitors to your website. We optimize keywords and budgets to ensure the best ROI so you can more quickly reach your business objectives.
              </p>
            </div>
            <div className="bg-gray-700 border-2 h-40 sm:h-60 md:h-[22rem] relative">
              <Image
                src="/social media optimization.webp"
                alt="Profession"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="bg-white border-2 flex flex-col pt-4 justify-start items-center">
              <div className="h-8 w-8 sm:h-10 sm:w-10 relative">
                <Image
                  src="/SMM.png"
                  alt="SMM Icon"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-gray-700 font-tinos pt-2 font-bold text-base sm:text-lg">SMO</h2>
              <p className="text-gray-700 font-tinos p-4 px-4 text-justify text-sm sm:text-base">
                SMO works on different social media profiles to enhance engagement and brand awareness. We generate cringe-worthy content and drive strategies to expand your reach across platforms such as Facebook, Instagram, and LinkedIn. Our approach to provide <Link  className="text-gray-600 font-bold hover:text-blue-700" href="https://hitmandigital.in/services/smo-services-in-delhi/"> affordable social media optimization services </Link> that connects your brand with the right audience, nurturing a meaningful interaction
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link href="/services">
              <button className="text-sm sm:text-md font-bold font-opensas border-2 border-blue-950 text-blue-950 rounded-full px-4 sm:px-6 py-2 sm:py-4 transition-all hover:bg-blue-950 hover:text-white">
                More Services
              </button>
            </Link>
          </div>
        </div>

        <div className="h-auto mx-4 sm:mx-10 py-4 flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-2/5 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-8 mb-2 sm:mb-4 text-gray-700 font-bold font-tinos">
              We Work With the Best Partners
            </h2>
            <p className="text-gray-600 font-tinos text-lg text-justify">At Hitman Digital Marketing Agency in Delhi, we work with partners to ensure we deliver the best digital marketing services. Thus, by cooperating with reliable platforms and tools, we guarantee our clients will receive modern and effective tools and strategies for their business glowing in the digital environment.</p>
          </div>

          <div className="w-full md:w-3/5 flex flex-wrap gap-5 justify-center items-start">
            <div className="w-28 h-16 sm:w-36 sm:h-20 relative">
              <Image 
                src="/logo1.png" 
                alt="Logo 1" 
                fill 
                className="object-contain" 
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 144px"
              />
            </div>
            <div className="w-28 h-16 sm:w-36 sm:h-20 relative">
              <Image 
                src="/logo2.png" 
                alt="Logo 2" 
                fill 
                className="object-contain" 
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 144px"
              />
            </div>
            <div className="w-28 h-16 sm:w-36 sm:h-20 relative">
              <Image 
                src="/logo3.png" 
                alt="Logo 3" 
                fill 
                className="object-contain" 
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 144px"
              />
            </div>
            <div className="w-28 h-16 sm:w-36 sm:h-20 relative">
              <Image 
                src="/logo4.png" 
                alt="Logo 4" 
                fill 
                className="object-contain" 
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 144px"
              />
            </div>
            <div className="w-28 h-16 sm:w-36 sm:h-20 relative">
              <Image 
                src="/logo5.png" 
                alt="Logo 5" 
                fill 
                className="object-contain" 
                sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 144px"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mb-6">
          <button className="text-sm sm:text-md font-bold font-opensas mt-5 sm:mt-10 border-2 border-blue-950 text-gray-600 rounded-full px-6 py-3 sm:px-8 sm:py-4 hover:bg-blue-950 hover:text-white transition-all">
            More Clients
          </button>
        </div>

        <div className="h-auto flex flex-col bg-gray-700 py-10">
          {/* Heading Section */}
          <div className="flex flex-col items-start justify-center px-5 sm:px-10">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-tinos">
              Strategic Solutions <br /> <span className="block">for Business Growth</span>
            </h2>
          </div>

          <div
            ref={sectionRef}
            className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-6 mt-10 px-5 sm:px-10"
          >
            {counters.map((counter, index) => (
              <div
                key={index}
                className="flex border-2 rounded-md bg-gray-100 w-full sm:w-[45%] md:w-[22%] h-auto p-6 flex-col justify-start items-center gap-4 md:flex-1 md:min-h-[250px]"
              >
                <div className="h-8 sm:h-10 w-8 sm:w-10 relative">
                  <Image
                    src={counter.image}
                    alt={counter.label}
                    width={40}
                    height={40}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl text-center font-tinos text-gray-900">
                  {startCounter && (
                    <CountUp
                      start={0}
                      end={counter.value}
                      duration={2}
                      separator=","
                    />
                  )}
                </p>
                <p className="text-lg sm:text-2xl md:text-3xl text-center font-tinos text-gray-900">
                  {counter.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about digital marketing and our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-inset rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-700 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems[index] ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {openItems[index] && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                   
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                      
                    </p>
                    {item.link && (
        <a
          href={item.link}
          className="mt-2 inline-block text-blue-600 hover:underline"
        ></a>)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We &apos;re here to help!
          </p>
          <Link href="/contact">
          <button className="text-sm sm:text-md font-bold font-opensas mt-5 sm:mt-10 border-2 border-blue-950 text-gray-600 rounded-full px-6 py-3 sm:px-8 sm:py-4 hover:bg-blue-950 hover:text-white transition-all">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </section>


    </>
  );
};

export default Home;
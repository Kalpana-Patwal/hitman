// app/about/page.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";



const AOS = dynamic(() => import("aos").then((module) => module.default), {
  ssr: false,
});

const About = () => {
    
  const router = useRouter();
  
  useEffect(() => {
    const loadAOS = async () => {
      const aos = (await import("aos")).default; // Ensure AOS is fully imported
      await import("aos/dist/aos.css"); // Import AOS CSS
      aos.init({ duration: 1000, once: false }); // Initialize AOS after importing
    };

    loadAOS(); // Call the async function
  }, []);

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(
      typeof navigator !== "undefined" ? navigator.userAgent : ""
    ) && !(typeof window !== "undefined" && window.MSStream);

    if (isIOS) {
      const video = document.getElementById("background-video");
      if (video) {
        video.setAttribute("playsinline", "true");
        video.setAttribute("autoplay", "true");
        video.setAttribute("loop", "true");
        video.setAttribute("muted", "true");
        video.removeAttribute("controls");
        video.play();
      }
    }
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  };

  return (
    <>
    
      <div>
        <div className="mt-10 h-auto w-full relative">
          <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none">
            <span className="text-[150px] text-gray-700 font-extrabold font-times">
              Hitman Digital
            </span>
          </div>
          <div className="flex flex-col py-10 justify-center items-center">
            <h2 className="text-6xl text-blue-950 font-bold font-times border-y-2s border-gray-800 p-4" data-aos="zoom-out-up">
              About Us - Hitman Digital
            </h2>
            <p className="text-xl text-gray-700 font-thin text-justify py-6 px-10 leading-normal font-times">
              Since its establishment in April 2022, Hitman Digital has set its goal to make businesses successful within a constantly evolving digital environment. As a top{" "}
              <Link href="/" className="relative text-gray-600 font-bold hover:text-blue-700">
                digital marketing agency in Delhi
              </Link>
              , our goal is simple: a company that offers unique and professional services of online marketing that will have the ability to produce tangible yields. From launching a small business to developing a unique presence for a globally recognized brand, we design plans to succeed in today&apos;s challenging digital environment.
            </p>
            <p className="text-xl text-gray-700 font-thin text-justify px-10 font-times">
              Our expert team focuses mainly on SEO, PPC advertising, social media management, content writing, and much more. Every one of them is created to help with your online presence, enhance traffic, and come up with improved conversions.
            </p>

            <p className="text-2xl text-blue-950 my-2 font-bold font-times">
              Scroll Down
            </p>
            <div className="h-10 w-10 cursor-pointer jumping-image" onClick={handleScroll}>
              <Image src="/scrollDown.png" alt="Scroll down" width={40} height={40} />
            </div>
          </div>
        </div>

        <div className="relative py-10 w-full">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover opacity-15"
            src="/video1.mp4"
            autoPlay
            loop
            muted
            id="background-video"
          ></video>
          <div className="mt-10 text-center relative z-10">
            <h2 className="text-blue-950 pt-4 text-6xl font-bold font-times">
              What We Do
            </h2>
          </div>
          <div className="mx-2 md:mx-10 py-5 md:py-10 gap-4 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 md:px-10 sm:text-lg md:text-lg relative z-10">
            <div className="p-4 flex flex-col border-2 border-blue-950 rounded-xl bg-transparent hover:bg-blue-950 transform transition-transform duration-300 ease-in-out hover:scale-105 group md:h-auto" data-aos="flip-left">
              <p className="text-5xl font-extrabold text-center transition-colors duration-300 ease-in-out group-hover:text-gray-500">01</p>
              <h2 className="text-3xl py-2 md:py-4 flex justify-center items-center text-white font-bold font-opensas">OUR MISSION</h2>
              <p className="px-2 md:px-4 text-justify text-base md:text-xl font-thin font-times text-gray-500 transition-colors duration-500 ease-in-out group-hover:text-white">
                Our mission is to enable businesses to prosper in the fast-paced world of digital. We are fully committed to creating innovative and results-driven strategies that help clients improve their online presence and stand out in their respective industries while achieving specific goals. Our team of professionals works diligently to design marketing solutions tailored to meet and exceed client expectations.
              </p>
            </div>

            <div className="p-4 flex flex-col border-2 border-white rounded-xl bg-transparent hover:bg-white transform transition-transform duration-300 ease-in-out hover:scale-105 group md:h-auto" data-aos="flip-left">
              <p className="text-5xl font-extrabold text-center transition-colors duration-300 ease-in-out group-hover:text-gray-600">02</p>
              <h2 className="text-3xl py-2 md:py-4 flex justify-center items-center text-blue-950 font-bold font-opensas">OUR VALUES</h2>
              <p className="px-2 md:px-4 text-justify text-base md:text-xl font-thin font-times text-gray-500 transition-colors duration-500 ease-in-out group-hover:text-blue-950">
                We pride ourselves on transparency and honesty in every interaction. Our clients trust us to deliver real, results-driven solutions, and we take that trust seriously. We believe every client is a partner. Through collaboration, we get to understand their goals, challenges, and needs deeply to ensure that our strategies perfectly align with your vision.
              </p>
            </div>

            <div className="p-4 flex flex-col border-2 border-blue-950 rounded-xl bg-transparent hover:bg-blue-950 transform transition-transform duration-300 ease-in-out hover:scale-105 group md:h-auto" data-aos="flip-right">
              <p className="text-5xl font-extrabold text-center transition-colors duration-300 ease-in-out group-hover:text-gray-500">03</p>
              <h2 className="text-3xl py-2 md:py-4 flex justify-center items-center text-white font-bold font-opensas">OUR VISION</h2>
              <p className="px-2 md:px-4 text-justify text-base md:text-xl font-thin font-times text-gray-500 transition-colors duration-500 ease-in-out group-hover:text-white">
                At Hitman Digital Marketing, we envision ourselves as a harbinger of change, catalyzing businesses into forceful, influential digital brands. We aim to help our customers not only survive but thrive through the fast-changing world of digital.
              </p>
            </div>
          </div>

          <div className="pb-10 text-center">
            <h2 className="text-blue-950 my-10 text-4xl md:text-6xl font-bold font-opensas">
              Why Choose Us
            </h2>
            <p className="pt-2 text-lg md:text-xl font-times text-gray-700 px-5 md:px-52">
              We specialize in crafting data-driven strategies that deliver measurable results. Whether it&apos;s boosting your online visibility through SEO, running high-converting ad campaigns, or engaging your audience on social media, we ensure your brand gets the attention it deserves.
            </p>
          </div>

          <div className="h-auto pb-20 flex flex-col mx-auto w-screen">
            <div className="flex flex-col md:flex-row h-auto md:h-64 items-center">
              <div className="w-full md:w-[30%] pt-14">
                <div className="h-48 md:h-96 w-full relative">
                  <Image src="/Digital Marketing Experts.webp" alt="Digital Marketing Experts" layout="fill" objectFit="contain" />
                </div>
              </div>
              <div className="w-full md:w-[70%] text-start px-5 md:px-0">
                <h2 className="text-xl md:text-2xl pb-4 font-times font-bold text-blue-950">
                  Proven Expertise in Digital Marketing
                </h2>
                <p className="text-base pr-10 md:text-lg font-opensas font-thin text-justify text-slate-600">
                  We specialize in crafting data-driven strategies that deliver measurable results. Whether it&apos;s boosting your online visibility through SEO, running high-converting ad campaigns, or engaging your audience on social media, we ensure your brand gets the attention it deserves.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse h-auto md:h-64 mx-5 md:mx-10 mt-10 items-center">
              <div className="w-full md:w-[30%] pt-14">
                <div className="h-48 md:h-96 w-full relative">
                  <Image src="/Web development.webp" alt="Web Development" layout="fill" objectFit="contain" />
                </div>
              </div>
              <div className="w-full md:w-[70%] text-start px-5 md:px-0">
                <h2 className="text-xl md:text-2xl pb-4 font-times font-bold text-blue-950">
                  Cutting-Edge Web Development
                </h2>
                <p className="text-base md:text-lg font-opensas font-thin text-justify text-slate-600">
                  Your website is your digital storefront. We create visually stunning, user-friendly, and high-performing websites tailored to your unique business needs. From e-commerce platforms to custom web applications, our developers ensure seamless functionality and a memorable user experience.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row h-auto md:h-64 mx-5 md:mx-10 mt-10 items-center">
              <div className="w-full md:w-[30%] pt-14">
                <div className="h-48 md:h-96 w-full relative">
                  <Image src="/Digital Marketing.webp" alt="Digital Marketing" layout="fill" objectFit="contain" />
                </div>
              </div>
              <div className="w-full md:w-[70%] text-start px-5 md:px-0">
                <h2 className="text-xl md:text-2xl pb-4 font-times font-bold text-blue-950">
                  Comprehensive Services Under One Roof
                </h2>
                <p className="text-base md:text-lg font-opensas font-thin text-justify text-slate-600">
                  Save time and effort by working with a single agency for all your digital needs. From branding and marketing to web design and development, we provide end-to-end solutions to streamline your digital journey.
                </p>
              </div>
            </div>
          </div>

          <div className="h-auto">
            <div className="flex flex-col md:flex-row p-3 md:p-10">
              <div className="w-full md:w-1/2 mb-5 md:mb-0 relative" data-aos="fade-right">
                <Image src="/Why Digital Marketing for Startup.webp" alt="Why Digital Marketing for Startup" layout="responsive" width={500} height={300} />
              </div>
              <div className="w-full md:w-1/2" data-aos="fade-up">
                <h2 className="text-blue-950 px-3 md:px-10 leading-normal mb-10 text-3xl md:text-6xl font-times font-bold">
                  Why Digital Marketing Agency for Startup
                </h2>
              </div>
            </div>
            <div className="flex flex-col mx-3 md:mx-10 px-3 md:px-10">
              <p className="pb-4 text-justify leading-normal text-base md:text-xl font-thin font-times text-gray-700">
                At Hitman Digital, we know all the ins and outs of digital marketing and can help you succeed in it. That is why we are a digital marketing agency for startups dedicated to helping businesses get the most out of the digital environment and thrive. Here are some ways we can assist you in helping your brand move to the next level – using strategies that work
              </p>
              <div className="flex flex-wrap justify-center py-10 gap-4">
                {[
                  {
                    title: "Reaching the Right Audience",
                    content: "Digital marketing allows startups to zero in on their ideal customers. With tools like social media targeting, Google Ads, and analytics, you can segment your audience based on demographics, interests, and online behavior.",
                    bgColor: "bg-blue-200",
                    textColor: "text-blue-950",
                  },
                  {
                    title: "Building Awareness and Credibility",
                    content: "For a startup, visibility is everything. Digital marketing helps you establish your brand&apos;s identity through engaging content, consistent messaging, and valuable interactions.",
                    bgColor: "bg-white",
                    textColor: "text-gray-700",
                  },
                  {
                    title: "Real-Time Results and Insights",
                    content: "With digital marketing, startups can monitor the performance of their campaigns in real-time. This immediate feedback allows for quick adjustments to optimize outcomes.",
                    bgColor: "bg-blue-200",
                    textColor: "text-blue-950",
                  },
                  {
                    title: "Affordable and Scalable Solutions",
                    content: "Startups often operate on tight budgets, and digital marketing provides cost-effective options like pay-per-click ads, influencer collaborations, and organic growth through search engine optimization (SEO).",
                    bgColor: "bg-white",
                    textColor: "text-gray-700",
                  },
                  {
                    title: "Driving Conversions and Growth",
                    content: "From attracting website traffic to converting leads into customers, digital marketing provides a structured funnel for growth. Email campaigns nurture potential customers, while retargeting ads bring them back to complete their journey.",
                    bgColor: "bg-blue-200",
                    textColor: "text-blue-950",
                  },
                  {
                    title: "Leveling the Playing Field",
                    content: "Digital marketing allows startups to zero in on their ideal customers. With tools like social media targeting, Google Ads, and analytics, you can segment your audience based on demographics, interests, and online behavior.",
                    bgColor: "bg-white",
                    textColor: "text-gray-700",
                  },
                ].map((box, idx) => (
                  <div
                    key={idx}
                    className={`h-auto min-h-[200px] w-full md:w-[300px] border-8 ${box.bgColor} border-blue-950`}
                    data-aos={idx % 2 === 0 ? "zoom-out-left" : "zoom-out-right"}
                  >
                    <h2 className={`text-lg md:text-2xl p-3 ${box.textColor} text-center font-bold font-times`}>
                      {box.title}
                    </h2>
                    <p className="text-sm md:text-md px-4 font-thin text-justify font-opensas text-gray-600">
                      {box.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-auto pb-10 px-4 sm:px-6 md:px-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl mt-10 font-times font-bold text-blue-950 text-center">
            Why Wait? Start Now
          </h2>

          <p className="text-base sm:text-lg text-gray-700 text-center mt-8">
            Contact us today to create a custom digital marketing plan tailored to your startup&apos;s success.
          </p>

          <p className="text-sm sm:text-base md:text-xl mt-5 font-times px-4 sm:px-6 md:px-10 text-justify text-gray-700">
            Digital marketing is the fuel that powers startup growth in today&apos;s competitive environment. Whether you&apos;re launching your product, building a customer base, or scaling operations, a solid digital marketing strategy can unlock the potential your startup needs.
          </p>

          <Link href="/contact">
            <div className="text-lg sm:text-xl font-times font-bold mt-10 border-2 border-gray-700 text-gray-600 rounded-full w-auto p-3 sm:p-4 hover:bg-blue-950 hover:border-blue-950 hover:text-white transition-all cursor-pointer">
              Contact Now
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
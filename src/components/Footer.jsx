'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      
      <footer className="bg-gray-900 font-geologica text-lg text-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-6">
            <div>
              <h2 className="text-2xl font-bold font-times text-gray-200 mb-4">Hitman Digital Pvt Ltd</h2>
              <p className="text-white font-thin text-md mb-4">
                Hitman Digital Pvt Ltd, we specialize in transforming ideas into impactful digital experiences. Our expertise in web design and web development ensures that your online presence not only stands out but also drives engagement and results.
              </p>
              <div className="flex space-x-4">  
                <a href="#" className="hover:text-blue-500">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="#" className="hover:text-blue-500">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-times text-gray-300 mb-4">Services</h3>
              <ul className="space-y-2 text-md font-t text-gray-200">
                <li>  
                  <Link href="/services/website-designing-services-in-delhi" className="hover:text-blue-500 transition duration-200">
                    Website Designing
                  </Link>
                </li>
                <li>
                  <Link href="/services/best-web-development-services-in-delhi" className="hover:text-blue-500 transition duration-200">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/social-media-marketing-agency-in-delhi-ncr" className="hover:text-blue-500 transition duration-200">
                    SMM
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo-services-in-delhi" className="hover:text-blue-500 transition duration-200">
                    SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services/smo-services-in-delhi" className="hover:text-blue-500 transition duration-200">
                    SMO
                  </Link>
                </li>
                <li>
                  <Link href="/services/google-ads-services-in-delhi" className="hover:text-blue-500 transition duration-200">
                    Google Ads
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-times text-gray-300 mb-4">Useful Links</h3>
              <ul className="space-y-2 font-times text-white">
                <li>
                  <Link href="/" className="hover:text-blue-500 transition duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-500 transition duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-500 transition duration-200">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-blue-500 transition duration-200">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/case-study" className="hover:text-blue-500 transition duration-200">
                    Case Study
                  </Link>  
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-300 mb-4">Contact</h3>
              <ul className="space-y-2 font-thin text-white">
                <li>
                  <a href="tel:+91  8527341388" className="hover:text-blue-500 transition duration-200">
                  +91  8527341388
                  </a>
                </li>
                <li>
                  <a href="mailto:info@hitmandigital.in" className="hover:text-blue-500 transition duration-200">
                    info@hitmandigital.in
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} <Link href="/">Hitman Digital</Link> Pvt Ltd | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
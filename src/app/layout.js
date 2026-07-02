import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tinos } from "next/font/google";
import "./globals.css"; // Ensure you import global CSS if you have it

const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"], // Include needed font weights
  variable: "--font-tinos", // Define a CSS variable for Tailwind support
});

// export const metadata = {
//   title: {
//     default: 'Hitman Digital | Best Digital Marketing Agency in Delhi',
//     template: '%s | Hitman Digital'
//   },
//   description: 'With a focus on innovation skills, Hitman Digital Marketing Agency in Delhi offers the best creative...',
//   robots: {
//     index: true,
//     follow: true,
//     nocache: false,
//     googleBot: {
//       index: true,
//       follow: true
//     }
//   }
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
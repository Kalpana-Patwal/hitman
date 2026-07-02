/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,

  output: 'export',
  trailingSlash: true,  // Ensures all URLs end with a slash
  images: {
    unoptimized: true,  // Required for static export
  },
  cleanDistDir: true,
  distDir: 'out', // Ensures static export is in 'out' folder
  basePath: '', // Ensure correct asset paths
  assetPrefix: '', // Prevents broken images and scripts
};

export default nextConfig;

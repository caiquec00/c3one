/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ZOHO_USER: process.env.ZOHO_USER,
    ZOHO_PASSWORD: process.env.ZOHO_PASSWORD,
  },
};

export default nextConfig;
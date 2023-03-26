/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  plugins: [require('tailwindcss'), require('postcss')]
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.thecocktaildb.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'vercel-app.s3.amazonaws.com',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
  
}


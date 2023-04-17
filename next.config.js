/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})
const nextConfig = {
  reactStrictMode: true,
}
module.exports = withPWA({
  // next.js config
    nextConfig
})
//module.exports = nextConfig

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    transpilePackages: ['@mdirshaddev/react'],
    runtime: 'nodejs'
  }
};

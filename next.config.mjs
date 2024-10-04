/** @type {import('next').NextConfig} */
// // export const withPreconstruct = require('@preconstruct/next');
// /** @type {import('@preconstruct/next')}  */

const config = {
  images: { remotePatterns: [{ hostname: 'cdn.sanity.io' }] },
  env: {
    AUTH0_SECRET: process.env.AUTH0_SECRET,
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
  },
};

export default config;

const withPreconstruct = require('@preconstruct/next');

module.exports = withPreconstruct();

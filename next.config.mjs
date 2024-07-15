/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: "export",
  basePath: isProd ? '/wcs-hun' : undefined,
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: isProd ? 'wcs-hun' : undefined,
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;

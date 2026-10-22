/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:slug(java|git|ai-genai|sdlc-agile|sql|os-networks|project|behavioral)",
        destination: "/topics/:slug",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

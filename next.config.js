/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: "https://backend.thetopplayer.com",
    // webDomain: "https://interregionall.vercel.app",
    // webDomain: "https://www.thetopplayer.com",
    webDomain: "https://the-top-player-frontend-1.onrender.com",
    googleAnalytics: "G-E1W5ELK5TZ",

  },
  swcMinify: true,

  images: {
    minimumCacheTTL: 60,
    deviceSizes: [
      256, 320, 492, 512, 640, 768, 896, 1024, 1152, 1280, 1408, 1536, 1664,
      1792, 1920, 2048, 2176, 2304, 2432, 2560, 2688, 2944,
    ],
    imageSizes: [32, 64, 96, 112, 128, 144, 160, 176, 192, 240],
    formats: ["image/webp"],
    domains: ["backend.thetopplayer.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
  async headers() {
  return [
    {
      source: "/.well-known/apple-developer-merchantid-domain-association",
      headers: [{ key: "content-type", value: "application/json" }]
    }
  ];
}
};

module.exports = nextConfig;
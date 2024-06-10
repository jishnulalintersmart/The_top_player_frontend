/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // customKey: "https://crm.intersmarthosting.in/topplayer",
    // customKey: "http://192.168.29.154:7700",
    customKey: "http://localhost:7700",
    // customKey: "https://backend.thetopplayer.com",
    // customKey: "https://crm.intersmarthosting.in/topplayer",
    // webDomain: "https://interregionall.vercel.app",
    // webDomain: "https://www.thetopplayer.com",
    // webDomain: "https://the-top-player-frontend-2.onrender.com",
    webDomain: "http://localhost:4000",
    // webDomain: "http://www.thetopplayer.com",
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
    // formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https", // Set the protocol as a string
        hostname: "crm.intersmarthosting.in", // Set the hostname as a string
        pathname: "**",
      },
      {
        protocol: "http", // Set the protocol as a string
        hostname: "localhost", // Set the hostname as a string
        pathname: "**",
      },
      {
        protocol: "https", // Set the protocol as a string
        hostname: "backend.thetopplayer.com", // Set the hostname as a string
        pathname: "**",
      },
      {
        protocol: "http", // Set the protocol as a string
        hostname: "192.168.29.154",
        pathname: "**",
      },
    ],
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
        headers: [{ key: "content-type", value: "application/json" }],
      },
    ];
  },
};

module.exports = nextConfig;

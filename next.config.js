/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // customKey: "https://crm.intersmarthosting.in/topplayer",
    // customKey: "http://192.168.29.154:7700",
    // customKey: "http://localhost:7700",
    customKey: "https://backend.thetopplayer.com",
    // customKey: "https://backend.thetopplayer.com/staging",
    // customKey: "https://crm.intersmarthosting.in/topplayer",
    // webDomain: "https://interregionall.vercel.app",
    // webDomain: "https://www.thetopplayer.com",
    // webDomain: "https://the-top-player-frontend-2.onrender.com",
    // webDomain: "http://localhost:4000",
    tamraPublicKey: "a916b2ef-bb66-4e5b-84d9-5bbae98db825",
    webDomain: "http://www.thetopplayer.com",
    googleAnalytics: "G-E1W5ELK5TZ",
    tamaraPrivateKey:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhY2NvdW50SWQiOiI0ZmUxNDU1MC1jZTUzLTRhNmYtYWIyMi05MDkxOThkNmUxNmEiLCJ0eXBlIjoibWVyY2hhbnQiLCJzYWx0IjoiODcxZjY3OGM0MjAwYzg4YWQxZTM0YTIxMTExN2IyYjYiLCJyb2xlcyI6WyJST0xFX01FUkNIQU5UIl0sImlhdCI6MTcxNzY1OTc3NCwiaXNzIjoiVGFtYXJhIn0.xDxkOqZsPt65OGuy0rDfrrjKL6hWLP2EL4ynnxQynK5lr6kMQn2dUlvLACIZc1Bx4wo5vlCcqn5L4h1zQWkFTZXDkVjaiuRh6lyLZmVkGi6KfCdZLjMmve6n3tQhuJT6c4BYcS_7Y1BS4HMCOPpwPu5ZiaYNlGYVmrhM2rdtIq9gd3yWD_8oAFO9qoF0CmdA48LNHVoAXutxR-kNlVk62MQfOD4rf2yxNuzvSj9xywiaXGrleoayEJxF9uw3ANYNVE1fGBjR_uL_dR5EJI6p16oa5NBdZtX29Tn05bx4dsjH_13xSq58hGVpEHIRjZF8NLcwSxvdBeK1zuu7DDU1CA",
  },
  swcMinify: true,

  images: {
    minimumCacheTTL: 60,
    deviceSizes: [
      256, 320, 492, 512, 640, 768, 896, 1024, 1152, 1280, 1408, 1536, 1664, 1792, 1920, 2048, 2176, 2304, 2432, 2560,
      2688, 2944,
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

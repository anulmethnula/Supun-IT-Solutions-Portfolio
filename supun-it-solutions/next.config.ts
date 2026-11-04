import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/projects", destination: "/#projects", permanent: false },
      { source: "/team", destination: "/#team", permanent: false },
      { source: "/tech-stack", destination: "/#tech-stack", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
};

export default nextConfig;

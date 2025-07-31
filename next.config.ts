
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
        "https://6000-firebase-studio-1752862246295.cluster-ubrd2huk7jh6otbgyei4h62ope.cloudworkstations.dev",
        "https://9000-firebase-studio-1752862246295.cluster-ubrd2huk7jh6otbgyei4h62ope.cloudworkstations.dev",
    ]
  }
};

export default nextConfig;

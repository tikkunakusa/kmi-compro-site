/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
    output: "standalone",
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
            {
                protocol: "http",
                hostname: "**",
            },
        ],
    },
    experimental: {
        optimizePackageImports: ["@untitledui/icons"],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    allowedDevOrigins: ['192.168.1.30']
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

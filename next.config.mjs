/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
    experimental: {
        optimizePackageImports: ["@untitledui/icons"],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

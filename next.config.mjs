/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
    output: "standalone",
    experimental: {
        optimizePackageImports: ["@untitledui/icons"],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

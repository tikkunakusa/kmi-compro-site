/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
    experimental: {
        optimizePackageImports: ["@untitledui/icons"],
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

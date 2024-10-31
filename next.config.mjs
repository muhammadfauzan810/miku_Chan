/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net",
            },
        ],
    },
};

export default nextConfig;

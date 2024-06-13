/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "flowbite.com"
            }
        ]
    }
};

export default nextConfig;

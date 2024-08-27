/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Specify the domains from which images can be loaded
    domains: ["example.com", "res.cloudinary.com", "another-domain.com", "my-images.com"], // Add your allowed domains here
  },
};

export default nextConfig;

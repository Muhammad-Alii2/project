/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OpenAI: process.env.OPENAI_API_KEY,
  },
  images: {
    domains: ["s3.us-west-2.amazonaws.com","lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;

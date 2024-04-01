/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
}

export default nextConfig

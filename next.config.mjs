/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  experimental: {
    serverActions:{
      bodySizeLimit : "5mb"
    }
  }
};

export default nextConfig;


// | Part                        | Meaning                                                  |
// | --------------------------- | -------------------------------------------------------- |
// | `images:`                   | This is the configuration for Next.js image optimization |
// | `remotePatterns:`           | Tells Next.js **which external websites are allowed**    |
// | `protocol: "https"`         | Only allow **secure** images                             |
// | `hostname: "randomuser.me"` | Allow images from **randomuser.me**                      |


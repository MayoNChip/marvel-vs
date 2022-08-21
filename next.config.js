// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = {
  env: {
    MARVEL_API_BASE_URL: "http://gateway.marvel.com/",
    MARVEL_PRIVATE_KEY: "141b73df8df1d24d9f4b9982364281a5726961af",
    MARVEL_API_KEY: "b8ceff4fff3619dccd38169ea464ae64",
    // MARVEL_STRING: `${Date.now + MARVEL_PRIVATE_KEY + MARVEL_API_KEY}`,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.annihil.us", "icon-library.com"],
  },
};

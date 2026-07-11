/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to out/,
  // served by Nginx exactly like the previous CRA build.
  output: "export",
  // Folder-style URLs (aboutme/index.html) so Nginx serves routes
  // without extra rewrite rules.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

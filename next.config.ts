/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath e assetPrefix non sono necessari per un repository
  // del tipo <username>.github.io
  // basePath: '/sblaker.github.io', // <-- RIMUOVI O COMMENTA QUESTA RIGA
  // assetPrefix: '/sblaker.github.io', // <-- RIMUOVI O COMMENTA QUESTA RIGA
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
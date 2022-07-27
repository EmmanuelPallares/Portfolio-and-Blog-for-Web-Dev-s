module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    nextScriptWorkers: true,
  },
  cleanDistDir: false,
  images: {
    disableStaticImages: true,
    dangerouslyAllowSvg: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  images: {
    domains: [
      "i.imgur.com",
      "media.graphassets.com",
      "amazonaws.com",
      "tuk.dev",
    ],
  },
};

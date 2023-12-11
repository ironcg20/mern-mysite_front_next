// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["jsx", "js", "ts", "tsx"], // Add any other extensions your project uses

  webpack(config, options) {
    config.resolve.alias["@"] = path.join(__dirname, "src"); // Define your own alias for src folder
    return config;
  },

  // Specify the entry file
  // This configuration option is for Next.js 12.0.0 or later
  // For earlier versions, you can use the target: 'experimental-serverless-trace' option
  experimental: { esmExternals: true }, // Enable ES Modules support
  future: { webpack5: true }, // Enable Webpack 5

  // Specify the entry file for the application
  entry: async () => {
    return {
      ...(await originalEntry()),
      "pages/_app.js": "./src/index.jsx", // Replace 'pages/_app.js' with your desired entry file
    };
  },
};

module.exports = nextConfig;

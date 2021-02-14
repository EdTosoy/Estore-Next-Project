module.exports = {
  // other next config
  i18n: {
    locales: ["en", "ms"],
    defaultLocale: "en",
  },
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
  },
  webpack: (config, options) => {
    config.node = {
      // Some libraries import Node modules but don't use them in the browser.
      // Tell Webpack to provide empty mocks for them so importing them works.
      ...config.node,
      fs: "empty",
      child_process: "empty",
      net: "empty",
      tls: "empty",
    };

    return config;
  },
};

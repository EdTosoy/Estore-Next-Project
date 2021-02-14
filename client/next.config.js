module.exports = {
  // other next config
  i18n: {
    locales: ["en", "ms"],
    defaultLocale: "en",
  },
  env: {
    API_KEY: "AIzaSyBbVE7vIxFMg2jXU0zgMZuNLrp9rhVF3Hg",
    AUTH_DOMAIN: "estore-next-project.firebaseapp.com",
    PROJECT_ID: "estore-next-project",
    STORAGE_BUCKET: "estore-next-project.appspot.com",
    MESSAGING_SENDER_ID: "416406830303",
    APP_ID: "1:416406830303:web:b2cb2045fa1a3cf6547d6a",
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

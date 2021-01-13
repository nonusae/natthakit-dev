const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, {
      /* config for next-optimized-images */
    }],
    {
      webpack: config => {
        return config;
      },
      env: {
        AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE
      }
    }
]);

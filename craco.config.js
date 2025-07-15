const path = require("path");

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `@use "src/styles/mixin.scss" as *;`,
      },
    },
  },
};

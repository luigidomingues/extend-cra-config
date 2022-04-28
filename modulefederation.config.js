const { dependencies } = require("./package.json");

module.exports = {
  name: "host",
  remotes: {
    remote: "remote@http://localhost:3005/remoteEntry.js",
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};

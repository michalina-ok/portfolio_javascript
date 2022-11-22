// vite.config.js
const { resolve } = require("path");
 
module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        projects: resolve(__dirname, "projects.html"),
      },
    },
  },
};


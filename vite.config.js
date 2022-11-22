// vite.config.js
const { resolve } = require("path");
 
module.exports = {
  base: "./", //set base here or in the build command
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
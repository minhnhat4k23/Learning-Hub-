import server from "../../dist/server/index.js";

const staticAssets = {
  fetch(request) {
    return fetch(request);
  },
};

export default {
  async fetch(request, context) {
    return server.fetch(request, { ASSETS: staticAssets }, context);
  },
};

export const config = {
  path: "/*",
  preferStatic: true,
};

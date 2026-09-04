import server from "../../dist/server/index.js";

const staticAssets = {
  fetch(request) {
    return fetch(request);
  },
};

const handler = {
  async fetch(request, context) {
    return server.fetch(request, { ASSETS: staticAssets }, context);
  },
};

export default handler;

export const config = {
  path: "/*",
  preferStatic: true,
};

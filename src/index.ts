import startServer, { defaultServerArugments } from "servc-svc-lib-server";

export const route = "svc-sample";

const baseFolder = __dirname;
const server = startServer(route, { ...defaultServerArugments, baseFolder });

if (require.main === module) {
  server.start();
}

export default server;

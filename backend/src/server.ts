import http from "http";
import app from "./app";
import ENV from "./lib/env";

const startServer = async () => {
  try {
    const server = http.createServer(app);
    const PORT = ENV.PORT || 3000;

    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    // TODO apply error handler
    console.error(error);
    process.exit(1);
  }
};

startServer();

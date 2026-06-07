import http from "http";
import app from "./app";
import ENV from "./lib/env";
import testDBConnection from "./database/test";
import testStorageConnection from "./storage/test";

const startServer = async () => {
  try {
    const dbConnStr = await testDBConnection();
    const strgConnStr = await testStorageConnection();

    const server = http.createServer(app);
    const PORT = ENV.PORT || 3000;

    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(dbConnStr);
      console.log(strgConnStr);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();

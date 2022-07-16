require("dotenv").config();

const server = require("./server");
const connect = require("./connect");

const runServer = async () => {
  try {
    await connect();
    await server();
  } catch (error) {
    console.log("server failed");
  }
};

runServer();

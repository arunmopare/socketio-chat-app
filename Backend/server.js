const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("socket", socket);
  console.log("Socket is Active to be connected");

  socket.on("chat", (payload) => {
    console.log("payload", payload);
    io.emit("chat", payload);
  });
});

server.listen(5000, () => {
  console.log("Server is listening on 5000");
});

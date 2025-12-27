const { Server } = require("socket.io");

exports.initSocket = (server) => {
  const io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    socket.on("join-workspace", (workspaceId) => {
      socket.join(workspaceId);
      io.to(workspaceId).emit("user-joined", socket.id);
    });
  });
};

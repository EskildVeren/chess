import { Server } from "npm:socket.io@4.8.0";

// Initializeing server and settings
const io = new Server(3000, {});

// Example connection
io.on("connection", (socket) => {
  console.log(`Socket ${socket.id} connected`);

  socket.emit("Hello", "world");

  socket.on("disconnect", (reason) => {
    console.log(`Socket ${socket.id} disconnected due to ${reason}`);
  });
});

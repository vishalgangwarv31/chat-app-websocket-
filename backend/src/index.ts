import express from "express";
import { WebSocketServer } from "ws";
import http from "http"

const app = express();
const server = http.createServer(app);

const wss = new WebSocketServer({server});

wss.on("connection", (ws)=>{
    ws.on("message" , (message)=>{
        console.log("message" , message.toString());

        wss.clients.forEach((client)=>{
            client.send(message.toString())
        })
    })

    // console.log(ws)
    ws.on("close", ()=>{
        console.log("user disconnected")
    })
})
const PORT = 3000;

app.get("/health", (req, res) => {
  res.send("health ok");
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
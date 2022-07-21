import express from "express";
import {
  listBooksController,
  addBookController,
  updateBookController,
  deleteBookController,
} from "./controllers/booksController.js";

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.get("/", listBooksController);
server.post("/", addBookController);
server.put("/", updateBookController);
server.delete("/", deleteBookController);
const port = 3000;
const ip = "127.0.0.1";
server.listen(port, ip, () => console.log("server engaged on port:", port));

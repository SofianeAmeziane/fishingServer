import express from "express";
const server = express();
import { ConnectionDb } from "./DB/Connection";
import fishesrouter from "./routes/fishes"
import luresrouter from "./routes/lures"

async function runserver() {
  await ConnectionDb();
  const PORT = 5000;

  server.use(express.json());
  server.use("/fishes", fishesrouter);
  server.use("/lures", luresrouter);
  server.listen(PORT, () => {
    console.log("port ready on :", PORT);
  });
}
runserver();
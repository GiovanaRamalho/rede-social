import express from "express";
import router from "./routes";
import 'dotenv/config'


async function main() {
  const app = express();

  app.use(express.json());
  app.use(router);


  app.listen(process.env.PORT, ()=>{
    console.log("App is running im port:", process.env.PORT);
  });

  app.get("/", (req, res)=>{
      res.send("pagina no ar")
  })
}

try {
  main();
} catch (error) {
  console.log(error);
}

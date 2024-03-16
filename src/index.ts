import express from "express";
import router from "./routes";
import pool from '../db';
import 'dotenv/config'


async function main(): Promise<void> {
  const app = express();

  app.use(express.json());
  app.use(router);

  try {
    const client = await pool.connect();
    console.log("Conexão com o banco de dados PostgreSQL estabelecida com sucesso!");
    client.release();
  } catch (error) {
    console.error("Erro ao conectar-se ao banco de dados PostgreSQL:", error);
  }


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

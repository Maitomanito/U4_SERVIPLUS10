import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import express from "express";
import ConexionDB from "./ConexionDB";

//IMPORTS PARA RUTEO
import rutaApiPerfil from "../ruta/PerfilRuta";


class Servidor {
  public app: express.Application;

  constructor() {
    dotenv.config({ path: "variables.env" });
    ConexionDB();
    this.app = express();
    this.cargarConfiguracion();
    this.activarRutas();
  }

  public cargarConfiguracion() {
    this.app.set("PORT", process.env.PORT);
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json({ limit: "100MB" }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  public activarRutas() {
    this.app.use("/api/perfiles", rutaApiPerfil);
  }

  public iniciarServidor() {
    this.app.listen(this.app.get("PORT"), () => {
      console.log("Servidor escuchando en", this.app.get("PORT"));
    });
  }
}

export default Servidor;

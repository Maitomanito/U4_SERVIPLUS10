import { Router } from "express";
import perfilControlador from "../controlador/PerfilControlador";

class PerfilRuta {
  public rutaApi: Router;

  constructor() {
    this.rutaApi = Router();
    this.activarRutas();
  }

  public activarRutas() {
    this.rutaApi.get("/consultar", perfilControlador.consulta);
    this.rutaApi.post("/crear", perfilControlador.crear);
    this.rutaApi.delete("/eliminar/:codigo", perfilControlador.eliminar);
    this.rutaApi.put("/actualizar/:codigo", perfilControlador.actualizar);
  }
}

const perfilRuta = new PerfilRuta();
export default perfilRuta.rutaApi;

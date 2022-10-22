import { Request, Response } from "express";
import PerfilDao from "../dao/PerfilDao";

class PerfilControlador extends PerfilDao {
  public consulta(req: Request, res: Response) {
    PerfilControlador.obtenerPerfiles(res);
  }

  public crear(req: Request, res: Response) {
    PerfilControlador.crearPerfil(req.body,res);
  }
  public eliminar(req: Request, res: Response) {
    PerfilControlador.eliminarPerfil(req.params.codigo,res);
  }

  public actualizar(req: Request, res: Response) {
    PerfilControlador.actualizarPerfil(req.params.codigo,req.body,res);
  }


}

const perfilControlador = new PerfilControlador();
export default perfilControlador;

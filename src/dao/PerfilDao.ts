import { json, Response } from "express";
import PerfilEsquema from "../esquema/PerfilEsquema";

class PerfilDao {
  protected static async obtenerPerfiles(res: Response): Promise<any> {
    const datos = await PerfilEsquema.find().sort({ _id: -1 });
    res.status(200).json(datos);
  }

  protected static async crearPerfil(
    parametros: any,
    res: Response
  ): Promise<any> {
    const existe = await PerfilEsquema.findOne(parametros);
    if (existe) {
      res
        .status(400)
        .json({ respuesta: "El perfil ya existe en la base de datos" });
    } else {
      const objPerfil = new PerfilEsquema(parametros);
      objPerfil.save((elError, elObjeto) => {
        if (elError) {
          res.status(400).json({ respuesta: "El perfil no se puede crear" });
        } else {
          res.status(200).json({
            respuesta: "Perfil creado correctamente",
            codigo: elObjeto._id,
          });
        }
      });
    }
  }

  protected static async eliminarPerfil(
    codigo: any,
    res: Response
  ): Promise<any> {
    //const existe = await PerfilEsquema.findById(codigo);
    const existe = await PerfilEsquema.findById(codigo).exec();
    if (existe) {
      PerfilEsquema.findByIdAndDelete(codigo, (elError: any, elObjeto: any) => {
        if (elError) {
          res.status(400).json({ respuesta: "El perfil no se pudo eliminar" });
        } else {
          res.status(200).json({
            respuesta: "El perfil ha sido eliminado correctamente",
            eliminado: elObjeto,
          });
        }
      });
    } else {
      res.status(400).json({ respuesta: "El perfil no existe" });
    }
  }

  protected static async actualizarPerfil(
    codigo: any,
    objJson: any,
    res: Response
  ): Promise<any> {
    //const existe = await PerfilEsquema.findById(codigo);
    const existe = await PerfilEsquema.findById(codigo).exec();
    if (existe) {
      PerfilEsquema.findByIdAndUpdate(
        { _id: codigo },
        { $set: objJson },
        (elError: any, elObjeto: any) => {
          if (elError) {
            res
              .status(400)
              .json({ respuesta: "El perfil no se pudo actualizar" });
          } else {
            res.status(200).json({
              respuesta: "El perfil ha sido actualizado correctamente",
              antes: elObjeto,
              despues: objJson
            });
          }
        }
      );
    } else {
      res.status(400).json({ respuesta: "El perfil no existe" });
    }
  }
}
export default PerfilDao;

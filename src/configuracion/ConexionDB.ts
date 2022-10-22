import { connect } from "mongoose";

const ConexionDB = () => {
  const urlConexion = String(process.env.DB_MONGO);
  connect(urlConexion)
    .then(()=>{
        console.log("Conexion establecida",process.env.DB_MONGO);
    })
    .catch((miError) => {
      console.log("Error al conectarse a la base", miError);
    });
};

export default ConexionDB;

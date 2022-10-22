"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const ConexionDB_1 = __importDefault(require("./ConexionDB"));
//IMPORTS PARA RUTEO
const PerfilRuta_1 = __importDefault(require("../ruta/PerfilRuta"));
class Servidor {
    constructor() {
        dotenv_1.default.config({ path: "variables.env" });
        (0, ConexionDB_1.default)();
        this.app = (0, express_1.default)();
        this.cargarConfiguracion();
        this.activarRutas();
    }
    cargarConfiguracion() {
        this.app.set("PORT", process.env.PORT);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100MB" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activarRutas() {
        this.app.use("/api/perfiles", PerfilRuta_1.default);
    }
    iniciarServidor() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("Servidor escuchando en", this.app.get("PORT"));
        });
    }
}
exports.default = Servidor;

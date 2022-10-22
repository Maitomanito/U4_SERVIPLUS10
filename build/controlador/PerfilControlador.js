"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PerfilDao_1 = __importDefault(require("../dao/PerfilDao"));
class PerfilControlador extends PerfilDao_1.default {
    consulta(req, res) {
        PerfilControlador.obtenerPerfiles(res);
    }
    crear(req, res) {
        PerfilControlador.crearPerfil(req.body, res);
    }
    eliminar(req, res) {
        PerfilControlador.eliminarPerfil(req.params.codigo, res);
    }
    actualizar(req, res) {
        PerfilControlador.actualizarPerfil(req.params.codigo, req.body, res);
    }
}
const perfilControlador = new PerfilControlador();
exports.default = perfilControlador;

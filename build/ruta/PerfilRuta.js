"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PerfilControlador_1 = __importDefault(require("../controlador/PerfilControlador"));
class PerfilRuta {
    constructor() {
        this.rutaApi = (0, express_1.Router)();
        this.activarRutas();
    }
    activarRutas() {
        this.rutaApi.get("/consultar", PerfilControlador_1.default.consulta);
        this.rutaApi.post("/crear", PerfilControlador_1.default.crear);
        this.rutaApi.delete("/eliminar/:codigo", PerfilControlador_1.default.eliminar);
        this.rutaApi.put("/actualizar/:codigo", PerfilControlador_1.default.actualizar);
    }
}
const perfilRuta = new PerfilRuta();
exports.default = perfilRuta.rutaApi;

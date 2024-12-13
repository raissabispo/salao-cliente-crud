import { Application } from "express";
import clienteRoutes from "./cliente.routes";

// Concentrador de rotas
export default class Routes {
  constructor(app: Application) {
    app.use("/salao", clienteRoutes);
  }
}
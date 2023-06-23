import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";

const app = express();

app.set("port",5070);

export default app;

//Routes
app.use("/api/categorias",categoriaRoutes);


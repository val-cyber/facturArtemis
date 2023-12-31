import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";

const app = express();

app.set("port",5070);

//middleware
app.use(express.json());

export default app;

//Routes
app.use("/api/categorias",categoriaRoutes);


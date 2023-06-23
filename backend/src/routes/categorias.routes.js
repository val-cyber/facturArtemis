import {Router} from "express";
import { methodsHTTP as categoriaController } from "../controllers/categoria.controller.js";


const router = Router();

router.get("/", categoriaController.getCategorias);

export default router;

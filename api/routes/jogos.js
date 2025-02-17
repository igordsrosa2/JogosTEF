import express from "express";
import {
  getJogos,
  addJogo,
  updateJogo,
  deleteJogo,
} from "../controllers/jogos.js";

const router = express.Router();

router.get("/", getJogos);

router.get("/", addJogo);

router.get("/:id", updateJogo);

router.get("/:id", deleteJogo);

export default router;

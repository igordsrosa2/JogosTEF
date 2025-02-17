import express from "express";
import {
  getJogos,
  addJogo,
  updateJogo,
  deleteJogo,
} from "../controllers/jogos.js";

const router = express.Router();

router.get("/", getJogos);
router.post("/", addJogo);
router.put("/:id", updateJogo);
router.delete("/:id", deleteJogo);

export default router;

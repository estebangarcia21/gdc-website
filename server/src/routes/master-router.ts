import { Router } from "express";
import { gameRouter } from "./game-routes";

const router = Router();

router.use("/games", gameRouter);

export const masterRouter = router;

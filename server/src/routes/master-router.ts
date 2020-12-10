import { Router } from "express";
import { gameRouter } from "./game-routes";
import { todoRouter } from "./todo-routes";

const router = Router();

router.use("/games", gameRouter);
router.use("/todos", todoRouter);

export const masterRouter = router;

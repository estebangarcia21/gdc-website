import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("EMZICALE");
});

export const gameRouter = router;

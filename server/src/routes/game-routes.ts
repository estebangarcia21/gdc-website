import { Router } from "express";
import { client } from "../pg-client";

const router = Router();

const gameNotFoundResponse = {
    error: "Game not found.",
};

router.get("/", async (_, res) => {
    const result = await client.query(`SELECT * FROM "Game"`);

    res.send(result.rows);
});

router.get("/:title", async (req, res) => {
    const result = await client.query(`SELECT * FROM "Game" WHERE title = $1`, [
        req.params.title,
    ]);
    const data = result.rows[0];

    if (!data) res.status(404).send(gameNotFoundResponse);

    res.send(data);
});

router.get("/:id/tags", async (req, res) => {
    const result = await client.query(
        `SELECT tag FROM "Tag" WHERE game_id = $1`,
        [req.params.id]
    );
    const data = result.rows;

    if (!data) res.status(404).send(gameNotFoundResponse);

    const tags: number[] = [];

    for (let i = 0; i < data.length; i++) {
        tags.push(data[i].tag);
    }

    res.send({ tags });
});

export const gameRouter = router;

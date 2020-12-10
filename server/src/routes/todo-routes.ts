import { Router } from "express";
import { client } from "../pg-client";

const router = Router();

router.get("/", async (_, res) => {
    const queryResult = await client.query(`SELECT * FROM "Todo"`);

    res.send(queryResult.rows);
});

router.get("/:team", async (req, res) => {
    const teams = [
        "programmers",
        "priters",
        "musicians",
        "artists",
        "animators",
    ];

    const inputTeam = req.params.team.toLowerCase();

    if (!teams.includes(inputTeam)) {
        res.send({
            error:
                "Team must be either programmers, artists, writers, animators, musicians",
        });
    }

    const result = await client.query(`SELECT * FROM "Todo" WHERE team = $1`, [
        inputTeam.charAt(0).toUpperCase() + inputTeam.slice(1),
    ]);
    const data = result.rows;

    res.send(data);
});

export const todoRouter = router;

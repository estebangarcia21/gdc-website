import { PrismaClient } from "@prisma/client";
import express from "express";
import { masterRouter } from "./routes/master-router";

const prisma = new PrismaClient();

const main = async () => {
    const app = express();

    app.use("/api", masterRouter);

    const port = process.env.PORT || 4000;
    app.listen(port, () =>
        console.log(`api started on http://localhost:${port}/api`)
    );
};

main().catch(err => console.log(err));

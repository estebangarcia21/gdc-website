import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { client } from "./pg-client";
import { masterRouter } from "./routes/master-router";

const main = async () => {
    dotenv.config();

    const app = express();
    app.use(cors());

    app.use("/api", masterRouter);

    const port = process.env.PORT;
    app.listen(port, () =>
        console.log(`API started on ${process.env.BASE_URL}:${port}/api`)
    );
};

main()
    .then(() => client.end())
    .catch(err => console.log(err));

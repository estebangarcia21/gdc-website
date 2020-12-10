import express from "express";
import { masterRouter } from "./routes/master-router";

const main = async () => {
    const app = express();

    app.use("/api", masterRouter);

    const port = process.env.PORT;
    app.listen(port, () =>
        console.log(`server started on http://localhost:${port}/api`)
    );
};

main().catch(err => console.log(err));

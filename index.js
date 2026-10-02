const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;
const REGION = process.env.AWS_REGION || "local";

app.get("/", (req, res) => {
    res.send(`
        <h1>Hello from Multi-Region AWS App!</h1>
        <p>Region: ${REGION}</p>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
});
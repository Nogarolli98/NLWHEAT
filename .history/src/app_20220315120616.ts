import "dotenv/config";
import express, { request, response } from "express";

const app = express();

app.get("/github", (response, request) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.listen(4000, () => console.log(`Server is ruinning on PORT 4000`));

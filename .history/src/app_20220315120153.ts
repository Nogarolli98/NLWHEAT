import express, { request, response } from "express";

const app = express();

app.get("/github", (response, request) => {
  response.redirect();
});

app.listen(4000, () => console.log(`ola`));

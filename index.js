const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (_, res) =>
  res.send({ msg: "Projeto subiu no elastic beanstalk", version: "1.0" })
);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

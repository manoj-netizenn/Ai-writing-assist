const express = require("express");
const cors = require("cors");
require("dotenv").config();
const analyzeRouter = require("./routes/analyze");
const grammarCheck = require("./routes/grammarChecker");
const spellChecker = require("./routes/spellChecker");

const app = express();
const port = 5000 || process.env.PORT;

app.use(cors
  ({
  origin: 'https://brilliant-bunny-d140c2.netlify.app', 
  methods: ['GET', 'POST'],
  credentials: true
})
);
app.use(express.json());

app.use("/api/analyze", analyzeRouter);
app.use("/api/grammarcheck", grammarCheck);
app.use("/api/spellcheck", spellChecker);

app.listen(port, () => {
  console.log(`AI Writing app listening at http://localhost:${port}`);
});

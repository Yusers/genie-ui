const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(config);
// setup Server
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  const completion = await openai.createCompletion({
    model: "gpt-3.5-turbo",
    max_tokens: 520,
    temperature: 0.2,
    n: 1,
    prompt: prompt,
    echo: true,
  });

  res.send(completion.data.choices[0].text);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Sever listening on port ${port}`);
});

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
    model: "text-davinci-003",
    max_tokens: 520,
    temperature: 0,
    prompt: prompt,
  });

  res.send(completion.data.choices[0].text);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Sever listening on port ${port}`);
});
